<script setup>
defineProps({
  img: { type: String, default: "se mere" },
  link: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  amount: { type: Number },
  type: { type: String, default: "default" },
  gift: { type: Boolean, default: false },
});
</script>

<template>
  <div class="product" v-if="type == 'default'">
    <NuxtLink :to="link">
      <img :src="img" :alt="name" />
    </NuxtLink>
    <FavoriteBtn></FavoriteBtn>
    <NuxtLink :to="link" class="product-text">
      <p>{{ name }}</p>
      <p class="bold">{{ price }} kr.</p>
    </NuxtLink>
    <input type="image" src="/icons/addCart.svg" class="addToCartBtn" />
  </div>

  <div class="product-cart" v-if="type == 'cart'">
    <NuxtLink :to="link">
      <img :src="img" :alt="name" />
    </NuxtLink>
    <input type="image" src="/icons/close.svg" class="removeFromCartBtn" />
    <NuxtLink :to="link" class="product-text">
      <h5>{{ name }}</h5>
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
