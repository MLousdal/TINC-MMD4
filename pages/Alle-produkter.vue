<script setup>
const props = defineProps({
  links: { type: Array, required: true },
});

const { data: res } = await useAsyncData("shopify", () => GqlAllProducts());

const products = ref(res.value.products);

const categories = props.links;

const tags = ["Tør/moden", "Fedet"];

const state = reactive({
  desktop: true,
});

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
          {{ products.nodes.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
      <ProductGrid :products="products.nodes"></ProductGrid>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products.nodes"></ProductSlider>
    </section>
  </div>
</template>
