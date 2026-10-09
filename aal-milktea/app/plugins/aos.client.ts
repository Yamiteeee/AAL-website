// app/plugins/aos.client.ts
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 40,
      delay: 0,
      disableMutationObserver: true,
      debounceDelay: 50,
      throttleDelay: 99, // Prevents per-frame DOM measurement spam
    });
  });
});
