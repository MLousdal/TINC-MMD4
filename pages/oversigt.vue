<script setup>
import { reactive } from "vue";

const products = [
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
];
const categories = [
  {
    name: "Fødevare",
    link: "/",
    img: "/images/anh-nguyen.jpg",
  },
  {
    name: "Kropspleje",
    link: "/",
    img: "/images/neauthy-skincare.jpg",
  },
  {
    name: "Madopbevaring og servering",
    link: "/",
    img: "/images/ella-olsson.jpg",
  },
  {
    name: "Fødevare",
    link: "/",
    img: "/images/anh-nguyen.jpg",
  },
  {
    name: "Kropspleje",
    link: "/",
    img: "/images/neauthy-skincare.jpg",
  },
  {
    name: "Madopbevaring og servering",
    link: "/",
    img: "/images/ella-olsson.jpg",
  },
  {
    name: "Fødevare",
    link: "/",
    img: "/images/anh-nguyen.jpg",
  },
  {
    name: "Kropspleje",
    link: "/",
    img: "/images/neauthy-skincare.jpg",
  },
  {
    name: "Madopbevaring og servering",
    link: "/",
    img: "/images/ella-olsson.jpg",
  },
];
const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true });
</script>

<template>
  <div>
    <div>
      <Breadcrumbs></Breadcrumbs>
      <CategorySlider :categories="categories"></CategorySlider>
    </div>
    <section>
      <div class="flex flex-between flex-align-center">
        <p class="text-gray" v-if="state.desktop">
          {{ products.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
      <ProductGrid :products="products"></ProductGrid>
    </section>
    <section>
      <SectionHeader title="Sidst set" link="/"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
