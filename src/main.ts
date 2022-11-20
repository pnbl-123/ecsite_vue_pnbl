import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "@/i8n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

const app = createApp(App);

app.use(router).use(i18n);

app.mount("#app");
