import WidgetItem from "../components/WidgetItem.vue";
import { Widget } from "../store/index";

export default {
    title: "Components/WidgetItem",
    component: WidgetItem,
    argTypes: {
      "widget.selectedColor": {
        control: { type: "select" },
        options: ["white", "black", "blue", "green", "beige"],
      },
    },
  };
  
  const Template = (args: { widget: Widget }) => ({
    components: { WidgetItem },
    setup() {
      return { args };
    },
    template: '<WidgetItem v-bind="args" />',
  });
  
  export const Default = Template.bind({});
  Default.args = {
    widget: {
      id: 1,
      type: "carbon",
      amount: 10,
      action: "offsets",
      active: false,
      linked: false,
      selectedColor: "blue",
    },
  };