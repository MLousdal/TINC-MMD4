<script setup>
defineProps({
  img: { type: String, default: "" },
  link: { type: String, required: false },
  title: { type: String, required: false },
  price: { type: String, required: false },
  amount: { type: Number },
  type: { type: String, default: "default" },
  gift: { type: Boolean, default: false },
  tag: { type: String },
});
</script>

<template>
  <div class="product" v-if="type == 'default'">
    <NuxtLink :to="link" class="product-img-link">
      <img :src="img" :alt="title" />
    </NuxtLink>
    <div v-if="tag" class="product-tag" :class="tag">{{ tag }}</div>
    <FavoriteBtn></FavoriteBtn>
    <input type="image" src="/icons/addCart.svg" class="addToCartBtn" />
    <NuxtLink :to="link" class="product-text" tabindex="-1">
      <p>{{ title }}</p>
      <p class="bold">{{ price }} kr.</p>
    </NuxtLink>
  </div>

  <div class="product-cart" v-if="type == 'cart'">
    <NuxtLink :to="link" class="product-img-link">
      <img :src="img" :alt="title" />
    </NuxtLink>
    <input type="image" src="/icons/close.svg" class="removeFromCartBtn" />
    <NuxtLink :to="link" class="product-text">
      <h5>{{ title }}</h5>
      <p class="bold">{{ price }} kr.</p>
    </NuxtLink>
    <label
      for="amount"
      class="flex flex-column flex-center amountPos"
      v-if="!gift"
    >
      Antal
      <input type="number" :value="amount" />
    </label>
    <button class="amountPos" v-else>Tilføj</button>
  </div>
</template>
