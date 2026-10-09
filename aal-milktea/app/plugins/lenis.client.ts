// app/plugins/lenis.client.ts
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default defineNuxtPlugin((nuxtApp) => {
  const { setLenis } = useLenis();
  let lenis: Lenis | null = null;
  let rafId: number | null = null;

  nuxtApp.hook("app:mounted", () => {
    // 1. Clean up any hot-reload ghost instances
    if ((window as any).__lenis) {
      (window as any).__lenis.destroy();
    }

    // 2. Clean initialization: no wrapper/content overrides
    lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // 3. Single deterministic RAF pump
    function update(time: number) {
      lenis?.raf(time);
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);

    // 4. Register instance
    setLenis(lenis);
    (window as any).__lenis = lenis;

    nuxtApp.provide("lenis", lenis);
  });

  nuxtApp.hook("app:beforeMount", () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (lenis) lenis.destroy();
  });
});
