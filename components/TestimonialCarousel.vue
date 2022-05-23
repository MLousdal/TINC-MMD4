<script setup>
defineProps({
  testimonials: { type: Array, required: true },
});
</script>

<template>
  <div class="testimonial-carousel">
    <Splide
      :options="{
        rewind: true,
        autoplay: true,
        perPage: 1,
        perMove: 1,
        pagination: false,
      }"
      aria-label="My Favorite Images"
    >
      <SplideSlide v-for="testimonial in testimonials">
        <Testimonial
          :date="testimonial.date"
          :img="testimonial.img"
          :name="testimonial.name"
          :rating="testimonial.rating"
          :review="testimonial.review"
          :verified="testimonial.verified"
        ></Testimonial>
      </SplideSlide>
    </Splide>
  </div>
</template>
