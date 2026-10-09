// app/plugins/aos.client.ts
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-out-cubic", // Smooth modern easing
      once: true, // Triggers once (doesn't re-hide when scrolling back up)
      offset: 40, // Offset (px) from viewport bottom before firing
      delay: 50, // Small micro-delay for smooth entry
    });
  });
});
