<script setup>
defineProps({
  products: { type: Array, required: true },
});
</script>

<template>
  <div class="product-grid">
    <Product
      v-for="product in products"
      :name="product.name"
      :price="product.price"
      :img="product.img"
      :link="product.link"
      :tag="product.tag"
    ></Product>
  </div>
</template>
