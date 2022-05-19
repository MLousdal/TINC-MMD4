<script setup></script>

<template>
  <nav class="navbar">
    <NuxtLink to="/">
      <img src="~/assets/logo.svg" alt="" />
    </NuxtLink>
    <div class="nav-links">
      <div class="sub-menu">
        <NuxtLink to="personlig-pleje" class="underline"
          >Personlig pleje</NuxtLink
        >
        <div class="sub-menu-content">
          <NuxtLink to="kropspleje" class="underline">Kropspleje</NuxtLink>
          <NuxtLink to="kosmetik" class="underline">Kosmetik</NuxtLink>
          <NuxtLink to="har" class="underline">Hår</NuxtLink>
          <NuxtLink to="hygiejne" class="underline">Hygiejne</NuxtLink>
          <NuxtLink to="tandpleje" class="underline">Tandpleje</NuxtLink>
          <NuxtLink to="bad-og-saebe" class="underline">Bad og sæbe</NuxtLink>
          <NuxtLink to="mor-og-barn" class="underline">Mor & barn</NuxtLink>
          <NuxtLink to="naturlige-olier" class="underline"
            >Natulige olier & kosmetriske råvare</NuxtLink
          >
          <NuxtLink to="rondeller-og-vatpinde" class="underline"
            >Rondeller og vatpinde</NuxtLink
          >
          <NuxtLink to="tilbehor" class="underline">Tilbehør</NuxtLink>
        </div>
      </div>
      <div class="sub-menu">
        <NuxtLink to="husholdning" class="underline">Husholdning</NuxtLink>
        <div class="sub-menu-content">
          <NuxtLink to="kropspleje" class="underline">Kropspleje</NuxtLink>
          <NuxtLink to="kosmetik" class="underline">Kosmetik</NuxtLink>
          <NuxtLink to="har" class="underline">Hår</NuxtLink>
          <NuxtLink to="hygiejne" class="underline">Hygiejne</NuxtLink>
          <NuxtLink to="tandpleje" class="underline">Tandpleje</NuxtLink>
          <NuxtLink to="bad-og-saebe" class="underline">Bad og sæbe</NuxtLink>
          <NuxtLink to="mor-og-barn" class="underline">Mor & barn</NuxtLink>
          <NuxtLink to="naturlige-olier" class="underline"
            >Natulige olier & kosmetriske råvare</NuxtLink
          >
          <NuxtLink to="rondeller-og-vatpinde" class="underline"
            >Rondeller og vatpinde</NuxtLink
          >
          <NuxtLink to="tilbehor" class="underline">Tilbehør</NuxtLink>
        </div>
      </div>
      <div class="sub-menu">
        <NuxtLink to="fodevare" class="underline">Fødevare</NuxtLink>
        <div class="sub-menu-content">
          <NuxtLink to="kropspleje" class="underline">Kropspleje</NuxtLink>
          <NuxtLink to="kosmetik" class="underline">Kosmetik</NuxtLink>
          <NuxtLink to="har" class="underline">Hår</NuxtLink>
          <NuxtLink to="hygiejne" class="underline">Hygiejne</NuxtLink>
          <NuxtLink to="tandpleje" class="underline">Tandpleje</NuxtLink>
          <NuxtLink to="bad-og-saebe" class="underline">Bad og sæbe</NuxtLink>
          <NuxtLink to="mor-og-barn" class="underline">Mor & barn</NuxtLink>
          <NuxtLink to="naturlige-olier" class="underline"
            >Natulige olier & kosmetriske råvare</NuxtLink
          >
          <NuxtLink to="rondeller-og-vatpinde" class="underline"
            >Rondeller og vatpinde</NuxtLink
          >
          <NuxtLink to="tilbehor" class="underline">Tilbehør</NuxtLink>
        </div>
      </div>
      |
      <div class="sub-menu">
        <NuxtLink to="blog" class="underline">Blog</NuxtLink>
      </div>
      <div class="sub-menu">
        <NuxtLink to="om-tinc" class="underline">Om TINC</NuxtLink>
      </div>
    </div>
    <div class="user-links">
      <NuxtLink to="profile"
        ><img src="~/assets/icons/user.svg" alt=""
      /></NuxtLink>
      <NuxtLink to="profile/wishlist"
        ><img src="~/assets/icons/heart.svg" alt=""
      /></NuxtLink>
      <NuxtLink to="cart"
        ><img src="~/assets/icons/basket.svg" alt=""
      /></NuxtLink>
    </div>
  </nav>
</template>
