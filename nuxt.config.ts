// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    strategy: 'prefix_and_default',
    vueI18n: './i18n.config.ts'
  },
})
