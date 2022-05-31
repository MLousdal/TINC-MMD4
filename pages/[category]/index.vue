<script setup>
const route = useRoute();

useHead({
  title: route.params.category,
});

const props = defineProps({
  links: { type: Array, required: true },
  collectionIDs: { type: Object, required: true },
});

let currentCollectionID = `gid://shopify/Collection/${
  props.collectionIDs[route.params.category] != null
    ? props.collectionIDs[route.params.category]
    : props.collectionIDs.Gavekort
}`;

let { data } = await useAsyncData("shopify", () =>
  GqlAllProductsInCategory({
    collection: currentCollectionID,
  })
);

const categories = props.links.find(
  (link) => link.title === route.params.category
).subMenus;

const tags = ["Tør/moden", "Fedet"];
</script>

<template>
  <div class="oversigt">
    <div>
      <Breadcrumbs></Breadcrumbs>
      <CategorySlider :categories="categories"></CategorySlider>
    </div>
    <section>
      <div class="flex flex-between flex-align-center">
        <p class="text-gray">
          {{ data.collection.products.nodes.length }} resultater
        </p>
        <Filter></Filter>
      </div>
      <div class="flex flex-gap-1">
        <Tag v-for="tag in tags" :filter="tag"></Tag>
      </div>
      <ProductGrid :products="data.collection.products.nodes"></ProductGrid>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="data.collection.products.nodes"></ProductSlider>
    </section>
  </div>
</template>
