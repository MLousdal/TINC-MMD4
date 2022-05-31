<script setup>
const route = useRouter();

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
      :link="`/${route.category}/${route.subCategory}/${route.slug}/${product.title}`"
      :tag="product.tag"
    ></Product>
  </div>
</template>
