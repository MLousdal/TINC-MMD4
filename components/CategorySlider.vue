<script setup>
defineProps({
  categories: { type: Array, required: true },
});
</script>

<template>
  <div class="category-slider">
    <CategoryItem
      v-for="category in categories"
      :name="category.name"
      :img="category.img"
      :link="category.link"
    ></CategoryItem>
  </div>
</template>
