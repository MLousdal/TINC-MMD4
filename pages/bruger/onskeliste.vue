<script setup>
const products = [
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    price: "1,20",
    link: "/product",
    img: "/images/denta.jpg",
  },
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
  },
  {
    name: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    price: "1,20",
    link: "/product",
    img: "/images/denta.jpg",
  },
];

const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true });

useHead({
  title: "Ønskeliste",
});
</script>

<template>
  <div class="onskeliste">
    <header>
      <h1 class="text-brand">Ønskeliste</h1>
    </header>
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
    </section>
    <ProductGrid :products="products"></ProductGrid>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/oversigt"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
