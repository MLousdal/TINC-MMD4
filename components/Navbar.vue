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
            title: "Badtilbehør",
            to: "/Personlig pleje/Bad og sæbe/Badtilbehør",
          },
          {
            title: "Bodyscrub",
            to: "/oversigt",
          },
          {
            title: "Håndsæbe",
            to: "/oversigt",
          },
          {
            title: "Sæber og sæbeskåle",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Hygiejne",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Babering",
            to: "/oversigt",
          },
          {
            title: "Deodorant",
            to: "/oversigt",
          },
          {
            title: "Intimhygiejne",
            to: "/oversigt",
          },
          {
            title: "Lommetørklæder",
            to: "/oversigt",
          },
          {
            title: "Plaster",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Hår",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Hårbørster, Kamme & Sakse",
            to: "/oversigt",
          },
          {
            title: "Hårfarve",
            to: "/oversigt",
          },
          {
            title: "Hårserum, Kur & Massage",
            to: "/oversigt",
          },
          {
            title: "Hårpynt",
            to: "/oversigt",
          },
          {
            title: "Shampoo/Balsam bar",
            to: "/oversigt",
          },
          {
            title: "Shampoo/Balsam flydende",
            to: "/oversigt",
          },
          {
            title: "Styling & Tørshampoo",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Kosmetik",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Ansigt",
            to: "/oversigt",
          },
          {
            title: "Eau de Toilette",
            to: "/oversigt",
          },
          {
            title: "Læber",
            to: "/oversigt",
          },
          {
            title: "Makeup børster & tilbehør",
            to: "/oversigt",
          },
          {
            title: "Neglelak & negletilbehør",
            to: "/oversigt",
          },
          {
            title: "Øjne",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Kropspleje",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Ansigtscreme",
            to: "/oversigt",
          },
          {
            title: "Bodylotion",
            to: "/oversigt",
          },
          {
            title: "Fodpleje",
            to: "/oversigt",
          },
          {
            title: "Håndpleje",
            to: "/oversigt",
          },
          {
            title: "Læbepomade",
            to: "/oversigt",
          },
          {
            title: "Massage",
            to: "/oversigt",
          },
          {
            title: "Rens & tilbehør",
            to: "/oversigt",
          },
          {
            title: "Solcreme & aftersun",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Mor og barn",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Baby",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Tandpleje",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Tandpleje",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Natulige olier & kosmetriske råvare",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Naturlig duft",
            to: "/oversigt",
          },
          {
            title: "Naturlig olie",
            to: "/oversigt",
          },
          {
            title: "Naturlig duft",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Rondeller og vatpinde",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Vatpinde/ørerensere",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Tilbehør",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Toilettasker",
            to: "/oversigt",
          },
          {
            title: "Varmepude",
            to: "/oversigt",
          },
        ],
      },
    ],
  },
  {
    title: "Husholdning",
    to: "/oversigt",
    subMenus: [
      {
        title: "Boligtilbehør",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Duft, røgelse & lys",
            to: "/oversigt",
          },
          {
            title: "Glasflasker & beholder",
            to: "/oversigt",
          },
          {
            title: "Indpakning, poser & pynt",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Køkkenartikler",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Køkkentilbehør",
            to: "/oversigt",
          },
          {
            title: "Sugerør",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Madopbevaring",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Drikkeflasker",
            to: "/oversigt",
          },
          {
            title: "Madkasser",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Rengøring(sartikler)",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Børste & svampe",
            to: "/oversigt",
          },
          {
            title: "Koste & fejebakker",
            to: "/oversigt",
          },
          {
            title: "Opvask",
            to: "/oversigt",
          },
          {
            title: "Rengøringsmidler",
            to: "/oversigt",
          },
          {
            title: "Tøjvask",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Tekstiler",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Håndklæder",
            to: "/oversigt",
          },
          {
            title: "Klude",
            to: "/oversigt",
          },
          {
            title: "Viskestykker",
            to: "/oversigt",
          },
        ],
      },
    ],
  },
  {
    title: "Fødevare",
    to: "/oversigt",
    subMenus: [
      {
        title: "Mad / kolonial",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Kolonial",
            to: "/oversigt",
          },
          {
            title: "Konfekture",
            to: "/oversigt",
          },
          {
            title: "Krydderier, Urter, Blomster & Pulver",
            to: "/oversigt",
          },
          {
            title: "Slik",
            to: "/oversigt",
          },
          {
            title: "Tyggeegummi",
            to: "/oversigt",
          },
        ],
      },
      {
        title: "Drikkevare",
        to: "/oversigt",
        subSubMenus: [
          {
            title: "Drikkevarer",
            to: "/oversigt",
          },
          {
            title: "Kaffe & te",
            to: "/oversigt",
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
                  <NuxtLink to="/oversigt">Nyheder</NuxtLink>
                  <NuxtLink to="/oversigt">Tilbud</NuxtLink>
                  <NuxtLink to="/oversigt">Gaveideer</NuxtLink>
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
        <NuxtLink to="/oversigt" class="underline">Blog</NuxtLink>
      </div>
      <div class="sub-menu">
        <NuxtLink to="/oversigt" class="underline">Om TINC</NuxtLink>
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
