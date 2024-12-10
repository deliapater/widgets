import { createStore } from 'vuex';
import { defineProps } from 'vue';
import axios from 'axios';

type WidgetType = 'carbon' | 'plastic bottles' | 'trees';
type WidgetAction = 'collects' | 'plants' | 'offsets';
type WidgetColor = 'white' | 'black' | 'blue' | 'green' | 'beige';
 
export interface Widget {
  id: number;
  type: WidgetType;
  amount: number;
  action: WidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: WidgetColor;
}

const props = defineProps<Widget>();

export interface State {
  widgets: Widget[];
}

const store = createStore<State>({
  state: {
    widgets: [],
  },
  mutations: {
    setWidgets(state, widgets: Widget[]) {
      state.widgets = widgets;
    },
    setActiveWidget(state, id:number) {
        state.widgets.forEach((widget) => {
            widget.active = widget.id === id;
          });
    },
    toggleLinked(state, id: number) {
        const widget = state.widgets.find((w) => w.id === id);
        if (widget) {
            widget.linked = !widget.linked
        }
    },
    changeColor(state, { id, color }: { id: number, color: WidgetColor }) {
        const widget = state.widgets.find((w) => w.id === id);
        if (widget) {
            widget.selectedColor = color;
        }
    },
  },
  actions: {
    async loadWidgets({ commit }) {
      try {
        const response = await axios.get<Widget[]>('https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets');
        console.log(response.data)
        commit('setWidgets', response.data);
      } catch (error) {
        console.error('Error loading widgets:', error);
      }
    },
  },
  getters: {
    allWidgets: (state) => state.widgets,
  },
});

export default store;
