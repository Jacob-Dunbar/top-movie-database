import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiStarFill, FaChevronLeft } from "oh-vue-icons/icons";

addIcons(BiStarFill, FaChevronLeft);

const app = createApp(App);
app.component("v-icon", OhVueIcon);

app.use(store).use(router).mount("#app");
