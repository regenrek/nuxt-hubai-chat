// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@zunderai/ui'],
  modules: ['@nuxt/ui', '@nuxthub/core'],
  colorMode: {
    classSuffix: '',
  },
  // https://tailwindcss.nuxtjs.org
  tailwindcss: {
    // Expose tailwind config with #tailwind-config
    exposeConfig: true
  },

  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY || "",
    llmModel: process.env.LLM_MODEL || "",
    public: {
      useSimulatedChat: process.env.USE_SIMULATED_CHAT === "true",
    },
  },

  compatibilityDate: '2024-08-20'
})