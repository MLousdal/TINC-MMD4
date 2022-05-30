<script setup>
defineProps({
  products: { type: Array, required: true },
});
</script>

<!-- better link :) -->

<template>
  <div class="product-grid">
    <Product
      v-for="product in products"
      :title="product.title"
      :price="product.priceRange.minVariantPrice.amount"
      :img="product.images.nodes[0].url"
      :link="`/${product.productType}/${product.collections.nodes[0].title}/${product.tags[1]}/${product.title}`"
      :tag="product.tag"
    ></Product>
  </div>
</template>
