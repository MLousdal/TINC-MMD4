<script setup>
defineProps({
  name: { type: String, required: true },
  price: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, default: "se mere" },
});
</script>

<template>
  <NuxtLink :to="`${link}`" class="product">
    <img :src="`${img}`" :alt="`name`" />
    <input type="image" src="/icons/heart.svg" class="favoriteBtn" />
    <div class="product-text">
      <p>{{ name }}</p>
      <div class="flex flex-between flex-align-end">
        <p class="bold">{{ price }} kr.</p>
        <input type="image" src="/icons/addCart.svg" class="addToCartBtn" />
      </div>
    </div>
  </NuxtLink>
</template>
