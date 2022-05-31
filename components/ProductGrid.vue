<script setup>
defineProps({
  products: { type: Array, required: true },
});
</script>

<template>
  <div class="product-grid">
    <Product
      v-for="product in products"
      :title="product.title"
      :price="product.priceRange.minVariantPrice.amount"
      :img="product.images.nodes[0].url"
      :link="`/${product.productType}/produkt/${product.id.slice(22)}`"
      :tag="product.tag"
    ></Product>
  </div>
</template>
