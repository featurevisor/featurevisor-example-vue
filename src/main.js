import { createApp } from "vue";
import { createInstance } from "@featurevisor/sdk";
import { setupApp } from "@featurevisor/vue";

import App from "./App.vue";
import "./assets/main.css";

const DATAFILE_URL =
  "https://featurevisor-example-cloudflare.pages.dev/production/datafile-tag-all.json";

const f = createInstance({
  datafileUrl: DATAFILE_URL,
  onReady: () => console.log("Featurevisor SDK is ready!"),
});

const app = createApp(App);
setupApp(app, f);

app.mount("#app");
