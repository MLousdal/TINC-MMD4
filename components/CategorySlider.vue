<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";

defineProps({
  categories: { type: Array, required: true },
});
</script>

<template>
  <div class="category-slider">
    <Splide
      :options="{
        rewind: true,
        drag: true,
        snap: true,
        autoplay: false,
        pagination: false,
        perPage: 6,
        gap: '1.5rem',
        mediaQuery: 'max',
        breakpoints: {
          1200: {
            perPage: 4,
          },
          1000: {
            perPage: 3,
          },
        },
      }"
    >
      <SplideSlide v-for="category in categories">
        <CategoryItem
          :name="category.name"
          :img="category.img"
          :link="category.link"
        ></CategoryItem>
      </SplideSlide>
    </Splide>
  </div>
</template>
