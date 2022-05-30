<script setup>
const route = useRoute();

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

const tags = ["Tør/moden", "Fedet"];

useHead({
  title: route.params.slug,
});
</script>

<template>
  <div class="oversigt">
    <div>
      <Breadcrumbs></Breadcrumbs>
    </div>
    <section>
      <div class="flex flex-between flex-align-center">
        <p class="text-gray">{{ products.length }} resultater</p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
      <ProductGrid :products="products"></ProductGrid>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/oversigt"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
