import { createStore } from 'vuex';
import { defineProps } from 'vue';
import axios from 'axios';

type WidgetType = 'carbon' | 'plastic bottles' | 'trees';
type WidgetAction = 'collects' | 'plants' | 'offsets';
 
export interface Widget {
  id: number;
  type: WidgetType;
  amount: number;
  action: WidgetAction;
  active: boolean;
  linked: boolean;
  selectedColor: string;
}

const props = defineProps<Widget>();

export interface State {
  widgets: Widget[];
}

const colorMap: Record<string, string> = {
    white: '#F9F9F9',
    black: '#212121',
    blue: '#2E3A8C',
    green: '#3B755F',
    beige: '#F2EBDB',
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
    changeColor(state, { id, color }: { id: number, color: string}) {
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
        const widgets = response.data.map((widget, index) => ({
          ...widget,
          active: false,
        }));
        commit('setWidgets', widgets);
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
