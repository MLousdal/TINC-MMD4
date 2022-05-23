<script setup>
defineProps({
  img: { type: String, default: "se mere" },
  link: { type: String, required: true },
  name: { type: String, required: true },
});
</script>

<template>
  <NuxtLink :to="`${link}`" class="category-item">
    <img :src="`${img}`" :alt="name" />
    <p>{{ name }}</p>
  </NuxtLink>
</template>
