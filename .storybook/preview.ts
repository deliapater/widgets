import type { Preview } from "@storybook/vue3";
import "../src/style.css";
import { Store } from 'vuex'; 
import store from "../src/store";

export const parameters = {
  actions: {
    argTypes: {
      changeColor: { action: "changeColor" }, 
      toggleLinked: { action: "toggleLinked" },
    },
  },
};

export const decorators = [
  (story) => ({
    components: { story },
    template: `
      <div>
        <story />
      </div>
    `,
    provide: {
      $store: store,
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
