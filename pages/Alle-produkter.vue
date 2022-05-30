<script setup>
const props = defineProps({
  links: { type: Array, required: true },
});

const products = [
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Nedsat",
  },
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Nyhed",
  },
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Udsolgt",
  },
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Nedsat",
  },
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Nyhed",
  },
  {
    img: "/images/product.png",
    link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    tag: "Udsolgt",
  },
];

const categories = props.links;

const tags = ["Tør/moden", "Fedet"];

const state = reactive({ desktop: true, products: products });

useHead({
  title: "Alle produkter",
});
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
          {{ state.products.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
      <ProductGrid :products="state.products"></ProductGrid>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="state.products"></ProductSlider>
    </section>
  </div>
</template>
