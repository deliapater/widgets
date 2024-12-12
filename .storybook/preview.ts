import type { Preview } from "@storybook/vue3";
import { createVuetify } from 'vuetify';
import "../src/style.css";
import store from "../src/store/index.ts";
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from 'vue';

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify();

export const parameters = {
  actions: {
    argTypes: {
      changeColor: { action: "changeColor" }, 
      toggleLinked: { action: "toggleLinked" },
    },
  },
};

export const decorators = [
  (story: any) => ({
    components: { story },
    template: `<div class="v-app"><story /></div>`, 
    setup() {
      const app = createApp({});
      app.use(vuetify); 
      app.use(store);
    },
  }),
];


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
