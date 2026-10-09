// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [],
  app: {
    head: {
      title: "AAL Group — Cross-Border Reach. Local Execution.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "AAL Group global cross-border trading, raw materials manufacturing, and cold-chain supply network.",
        },
      ],
      link: [
        // Tab Favicon
        {
          rel: "icon",
          type: "image/png",
          href: "/images/aal-pin-white.png",
        },
        // Google Fonts Preconnect
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },
});
