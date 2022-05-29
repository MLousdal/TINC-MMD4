<script setup>
const blogPost = {
  author: "Amalie A.",
  date: "02/04/22",
  img: "/images/diana-light.jpg",
  link: "/",
  title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
};

const Links = [
  {
    title: "Personlig pleje",
    to: "/Personlig pleje",
    subMenus: [
      {
        title: "Bad og sæbe",
        to: "/Personlig pleje/Bad og sæbe",
        subSubMenus: [
          {
            title: "Bad tilbehør",
            to: "/Personlig pleje/Bad og sæbe/Bad tilbehør",
          },
          {
            title: "Bodyscrub",
            to: "/Personlig pleje/Bad og sæbe/Bodyscrub",
          },
          {
            title: "Håndsæbe",
            to: "/Personlig pleje/Bad og sæbe/Håndsæbe",
          },
          {
            title: "Sæber og sæbeskåle",
            to: "/Personlig pleje/Bad og sæbe/Sæber og sæbeskåle",
          },
        ],
      },
      {
        title: "Hygiejne",
        to: "/Personlig pleje/Hygiejne/",
        subSubMenus: [
          {
            title: "Babering",
            to: "/Personlig pleje/Hygiejne/Babering",
          },
          {
            title: "Deodorant",
            to: "/Personlig pleje/Hygiejne/Deodorant",
          },
          {
            title: "Intimhygiejne",
            to: "/Personlig pleje/Hygiejne/Intimhygiejne",
          },
          {
            title: "Lommetørklæder",
            to: "/Personlig pleje/Hygiejne/Lommetørklæder",
          },
          {
            title: "Plaster",
            to: "/Personlig pleje/Hygiejne/Plaster",
          },
        ],
      },
      {
        title: "Hår",
        to: "/Personlig pleje/Hår/",
        subSubMenus: [
          {
            title: "Hårbørster, Kamme & Sakse",
            to: "/Personlig pleje/Hår/Hårbørster, Kamme & Sakse",
          },
          {
            title: "Hårfarve",
            to: "/Personlig pleje/Hår/Hårfarve",
          },
          {
            title: "Hårserum, Kur & Massage",
            to: "/Personlig pleje/Hår/Hårserum, Kur & Massage",
          },
          {
            title: "Hårpynt",
            to: "/Personlig pleje/Hår/Hårpynt",
          },
          {
            title: "Shampoo - Balsam bar",
            to: "/Personlig pleje/Hår/Shampoo - Balsam bar",
          },
          {
            title: "Shampoo - Balsam flydende",
            to: "/Personlig pleje/Hår/Shampoo - Balsam flydende",
          },
          {
            title: "Styling & Tørshampoo",
            to: "/Personlig pleje/Hår/Styling & Tørshampoo",
          },
        ],
      },
      {
        title: "Kosmetik",
        to: "/Personlig pleje/Kosmetik/",
        subSubMenus: [
          {
            title: "Ansigt",
            to: "/Personlig pleje/Kosmetik/Ansigt",
          },
          {
            title: "Eau de Toilette",
            to: "/Personlig pleje/Kosmetik/Eau de Toilette",
          },
          {
            title: "Læber",
            to: "/Personlig pleje/Kosmetik/Læber",
          },
          {
            title: "Makeup børster & tilbehør",
            to: "/Personlig pleje/Kosmetik/Makeup børster & tilbehør",
          },
          {
            title: "Neglelak & negletilbehør",
            to: "/Personlig pleje/Kosmetik/Neglelak & negletilbehør",
          },
          {
            title: "Øjne",
            to: "/Personlig pleje/Kosmetik/Øjne",
          },
        ],
      },
      {
        title: "Kropspleje",
        to: "/Personlig pleje/Kropspleje/",
        subSubMenus: [
          {
            title: "Ansigtscreme",
            to: "/Personlig pleje/Kropspleje/Ansigtscreme",
          },
          {
            title: "Bodylotion",
            to: "/Personlig pleje/Kropspleje/Bodylotion",
          },
          {
            title: "Fodpleje",
            to: "/Personlig pleje/Kropspleje/Fodpleje",
          },
          {
            title: "Håndpleje",
            to: "/Personlig pleje/Kropspleje/Håndpleje",
          },
          {
            title: "Læbepomade",
            to: "/Personlig pleje/Kropspleje/Læbepomade",
          },
          {
            title: "Massage",
            to: "/Personlig pleje/Kropspleje/Massage",
          },
          {
            title: "Rens & tilbehør",
            to: "/Personlig pleje/Kropspleje/Rens & tilbehør",
          },
          {
            title: "Solcreme & aftersun",
            to: "/Personlig pleje/Kropspleje/Solcreme & aftersun",
          },
        ],
      },
      {
        title: "Mor og barn",
        to: "/Personlig pleje/Mor og barn/",
        subSubMenus: [
          {
            title: "Baby",
            to: "/Personlig pleje/Mor og barn/Baby",
          },
        ],
      },
      {
        title: "Tandpleje",
        to: "/Personlig pleje/Tandpleje/",
        subSubMenus: [
          {
            title: "Tandpleje",
            to: "/Personlig pleje/Tandpleje/Tandpleje",
          },
        ],
      },
      {
        title: "Natulige olier & kosmetriske råvare",
        to: "/Personlig pleje/Natulige olier & kosmetriske råvare/",
        subSubMenus: [
          {
            title: "Naturlig duft",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig duft",
          },
          {
            title: "Naturlig olie",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Naturlig olie",
          },
          {
            title: "Kosmetiske råvarer",
            to: "/Personlig pleje/Natulige olier & kosmetriske råvare/Kosmetiske råvarer",
          },
        ],
      },
      {
        title: "Rondeller og vatpinde",
        to: "/Personlig pleje/Rondeller og vatpinde/",
        subSubMenus: [
          {
            title: "Vatpinde og ørerensere",
            to: "/Personlig pleje/Rondeller og vatpinde/Vatpinde og ørerensere",
          },
        ],
      },
      {
        title: "Tilbehør",
        to: "/Personlig pleje/Tilbehør/",
        subSubMenus: [
          {
            title: "Toilettasker",
            to: "/Personlig pleje/Tilbehør/Toilettasker",
          },
          {
            title: "Varmepude",
            to: "/Personlig pleje/Tilbehør/Varmepude",
          },
        ],
      },
    ],
  },
  {
    title: "Husholdning",
    to: "/Husholdning/",
    subMenus: [
      {
        title: "Boligtilbehør",
        to: "/Husholdning/Boligtilbehør/",
        subSubMenus: [
          {
            title: "Duft, røgelse & lys",
            to: "/Husholdning/Boligtilbehør/Duft, røgelse & lys",
          },
          {
            title: "Glasflasker & beholder",
            to: "/Husholdning/Boligtilbehør/Glasflasker & beholder",
          },
          {
            title: "Indpakning, poser & pynt",
            to: "/Husholdning/Boligtilbehør/Indpakning, poser & pynt",
          },
        ],
      },
      {
        title: "Køkkenartikler",
        to: "/Husholdning/Køkkenartikler/",
        subSubMenus: [
          {
            title: "Køkkentilbehør",
            to: "/Husholdning/Køkkenartikler/Køkkentilbehør",
          },
          {
            title: "Sugerør",
            to: "/Husholdning/Køkkenartikler/Sugerør",
          },
        ],
      },
      {
        title: "Madopbevaring",
        to: "/Husholdning/Madopbevaring/",
        subSubMenus: [
          {
            title: "Drikkeflasker",
            to: "/Husholdning/Madopbevaring/Drikkeflasker",
          },
          {
            title: "Madkasser",
            to: "/Husholdning/Madopbevaring/Madkasser",
          },
        ],
      },
      {
        title: "Rengøring(sartikler)",
        to: "/Husholdning/Rengøring(sartikler)/",
        subSubMenus: [
          {
            title: "Børste & svampe",
            to: "/Husholdning/Rengøring(sartikler)/Børste & svampe",
          },
          {
            title: "Koste & fejebakker",
            to: "/Husholdning/Rengøring(sartikler)/Koste & fejebakker",
          },
          {
            title: "Opvask",
            to: "/Husholdning/Rengøring(sartikler)/Opvask",
          },
          {
            title: "Rengøringsmidler",
            to: "/Husholdning/Rengøring(sartikler)/Rengøringsmidler",
          },
          {
            title: "Tøjvask",
            to: "/Husholdning/Rengøring(sartikler)/Tøjvask",
          },
        ],
      },
      {
        title: "Tekstiler",
        to: "/Husholdning/Tekstiler/",
        subSubMenus: [
          {
            title: "Håndklæder",
            to: "/Husholdning/Tekstiler/Håndklæder",
          },
          {
            title: "Klude",
            to: "/Husholdning/Tekstiler/Klude",
          },
          {
            title: "Viskestykker",
            to: "/Husholdning/Tekstiler/Viskestykker",
          },
        ],
      },
    ],
  },
  {
    title: "Fødevare",
    to: "/Fødevare/",
    subMenus: [
      {
        title: "Mad og kolonial",
        to: "/Fødevare/Mad og kolonial/",
        subSubMenus: [
          {
            title: "Kolonial",
            to: "/Fødevare/Mad og kolonial/Kolonial",
          },
          {
            title: "Konfekture",
            to: "/Fødevare/Mad og kolonial/Konfekture",
          },
          {
            title: "Krydderier, Urter, Blomster & Pulver",
            to: "/Fødevare/Mad og kolonial/Krydderier, Urter, Blomster & Pulver",
          },
          {
            title: "Slik",
            to: "/Fødevare/Mad og kolonial/Slik",
          },
          {
            title: "Tyggeegummi",
            to: "/Fødevare/Mad og kolonial/Tyggeegummi",
          },
        ],
      },
      {
        title: "Drikkevare",
        to: "/Fødevare/Drikkevare/",
        subSubMenus: [
          {
            title: "Drikkevarer",
            to: "/Fødevare/Drikkevare/Drikkevarer",
          },
          {
            title: "Kaffe & te",
            to: "/Fødevare/Drikkevare/Kaffe & te",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" aria-label="Hjem">
      <img src="/logo.svg" alt="" />
    </NuxtLink>
    <div class="nav-links">
      <div class="sub-menu" v-for="link in Links">
        <NuxtLink :to="link.to" class="underline">{{ link.title }}</NuxtLink>
        <div class="sub-menu-content">
          <div class="sub-sub-menu" v-for="subMenu in link.subMenus">
            <NuxtLink :to="subMenu.to">{{ subMenu.title }}</NuxtLink>
            <div class="sub-sub-menu-content">
              <div class="sub-sub-menu-content-filter">
                <p class="text-gray">Shop {{ subMenu.title }}</p>
                <div class="flex flex-column flex-gap-2">
                  <NuxtLink :to="subMenu.to">Nyheder</NuxtLink>
                  <NuxtLink :to="subMenu.to">Tilbud</NuxtLink>
                  <NuxtLink :to="subMenu.to">Gaveideer</NuxtLink>
                </div>
              </div>
              <div class="sub-sub-menu-content-categories">
                <p class="text-gray">Shop efter kategori</p>
                <div class="flex flex-column flex-gap-2">
                  <NuxtLink
                    v-for="subSubMenu in subMenu.subSubMenus"
                    :to="subSubMenu.to"
                    >{{ subSubMenu.title }}</NuxtLink
                  >
                </div>
              </div>
              <BlogPost
                :author="blogPost.author"
                :date="blogPost.date"
                :img="blogPost.img"
                :link="blogPost.link"
                :title="blogPost.title"
              ></BlogPost>
            </div>
          </div>
        </div>
      </div>
      |
      <div class="sub-menu">
        <NuxtLink to="/" class="underline">Blog</NuxtLink>
      </div>
      <div class="sub-menu">
        <NuxtLink to="/" class="underline">Om TINC</NuxtLink>
      </div>
    </div>
    <div class="user-links">
      <NuxtLink to="/bruger" aria-label="Bruger"
        ><img src="/icons/user.svg"
      /></NuxtLink>
      <NuxtLink to="/bruger/onskeliste" aria-label="Ønskeliste"
        ><img src="/icons/heart.svg"
      /></NuxtLink>
      <NuxtLink to="/bruger/kurv" aria-label="Kurv"
        ><img src="/icons/basket.svg"
      /></NuxtLink>
    </div>
  </nav>
</template>
