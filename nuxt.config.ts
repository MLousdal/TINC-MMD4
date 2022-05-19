import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-shopify"],

  shopify: {
    domain: "your-shop-name.myshopify.com",
    storefrontAccessToken: "your-storefront-access-token",
  },

  css: ["@/assets/scss/main.scss"],

  app: {
    head: {
      title:
        process.env.npm_package_name ||
        "TINC | Økologisk Butik med Bæredygtige & Miljøvenlige Produkter",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
    },
  },
});
