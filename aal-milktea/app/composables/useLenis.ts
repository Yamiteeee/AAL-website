// app/composables/useLenis.ts
import type Lenis from "lenis";

const lenisInstance = shallowRef<Lenis | null>(null);

export const useLenis = () => {
  const setLenis = (instance: Lenis) => {
    lenisInstance.value = instance;
    if (typeof window !== "undefined") {
      (window as any).__lenis = instance;
    }
  };

  const scrollTo = (target: string | number | HTMLElement, offset = -84) => {
    let targetY = 0;

    if (typeof target === "number") {
      targetY = target;
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (!el) {
        console.warn(`[Scroll] Target element "${target}" not found.`);
        return false;
      }
      targetY = el.getBoundingClientRect().top + window.scrollY + offset;
    } else if (target instanceof HTMLElement) {
      targetY = target.getBoundingClientRect().top + window.scrollY + offset;
    }

    // Clamp to valid document boundaries
    const maxScroll =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      ) - window.innerHeight;
    targetY = Math.max(0, Math.min(targetY, maxScroll));

    const startY = window.scrollY;
    const distance = targetY - startY;

    // Already at destination
    if (Math.abs(distance) < 2) return true;

    const duration = 850; // ms
    let startTime: number | null = null;

    // Smooth cubic deceleration curve
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const currentScroll = startY + distance * eased;

      window.scrollTo(0, currentScroll);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
    return true;
  };

  return {
    lenis: lenisInstance,
    setLenis,
    scrollTo,
  };
};
