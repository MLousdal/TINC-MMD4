<script setup>
defineProps({
  products: { type: Array, required: true },
});
</script>

<template>
  <div class="product-slider">
    <Product
      v-for="product in products"
      :name="product.name"
      :price="product.price"
      :img="product.img"
      :link="product.link"
    ></Product>
  </div>
</template>
