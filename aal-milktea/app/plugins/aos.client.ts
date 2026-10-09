// app/plugins/aos.client.ts
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  const { lenis } = useLenis();

  nuxtApp.hook("app:mounted", () => {
    // 1. Initialize AOS with performant defaults
    AOS.init({
      duration: 550, // Slightly tighter duration feels snappier alongside smooth scroll
      easing: "ease-out-cubic",
      once: true, // Crucial: prevents recalculating/re-animating past elements
      offset: 60, // Gives a slight buffer before animating into view
      delay: 0,
      disableMutationObserver: true,
      debounceDelay: 50,
      throttleDelay: 100,
      startEvent: "DOMContentLoaded",
    });

    // 2. Refresh AOS positions once the initial DOM and fonts settle
    if (document.fonts) {
      document.fonts.ready.then(() => {
        AOS.refreshHard();
      });
    }

    // 3. Connect AOS updates directly to Lenis scroll events (throttled)
    if (lenis.value) {
      let isTicking = false;
      lenis.value.on("scroll", () => {
        if (!isTicking) {
          requestAnimationFrame(() => {
            AOS.refresh();
            isTicking = false;
          });
          isTicking = true;
        }
      });
    }
  });

  // Re-calculate element positions when navigating between Nuxt pages
  nuxtApp.hook("page:finish", () => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 150);
  });
});
