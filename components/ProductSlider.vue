<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  products: { type: Array, required: true },
});

const product = {
  title: "Avril Øko Shampoobar til Tørt Hår (85 g)",
  tags: ["Bad og sæbe", "Sæber og sæbeskåle"],
  productType: "Personlig pleje",
  images: {
    nodes: [
      {
        url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901220-3_352x352_2c676692-4c97-44cc-828b-0c72a3858175.webp?v=1653380660",
      },
    ],
  },
  collections: {
    nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
  },
};
</script>

<template>
  <div class="product-slider">
    <Splide
      :options="{
        rewind: true,
        drag: true,
        snap: true,
        autoplay: false,
        pagination: false,
        perPage: 4,
        gap: '1rem',
        mediaQuery: 'max',
        breakpoints: {
          1150: {
            perPage: 3,
          },
          800: {
            perPage: 2,
          },
        },
      }"
    >
      <SplideSlide v-for="product in products">
        <Product
          :title="product.title"
          :price="product.priceRange.minVariantPrice.amount"
          :img="product.images.nodes[0].url"
          :link="`/${product.productType}/${product.collections.nodes[0].title}/${product.tags[1]}/${product.title}`"
          :tag="product.tag"
        ></Product>
      </SplideSlide>
    </Splide>
  </div>
</template>
