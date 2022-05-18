import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-shopify'],

  shopify: {
    /**
     * Your shopify domain
     */
    domain: 'your-shop-name.myshopify.com',

    /**
     * Your shopify storefront access token
     */
    storefrontAccessToken: 'your-storefront-access-token',

    /**
     * Set language to return translated content (optional)
     */
    // language: 'ja-JP',
  },
})
