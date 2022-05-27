<script setup>
const products = [
  {
    name: "Bistad - Bivoks Wrap - Small / Medium / Large (3 stk)",
    price: "39,00",
    link: "/product",
    img: "/images/product.png",
    amount: 3,
  },
  {
    name: "Denttabs - Tandpastapiller uden Fluor (pris pr. gram)",
    price: "1,20",
    link: "/product",
    img: "/images/denta.jpg",
    amount: 1,
  },
];

const subTotal = ref(0);

function addToTotal(amount, price) {
  subTotal.value += amount * price;
}

onMounted(() => {
  products.forEach((product) => {
    addToTotal(product.amount, parseInt(product.price));
  });
});
</script>

<template>
  <div class="cart">
    <header>
      <h1 class="text-brand">Indkøbskurv</h1>
    </header>
    <section class="cart-section">
      <div class="left">
        <Product
          v-for="product in products"
          :name="product.name"
          :price="product.price"
          :img="product.img"
          :link="product.link"
          :amount="product.amount"
          type="cart"
        ></Product>
        <article class="flex flex-column flex-gap">
          <h4>Få en gratis gave med i din ordre</h4>
          <Product
            name="Lille gratis gave - 1 pr. køb"
            price="0"
            img="/images/gift.png"
            link=""
            type="cart"
            gift
          ></Product>
        </article>
      </div>
      <div class="right">
        <header>
          <h3>Pris i alt</h3>
        </header>
        <div class="cart-cost">
          <p>Forsendelse:</p>
          <span>Fra 49 kr.</span>
          <template v-for="product in products">
            <p>{{ product.name }}:</p>
            <span>{{ product.amount * parseInt(product.price) }} kr.</span>
          </template>
        </div>
        <form>
          <label for="discountCode" class="bold"
            >Tilføj rabatkode
            <input
              type="text"
              placeholder="Tilføj rabatkode"
              name="discountCode"
              id="discountCode"
            />
          </label>
          <label for="shipping"
            ><span>
              Handel for
              <span class="text-brand bold"
                >{{ subTotal - 299 < 0 ? subTotal - 299 : 0 }} kr.</span
              >
              mere og få gratis fragt
            </span>
            <progress
              id="shipping"
              :value="subTotal"
              max="299"
              name="shipping"
            ></progress>
          </label>
        </form>
        <div class="end-overlay">
          <div class="flex flex-row flex-between flex-align-center">
            <h3>Subtotal</h3>
            <p class="text-4 bold">
              {{ subTotal > 299 ? subTotal : subTotal + 49 }} kr.
            </p>
          </div>
          <hr />
          <input type="submit" value="Gå til kassen" />
        </div>
      </div>
    </section>
  </div>
</template>
