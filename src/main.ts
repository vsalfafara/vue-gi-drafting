import { createApp } from "vue";
import { createPinia } from "pinia";
import Particles from "vue3-particles";
import "@/styles/index.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import App from "@/App.vue";
import router from "./router/index";
import { imageList } from "@/data";

function init() {
  const origin = window.location.origin;
  const head = document.getElementsByTagName("head")[0];

  imageList.forEach((image) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = `${origin}/${image}`;
    link.as = "image";
    head.appendChild(link);
  });

  const pinia = createPinia();
  const app = createApp(App);

  app.use(router);
  app.use(Particles);
  app.use(pinia);

  app.mount("#app");
}

init();
