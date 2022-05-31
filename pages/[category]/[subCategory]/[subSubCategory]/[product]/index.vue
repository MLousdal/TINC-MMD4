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

const product = {
  name: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
  price: "1,20",
  link: "/Personlig pleje/Tandpleje/Tandpleje/Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
  images: ["/images/denta.jpg", "/images/product.png"],
  rating: 2,
  description:
    "Denttabs er 100% naturlige og veganske tandpastatabletter, der både giver dig rene tænder og sparer miljøet for en masse unødig plastikemballage. Denttabs indeholder ikke traditionelt slibemiddel, men derimod cellulose mikrofibre. Fibrene giver en meget nænsom polering af tænderne i stedet for den sædvanlige slibning, men med en fremragende virkning. Med frisk smag af mint.",
  information: [
    {
      title: "Anvendelse",
      text: "Microcrystalline cellulose, sodium bicarbonate, citric acid, silica, sodium laurel glutamate, magnesium stearate, natural mint aroma of menthol, stevia, xantham gum, eugenol.",
    },
    {
      title: "Ingredienser",
      text: "Microcrystalline cellulose, sodium bicarbonate, citric acid, silica, sodium laurel glutamate, magnesium stearate, natural mint aroma of menthol, stevia, xantham gum, eugenol.",
    },
  ],
  reviews: [
    {
      date: "02/04/22",
      // img: "/images/diana-light.jpg",
      name: "Eleanor Pena",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in nibh nisl vivamus luctus sed sodales. Amet fermentum in id facilisis mauris id praesent. ",
      verified: true,
    },
  ],
};
</script>

<template>
  <div class="product-page-wrapper">
    <Breadcrumbs></Breadcrumbs>
    <section class="product-page">
      <ImageCarousel :images="product.images"></ImageCarousel>
      <section>
        <header class="product-page-header">
          <h1>{{ product.name }}</h1>
          <div class="flex flex-between flex-align-center">
            <p class="text-5 bold text-serif">{{ product.price }}</p>
            <div class="product-functions">
              <FavoriteBtn></FavoriteBtn>
              <button>Tilføj til kurv</button>
            </div>
          </div>
        </header>
        <main>
          <header>
            <h2>Beskrivelse</h2>
          </header>
          <p>{{ product.description }}</p>
          <ul class="product-page-list">
            <li>Zero waste</li>
            <li>Vegansk / vegan</li>
          </ul>
          <div class="flex flex-align-center flex-gap-1">
            <img src="/images/svanemærke.png" alt="" class="icon-l" />
            <img src="/images/nøglehulmærke.png" alt="" class="icon-l" />
          </div>
          <div class="flex flex-between flex-align-center">
            <div class="flex flex-column flex-gap-2">
              <p>Anmeldelser ({{ product.reviews.length }})</p>
              <Stars :rating="product.rating"></Stars>
            </div>
            <p class="flex flex-gap-1">
              <span class="text-nowrap">læs anmeldelser</span>
              <img src="/icons/arrow.svg" alt="" class="icon" />
            </p>
          </div>
          <details v-for="info in product.information">
            <summary>{{ info.title }}</summary>
            {{ info.text }}
          </details>
        </main>
      </section>
    </section>
    <hr />
    <section>
      <SectionHeader title="Relaterede" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
