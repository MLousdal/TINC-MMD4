<script setup>
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
      <SectionHeader title="Relaterede" link="/oversigt"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
    <hr />
    <section>
      <SectionHeader title="Sidst set" link="/oversigt"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
  </div>
</template>
