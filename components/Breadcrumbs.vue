<script setup>
const router = useRouter();

function goToPrev() {
  router.back();
}
</script>

<template>
  <nav class="breadcrumb">
    <div class="flex flex-gap-1">
      <NuxtLink class="small" to="/">Personlig pleje</NuxtLink>
      <NuxtLink class="small bold" to="/">Tandpleje</NuxtLink>
    </div>
    <button @click="goToPrev" class="">
      <img src="/icons/arrow.svg" alt="" class="flip" />Tilbage
    </button>
    <hr />
  </nav>
</template>
