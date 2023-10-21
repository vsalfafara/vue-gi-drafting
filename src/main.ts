import { createApp } from "vue";
import { createPinia } from "pinia";
import Particles from "vue3-particles";
import "@/styles/index.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import App from "@/App.vue";
import router from "./router/index";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(Particles);
app.use(pinia);

app.mount("#app");
