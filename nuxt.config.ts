import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-shopify'],

  shopify: {
    domain: 'your-shop-name.myshopify.com',
    storefrontAccessToken: 'your-storefront-access-token',
  },

  css: ['@/assets/scss/main.scss']
})
