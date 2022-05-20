import { dragscrollNext } from "vue-dragscroll";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(dragscrollNext)
})