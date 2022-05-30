import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client"],

  publicRuntimeConfig: {
    "graphql-client": {
      clients: {
        default: {
          host: "https://mmd4-tinc-shop.myshopify.com/api/2022-04/graphql.json",
          token: {
            type: null,
            name: process.env.GQL_TOKEN_NAME,
            value: process.env.GQL_TOKEN_VALUE,
          },
        },
      },
    },
  },

  css: ["@/assets/scss/main.scss"],

  app: {
    head: {
      htmlAttrs: {
        lang: "da",
      },
      titleTemplate:
        "%s | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter",
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://tinc-mmd-4.vercel.app/",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Hos TINC forhandler vi et kæmpe udvalg af Økologiske, Bæredygtige & Naturlige produkter til Dig & din Famillie. TINC.SHOP gør det let og simpelt at købe mere naturlige produkter.",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Forside | TINC Økologisk Butik med Bæredygtige & Miljøvenlige Produkter",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Hos TINC forhandler vi et kæmpe udvalg af Økologiske, Bæredygtige & Naturlige produkter til Dig & din Famillie. TINC.SHOP gør det let og simpelt at købe mere naturlige produkter.",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://tinc-mmd-4.vercel.app/images/diana-light.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://tinc-mmd-4.vercel.app/",
        },
      ],
    },
  },
});
