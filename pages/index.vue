<script setup>
const products = [
  {
    id: "gid://shopify/Product/7709201105131",
    handle: "denttabs-tandpastapiller-uden-fluor-pris-pr-gram",
    title: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    tags: ["Tandpleje"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "1.2" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-sw_1-sw_1000x1000_ba4634d5-b832-4744-be62-699457f3bdce.jpg?v=1653985983",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-3-sw_1_1-sw_1000x1000_14c10c39-c116-4100-9d3c-203b071dfcb5.jpg?v=1653985983",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/8206002-2-sw_1_1-sw_1000x1000_6dc3abcf-f662-40c1-85d6-696aba1ca2b6.jpg?v=1653985983",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Tandpleje" }],
    },
  },
  {
    id: "gid://shopify/Product/7709182230763",
    handle: "handskaret-handsaebe-slice-of-sunshine-110-g",
    title: "Håndskåret Håndsæbe Slice of Sunshine (110 g)",
    tags: [
      "Bad og sæbe",
      "Håndsæbe",
      "Kropspleje",
      "Personlig pleje",
      "Sæber og sæbeskåle",
    ],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "29.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302059-sw_349x349_1b0e7e99-f119-4680-9099-745976a2e528.webp?v=1653985449",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709179773163",
    handle: "handskaret-handsaebe-jasmine-green-tea-swivel-ca-110-g",
    title: "Håndskåret Håndsæbe Jasmine & Green Tea Swivel (ca 110 g)",
    tags: ["Bad og sæbe", "Håndsæbe", "Kropspleje", "Sæber og sæbeskåle"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "29.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302284-sw_349x349_3fcf5431-69b9-4336-8901-d1b323c4ceb6.webp?v=1653985381",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709172629739",
    handle: "happysoaps-green-tea-happiness-balsambar-65-g",
    title: "HappySoaps - Green Tea Happiness Balsambar (65 g)",
    tags: [
      "Bad og sæbe",
      "Håndsæbe",
      "Personlig pleje",
      "Shampoo",
      "Shampoo - Balsam bar",
      "Sæber og sæbeskåle",
    ],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "89.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904071-sw_349x349_726bd6c4-f143-410c-9c7b-ac907de8a049.webp?v=1653985184",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709166993643",
    handle: "b-a-shampoobar-fugt-glans-lemongrass-60g",
    title: "B&A Shampoobar Fugt - Glans Lemongrass 60G",
    tags: ["Hår", "Hårpleje", "Shampoo", "Shampoo - Balsam bar"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "69.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901202-1_349x349_902df7e0-87ff-414a-ba13-ca0e9200145a.webp?v=1653985036",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904079-2_349x349_c3f51280-0fe6-403e-988f-5e2075240112.webp?v=1653985036",
        },
      ],
    },
    collections: { nodes: [{ title: "Personlig pleje" }, { title: "Hår" }] },
  },
  {
    id: "gid://shopify/Product/7709161980139",
    handle: "birk-balsambuds-troldnod-5-stk-a-20-g",
    title: "Birk - BalsamBuds Troldnød (5 stk a 20 g)",
    tags: [
      "Bad og sæbe",
      "Balsam",
      "Håndsæbe",
      "Shampoo - Balsam bar",
      "Sæber og sæbeskåle",
    ],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "48.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/Birk_BalsamBuds-sw_349x349_58c658d0-cb56-4638-8910-921f62be8226.webp?v=1653984889",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709154574571",
    handle: "palmers-coconut-oil-formula-conditioning-shampoo-400-ml",
    title: "Palmers - Coconut Oil Formula Conditioning Shampoo (400 ml)",
    tags: ["Hår", "Shampoo", "Shampoo - Balsam", "Shampoo - Balsam flydende"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "49.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901064-sw_349x349_117d87f3-f0e5-4ed3-b84b-6b29c32e1b78.webp?v=1653984687",
        },
      ],
    },
    collections: { nodes: [{ title: "Personlig pleje" }, { title: "Hår" }] },
  },
  {
    id: "gid://shopify/Product/7709152182507",
    handle: "avril-okologisk-balsam-repair-til-t-skadet-har-200-ml",
    title: "Avril - Økologisk Balsam Repair til Til Skadet Hår (200 ml)",
    tags: ["Flyende balsam", "Hår", "Hårpleje", "Shampoo - Balsam flydende"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "69.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1904078_349x349_0b0a24f7-0c8c-4c77-86fb-bf213b9c80b7.webp?v=1653984467",
        },
      ],
    },
    collections: { nodes: [{ title: "Personlig pleje" }, { title: "Hår" }] },
  },
  {
    id: "gid://shopify/Product/7709145399531",
    handle: "aleppo-saebe-traditionel-med-20-laurbaerolie-200-g",
    title: "Aleppo Sæbe Traditionel med 20% Laurbærolie (200 g)",
    tags: ["Bad og sæbe", "Håndsæbe", "Kropspleje"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "49.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302203_2-sw_349x349_3857853d-9def-4b90-869a-5a7e44470df9.webp?v=1653983933",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302203-2-sw_349x349_f64cfec7-e6d4-4b86-a577-826e33ae7350.webp?v=1653983933",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/3302203-3-sw_349x349_977b73e3-3281-4803-8a35-dedf38ac5f78.webp?v=1653983933",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
  {
    id: "gid://shopify/Product/7709125738731",
    handle: "s-k-shampoobar-neutral-70-g",
    title: "S&K - Shampoobar Neutral (70 g)",
    tags: ["Hår", "Shampoo - Balsam"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "79.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901218-3_349x349_a7efc0ac-2741-4300-861b-d57d0ffbc8df.webp?v=1653982993",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901218-1_349x349_de9e452b-e9db-44cf-ad23-0221fd87c31f.webp?v=1653982993",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901218-2_349x349_d28ac0f8-f332-4f3a-972d-5e5f8f7b3963.webp?v=1653982993",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901218-4_349x349_767ca774-67f4-444f-a6e0-fa823d301958.webp?v=1653982993",
        },
      ],
    },
    collections: { nodes: [{ title: "Personlig pleje" }, { title: "Hår" }] },
  },
  {
    id: "gid://shopify/Product/7698472272107",
    handle: "zao-mascara-aloe-vera-sort-090",
    title: "Zao Mascara Aloe Vera Sort 090",
    tags: ["Kosmetik", "Øjne"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "169.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1101039-2_352x352_b4a9a3d5-d90f-442b-b2a1-aba02898e8eb.webp?v=1653383575",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1101039-3_352x352_cf757529-d426-49f1-a6de-3e5c01c780a9.webp?v=1653383575",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1101039-1_352x352_0ee45ea9-4282-45ca-bac4-327260016bed.webp?v=1653383575",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Kosmetik" }],
    },
  },
  {
    id: "gid://shopify/Product/7698430951659",
    handle: "avril-oko-shampoobar-til-tort-har-85-g",
    title: "Avril Øko Shampoobar til Tørt Hår (85 g)",
    tags: ["Bad og sæbe", "Sæber og sæbeskåle"],
    productType: "Personlig pleje",
    priceRange: { minVariantPrice: { amount: "79.0" } },
    images: {
      nodes: [
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901220-3_352x352_2c676692-4c97-44cc-828b-0c72a3858175.webp?v=1653380660",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901220-2_352x352_831900e3-d906-492b-acb1-1c28edb68582.webp?v=1653380662",
        },
        {
          url: "https://cdn.shopify.com/s/files/1/0646/3261/9243/products/1901220-1_352x352_4f2153a0-0fd6-4012-a67f-1eb11418682f.webp?v=1653380664",
        },
      ],
    },
    collections: {
      nodes: [{ title: "Personlig pleje" }, { title: "Bad og sæbe" }],
    },
  },
];
const categories = [
  {
    img: "/images/anh-nguyen.jpg",
    title: "Fødevare",
    to: "/Fødevare/",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Kropspleje",
    to: "/Personlig pleje/Kropspleje/",
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Madopbevaring og servering",
    to: "/Husholdning/Madopbevaring/",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Naturlig duft",
    to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig duft",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Shampoo - Balsam flydende",
    to: "/Personlig pleje/Hår/Shampoo - Balsam flydende",
  },
  {
    img: "/images/ella-olsson.jpg",
    title: "Opvask",
    to: "/Husholdning/Rengøring(sartikler)/Opvask",
  },
  {
    img: "/images/neauthy-skincare.jpg",
    title: "Kosmetik",
    to: "/Personlig pleje/Kosmetik/",
  },
];
const blogPosts = [
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/diana-light.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/ella-olsson.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
  {
    author: "Amalie A.",
    date: "02/04/22",
    img: "/images/anh-nguyen.jpg",
    link: "/",
    title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
  },
];
const testimonials = [
  {
    date: "23/04/22",
    img: "/images/irene-strong.jpg",
    name: "Jerry Motylinski",
    rating: 5,
    review:
      "Meget interessant butik for krævende økologisk orienteret kunder. Anbefales!",
    verified: true,
  },
  {
    date: "05/10/21",
    name: "Malene Bech",
    rating: 4,
    review: "Meget tæt butik men er flot udnyttet.",
    verified: true,
  },
  {
    date: "03/10/21",
    img: "/images/womanA.jpg",
    name: "Anne K. G. Farcuh",
    rating: 5,
    review:
      "Var der på en søndag, en relativ ung medarbejder ekspederede mig. Hun var meget behjælpelig og kunne svare på alle mine spørgsmål omkring produkterne, meget hjælpsom og flink. Kan kun anbefale butikken 😊",
    verified: true,
  },
  {
    date: "23/09/21",
    img: "/images/jonathan-borba.jpg",
    name: "Rikke Gleerup Lerche",
    rating: 5,
    review:
      "Virkelig fin og dejlig butik med mulighed for specialiteter som tager hensyn til miljøet. Der er virkelig mange lækre sæber, olier, make-up, duftolier Sæbebær, opvasketing m.m. Priserne er rimelige Ekspedienten var meget imødekommende smilende og rar.😃 En dejlig oplevelse, kan varmt anbefales ⭐⭐⭐⭐⭐",
    verified: true,
  },
  {
    date: "11/07/21",
    img: "/images/edward-cisneros.jpg",
    name: "Lone Bang",
    rating: 5,
    review:
      "Super skønt specialorretning. Med fantastisk behagelig service. Kan varmt anbefales",
    verified: true,
  },
];

onMounted(() => {
  document.body.classList.add("hero-blob");
});

onBeforeUnmount(() => {
  document.body.classList.remove("hero-blob");
});

useHead({
  title: "Forside",
});
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-banner">
        <h1>Start din rejse mod en grønnere hverdag hos TINC</h1>
        <img src="/images/hero1.jpg" alt="" class="hero-img-1 flip-horizon" />
        <img src="/images/hero2.png" alt="" class="hero-img-2" />
        <NuxtLink class="btn flex flex-gap-2 hero-btn" to="/Alle-produkter"
          ><span class="text-nowrap">Shop bæredygtigt</span>
          <img src="/icons/arrow-small.svg" alt=""
        /></NuxtLink>
      </div>
      <div class="hero-info">
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/box.svg" alt="" class="icon" />
          <p class="text-dark">
            Bestil inden kl 12, så har du din vare i morgen
          </p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/van.svg" alt="" class="icon" />
          <p class="text-dark">Gratis fragt ved køb over 299,-</p>
        </div>
        <div class="flex flex-gap-1 flex-align-center">
          <img src="/icons/shop.svg" alt="" class="icon" />
          <p class="text-dark">Besøg en af vores fysiske butikker</p>
        </div>
      </div>
    </section>
    <section>
      <SectionHeader title="Nyheder" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
    <section>
      <SectionHeader
        title="Kategorier"
        link="/Alle-produkter"
        noLink
      ></SectionHeader>
      <CategorySlider :categories="categories"></CategorySlider>
    </section>
    <section>
      <SectionHeader title="Populært" link="/Alle-produkter"></SectionHeader>
      <ProductSlider :products="products"></ProductSlider>
    </section>
    <section>
      <SectionHeader title="Blog indlæg" link="/"></SectionHeader>
      <div class="blog-posts">
        <BlogPost
          v-for="blogPost in blogPosts"
          :author="blogPost.author"
          :date="blogPost.date"
          :img="blogPost.img"
          :link="blogPost.link"
          :title="blogPost.title"
        ></BlogPost>
      </div>
    </section>
    <section>
      <header>
        <h2>Det siger vores kunder</h2>
      </header>
      <TestimonialCarousel :testimonials="testimonials"></TestimonialCarousel>
    </section>
    <section>
      <SectionHeader
        title="Om TINC"
        link="/Alle-produkter"
        more="læs mere"
      ></SectionHeader>
      <div class="om-tinc">
        <article>
          <h3>
            Velkommen til TINC – bæredygtig webshop med alt i miljøvenlige
            produkter
          </h3>

          <p>
            Hos TINC er vi Danmarks største bæredygtige webshop, og det er os en
            sand fornøjelse at byde dig indenfor i vores univers af miljøvenlige
            produkter. Vi er en bæredygtig butik med håndplukkede brands og
            produkter, der er nøje udvalgt med omtanke for mennesker og miljø,
            og du kan derfor gå på opdagelse hos os med god samvittighed og
            finde lige det, du står og mangler.
          </p>
        </article>
        <article>
          <h3>Din Zero Waste-butik online</h3>

          <p>
            Økologisk butik. Bæredygtig butik. Zero Waste-butik. TINC lever op
            til det hele og kan imødekomme de behov, du har for miljøvenlige
            produkter i din hverdag. Vores produkter er fremstillet af
            miljøvenlige materialer gennem miljøvenlige processer og pakket i
            miljøvenlig emballage, og der er i det hele taget tænkt i
            bæredygtighed hele vejen rundt. Vi vil være dit foretrukne sted at
            handle miljøvenlige produkter, og vi håber, at du vil nyde dit besøg
            her i vores bæredygtige webshop.
          </p>
        </article>
        <article>
          <h3>Besøg os også i butikkerne i Aalborg og Aarhus</h3>

          <p>
            Du finder os ikke kun online. Kan du slet ikke få nok af
            TINC-universet, og vil du gerne selv kunne mærke varerne i hænderne,
            før du køber, glæder vi os til at møde dig i vores bæredygtige
            butikker i Aalborg og Aarhus, hvor endnu flere miljøvenlige
            produkter venter på dig.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>
