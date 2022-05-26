<script setup>
defineProps({
  img: { type: String, default: "se mere" },
  link: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
});
</script>

<template>
  <NuxtLink :to="`${link}`" class="product">
    <img :src="`${img}`" :alt="name" />
    <FavoriteBtn></FavoriteBtn>
    <div class="product-text">
      <p>{{ name }}</p>
      <div class="flex flex-between flex-align-end">
        <p class="bold">{{ price }} kr.</p>
        <input type="image" src="/icons/addCart.svg" class="addToCartBtn" />
      </div>
    </div>
  </NuxtLink>
</template>
