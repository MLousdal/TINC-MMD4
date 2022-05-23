<script setup>
defineProps({
  name: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, default: "se mere" },
});
</script>

<template>
  <NuxtLink :to="`${link}`" class="category-item">
    <img :src="`${img}`" :alt="`name`" />
    <p>{{ name }}</p>
  </NuxtLink>
</template>
