<script setup>
const blogPost = {
  author: "Amalie A.",
  date: "02/04/22",
  img: "/images/diana-light.jpg",
  link: "/",
  title: "5 lette ændringer som gør dit badeværelse mere bæredygtigt",
};

defineProps({
  links: { type: Array, required: true },
});
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" aria-label="Hjem">
      <img src="/logo.svg" alt="" />
    </NuxtLink>
    <div class="nav-links">
      <div class="sub-menu" v-for="link in links">
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
