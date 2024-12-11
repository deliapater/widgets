import type { Preview } from "@storybook/vue3";
import { app } from '@storybook/vue3';
import '../src/style.css'; 
import store from '../src/store';

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
};

export const decorators = [
  
  (story) => ({
    components: { story },
    template: `
      <div>
        <story />
      </div>
    `,
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
