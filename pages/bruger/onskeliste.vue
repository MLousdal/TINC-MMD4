<script setup>
const products = [
  {
    title: "Mikrogrønt - Frøsamling Mikrogrønt Øko 5Ps.",
    tags: ["Kolonial", "Mad - Kolonial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "125.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9017011_428x428_44620d8f-1945-44ee-a241-ce0a4940f600.webp?v=1653984642",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
  {
    title: "Mikrogrønt - Bukkenhorn Øko",
    tags: ["Kolonial", "Mad - Kolonial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "25.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9017007_428x428_df459806-f498-4d73-9ac9-a75b6341636d.webp?v=1653984578",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
  {
    title: "Hampebox Til Dyrkning 1Ltr. Øko",
    tags: ["Kolonial", "Mad - Kolonial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "60.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9017002_428x428_e902abdf-3c67-40bf-98c7-b6eeaf676b97.webp?v=1653984449",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/hampebox-2021-produkt_01_428x428_55b4687c-eae3-485a-a161-3ca4323e580a.webp?v=1653984449",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
  {
    title: "Bistad Honning (125 g)",
    tags: ["Kolonial", "Mad - Kolinial"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "12.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9004005_428x428_f54dee8a-2793-45a0-b44a-06dae594a9f8.webp?v=1653984404",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Kolonial" }] },
  },
  {
    title: "Økologisk Kakaopulver i løsvægt (pris pr. gram)",
    tags: ["Drikkevare", "Kaffe Te og Kakao"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "0.2" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9014002-sw_421x421_2e031590-c5f1-44bf-a4ed-6cd8548b5ce6.webp?v=1653984089",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Drikkevare" }] },
  },
  {
    title: "Økologisk Kakao Nibs i løsvægt (pris pr. gram)",
    tags: ["Drikkevare", "Kaffe Te og Kakao"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "0.2" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9014001-sw_421x421_429907c3-ee0d-4ab9-8221-e0355ead5381.webp?v=1653983945",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Drikkevare" }] },
  },
  {
    title: "Økologisk Hygge Te i løsvægt (pris pr. gram)",
    tags: ["Drikkevare", "Kaffe Te og Kakao"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "0.49" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9405010-sw_421x421_f8dd89d2-9cc5-4cb0-b7d1-45dccf7cf2c2.webp?v=1653983797",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Drikkevare" }] },
  },
  {
    title: "Økologisk Afslappende Aften Te i løsvægt (pris pr. gram)",
    tags: ["Drikkevare", "Kaffe Te og Kakao"],
    productType: "Fødevare",
    priceRange: { minVariantPrice: { amount: "0.49" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/9405013-sw_421x421_2470f3f5-4cba-4c4b-a12b-536de3119117.webp?v=1653983721",
        },
      ],
    },
    collections: { nodes: [{ title: "Fødevare" }, { title: "Drikkevare" }] },
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
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
