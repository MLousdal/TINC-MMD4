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

const state = reactive({ isDesktop: true, mobileNavOpen: false });

function updateIsDesktop() {
  const mediaQuery = window.matchMedia("(max-width: 1210px)");

  if (mediaQuery.matches) {
    state.isDesktop = false;
  } else {
    state.isDesktop = true;
  }
}

function closeMenu() {
  state.mobileNavOpen = false;
}

onMounted(() => {
  window.addEventListener("resize", updateIsDesktop);
  updateIsDesktop();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsDesktop);
});
</script>

<template>
  <nav class="navbar">
    <input id="navbar_checkbox" v-model="state.mobileNavOpen" type="checkbox" />
    <label for="navbar_checkbox" class="navBtn" v-show="!state.isDesktop">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <NuxtLink to="/" aria-label="Hjem" class="logo">
      <img src="/logo.svg" alt="" />
    </NuxtLink>
    <div class="nav-links" v-show="state.isDesktop">
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
    <div class="mobile-nav-links" v-show="state.mobileNavOpen">
      <input
        id="navbar_checkbox"
        v-model="state.mobileNavOpen"
        type="checkbox"
      />
      <label for="navbar_checkbox" class="navBtn" v-show="!state.isDesktop">
        <div></div>
        <div></div>
        <div></div>
      </label>
      <input type="text" placeholder="Søgefelt" class="searchfield" />
      <NuxtLink
        v-for="link in links"
        :to="link.to"
        class="mobile-nav-links-link"
        :class="{
          'background-secondary':
            link.to == '/Personlig pleje/' ||
            link.to == '/Husholdning/' ||
            link.to == '/Fødevare/',
        }"
        @click="closeMenu"
      >
        <img :src="link.img" :alt="link.title" class="mobile-nav-links-img" />{{
          link.title
        }}
        <input
          type="image"
          src="/icons/arrow.svg"
          alt=""
          class="mobile-nav-links-icon"
        />
      </NuxtLink>
      <NuxtLink to="/" class="mobile-nav-links-link" @click="closeMenu"
        >Forside
        <input
          type="image"
          src="/icons/arrow.svg"
          alt=""
          class="mobile-nav-links-icon"
      /></NuxtLink>
      <NuxtLink to="/" class="mobile-nav-links-link" @click="closeMenu"
        >Blog
        <input
          type="image"
          src="/icons/arrow.svg"
          alt=""
          class="mobile-nav-links-icon"
      /></NuxtLink>
      <NuxtLink to="/" class="mobile-nav-links-link" @click="closeMenu"
        >Om TINC
        <input
          type="image"
          src="/icons/arrow.svg"
          alt=""
          class="mobile-nav-links-icon"
      /></NuxtLink>
    </div>
    <div class="user-links">
      <NuxtLink to="/bruger" aria-label="Bruger" class="user-links-icon"
        ><img src="/icons/user.svg"
      /></NuxtLink>
      <NuxtLink
        to="/bruger/onskeliste"
        aria-label="Ønskeliste"
        class="user-links-icon"
        ><img src="/icons/heart.svg"
      /></NuxtLink>
      <NuxtLink to="/bruger/kurv" aria-label="Kurv" class="user-links-icon"
        ><img src="/icons/basket.svg"
      /></NuxtLink>
    </div>
  </nav>
</template>
