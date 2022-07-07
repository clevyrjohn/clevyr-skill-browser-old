import { createApp } from "vue";
import VueGapi from 'vue-gapi'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

console.log()

app.use(VueGapi, {
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  })

app.mount("#app");
