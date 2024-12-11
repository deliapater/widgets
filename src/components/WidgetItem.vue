<template>
  <div class="rounded-lg shadow-md">
    <div
      :style="{
        backgroundColor: colorMap[widget.selectedColor],
        color:
          widget.selectedColor === 'white' || widget.selectedColor === 'beige'
            ? 'var(--custom-green)'
            : '',
      }"
      class="text-customWhite p-4 mb-6 rounded-lg shadow-md"
    >
      <div class="flex items-center gap-4">
        <div class="text-center flex flex-col items-center">
          <svg
            :style="{
              fill:
                widget.selectedColor === 'white' ||
                widget.selectedColor === 'beige'
                  ? 'var(--custom-green)'
                  : 'var(--custom-white)',
            }"
            class="w-[33px] h-[33px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 33"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7594 0.296997C7.85226 0.296997 0.631592 7.51767 0.631592 16.4248C0.631592 25.332 7.85226 32.5526 16.7594 32.5526C25.6666 32.5526 32.8872 25.332 32.8872 16.4248C32.8872 7.51767 25.6666 0.296997 16.7594 0.296997ZM17.7055 27.199C11.0821 27.647 5.98988 15.3899 8.37926 13.009C10.5591 10.837 11.4244 11.6134 11.8337 13.4321C12.0624 14.4477 11.8927 15.6938 11.7398 16.8168C11.6069 17.7927 11.4866 18.6756 11.6515 19.2334C12.0061 20.4331 12.6146 21.3839 13.3152 21.3164C14.0159 21.2489 15.1022 19.3642 12.7643 12.1573C11.0417 6.84704 15.6649 5.01134 16.0884 6.11656C16.2796 6.6155 16.0174 7.43242 15.7094 8.39211C15.3352 9.55832 14.8933 10.9354 15.115 12.2088C15.2964 13.251 15.4695 13.8299 15.6241 14.3469C15.8139 14.9814 15.9758 15.5226 16.0909 16.7129C16.1397 17.2168 16.1162 17.8618 16.0913 18.5473C16.0284 20.2787 15.956 22.2693 17.0136 22.9027C18.4899 23.7869 19.1374 19.4874 17.7159 11.7192C16.4394 4.74359 21.0207 6.89465 21.1415 9.00927C21.2624 11.1239 21.1284 14.3007 20.2738 18.7428C19.4193 23.185 20.0408 23.5508 21.1415 22.4336C22.2423 21.3164 22.3038 20.5267 21.6661 16.1227C21.2314 13.1211 25.9298 11.5922 25.4232 15.5363C24.9132 19.5063 22.6049 26.8676 17.7055 27.199Z"
            />
          </svg>
          <p class="text-xs font-bold">greenspark</p>
        </div>
        <div>
          <p class="text-[12px]">This product {{ widget.action }}</p>
          <p class="text-[21px] font-bold">
            {{ widget.amount }} {{ widget.type }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-customGreen space-y-4">
      <div class="inline-flex items-center gap-8">
        <p>Link to Public Profile</p>
        <label class="custom-checkbox">
          <input
            type="checkbox"
            :checked="widget.linked"
            @change="toggleLinked"
            class="cursor-pointer"
          />
        </label>
      </div>
      <div class="flex items-center gap-8">
        <p>Badge colour</p>
        <div class="flex items-center gap-1">
          <label
            v-for="color in colors"
            :key="color"
            class="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              :value="color"
              v-model="selectedColor"
              @change="changeColor"
              class="hidden"
            />
            <span
              :style="{ backgroundColor: colorMap[color] }"
              class="w-6 h-6"
              :class="{
                'border-2 border-gray-400': selectedColor === color,
                'border-gray-300': selectedColor !== color,
                'hover:shadow-gray-500': true,
              }"
            ></span>
          </label>
        </div>
      </div>
      <div class="flex items-center gap-12">
        <p>Activate badge</p>
        <label class="switch">
          <input
            type="checkbox"
            :checked="widget.active"
            @change="handleSwitchChange"
          />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

interface Widget {
  id: number;
  type: "carbon" | "plastic bottles" | "trees";
  amount: number;
  action: "collects" | "plants" | "offsets";
  active: boolean;
  linked: boolean;
  selectedColor: "white" | "black" | "blue" | "green" | "beige";
}

const props = defineProps<{
  widget: Widget;
}>();

const colors = ["blue", "green", "beige", "white", "black"];

const selectedColor = ref(props.widget.selectedColor);

const changeColor = () => {
  store.commit("changeColor", {
    id: props.widget.id,
    color: selectedColor.value,
  });
};

const store = useStore();

const colorMap = {
  white: "var(--custom-white)",
  black: "var(--custom-black)",
  blue: "var(--custom-blue)",
  green: "var(--custom-green)",
  beige: "var(--custom-beige)",
};

const handleSwitchChange = () => {
  store.commit("setActiveWidget", props.widget.id);
};

const toggleLinked = () => {
  store.commit("toggleLinked", props.widget.id);
};
</script>

<style scoped>
.custom-checkbox input {
  appearance: none;
  height: 18px;
  width: 18px;
  border: 2px solid #000000;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;
}

.custom-checkbox input:checked {
  background-color: var(--custom-green);
  border-color: var(--custom-green);
}

.custom-checkbox input:checked {
  background-color: var(--custom-green);
  border-color: var(--custom-green);
}

.custom-checkbox input:hover {
  border-color: #afc6bd;
}

.custom-checkbox input:checked::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  top: 2px;
  left: 2px;
  border-radius: 2px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--custom-green);
}

input:checked + .slider:before {
  transform: translateX(14px);
}
</style>
