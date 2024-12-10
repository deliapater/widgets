import { createStore } from 'vuex';
import axios from 'axios';

export interface Widget {
  id: number;
  type: 'carbon' | 'plastic bottles' | 'trees';
  amount: number;
  action: 'collects' | 'plants' | 'offsets';
  active: boolean;
  linked: boolean;
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
}


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
    toggleActive(state, id:number) {
        const widget = state.widgets.find((w) => w.id === id);
        if (widget) {
            widget.active = !widget.active;
        }
    },
    changeColor(state, { id, color }: { id: number, color: 'white' | 'black' | 'blue' | 'green' | 'beige' }) {
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
