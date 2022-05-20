<script setup>
defineProps({
  title: { type: String, required: true },
  link: { type: String, required: true },
  more: { type: String, default: "se mere" },
});
</script>

<template>
  <header class="section-header">
    <h2>{{ title }}</h2>
    <NuxtLink :to="`${link}`" class="se-mere"
      >{{ more }}<img src="/icons/arrow.svg" alt=""
    /></NuxtLink>
  </header>
</template>
