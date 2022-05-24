<script setup>
defineProps({
  products: { type: Array, required: true },
});
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
          :name="product.name"
          :price="product.price"
          :img="product.img"
          :link="product.link"
        ></Product>
      </SplideSlide>
    </Splide>
  </div>
</template>
