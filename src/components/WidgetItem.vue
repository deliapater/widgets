<template>
  <div class="w-[300px] mx-auto items-center">
    <div
      :style="{
        backgroundColor: colorMap[widget.selectedColor],
        color:
          widget.selectedColor === 'white' || widget.selectedColor === 'beige'
            ? 'var(--custom-green)'
            : '',
      }"
      class="text-customWhite px-4 pt-4 mb-6 rounded-lg shadow-md"
    >
      <div class="flex gap-10">
        <div class="text-center flex flex-col items-center">
          <LogoIcon :selectedColor="widget.selectedColor" />
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
      <div class="flex justify-between items-center">
        <p class="inline-flex">
          Link to Public Profile
          <img src="../assets/info.svg" alt="Info Icon" class="w-5 h-4" />
        </p>
        <label class="form-check-label custom-checkbox pb-3 justify-end">
          <input
            type="checkbox"
            :checked="widget.linked"
            @change="toggleLinked"
            class="cursor-pointer form-check-input pb-3"
          />
        </label>
      </div>
      <div class="flex justify-between items-center">
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
                'border-2 border-gray-400': widget.selectedColor === color,
                'border-gray-300': widget.selectedColor !== color,
                'hover:shadow-gray-500': true,
              }"
            ></span>
          </label>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p>Activate badge</p>
        <div class="form-switch">
          <label class="form-check-label">
            <input
              type="checkbox"
              role="switch"
              :checked="widget.active"
              @change="handleSwitchChange"
              class="form-check-input cursor-pointer hover:shadow-lg"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import LogoIcon from "./LogoIcon.vue";

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

const changeColor = (event: Event) => {
  const selectedValue = (event.target as HTMLInputElement).value;
  store.commit("changeColor", {
    id: props.widget.id,
    color: selectedValue,
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
  border-radius: 50%;
  transition: 0.4s;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0); /* Default state: no shadow */
}

input:checked + .slider {
  background-color: var(--custom-green);
}

input:checked + .slider:before {
  transform: translateX(14px);
}

.slider:before:hover {
  box-shadow: 0px 0px 6px 3px rgba(59, 117, 95, 0.5); /* Hover shadow effect */
}

.custom-checkbox input:hover + .checkmark {
  border-color: var(--custom-green);
}
.custom-checkbox .form-check-input:checked {
  background-color: var(--custom-green);
  border-color: var(--custom-green);
}

.custom-checkbox input:checked + .checkmark:hover {
  box-shadow: 0px 0px 10px 4px var(--custom-green);
}

.custom-checkbox input:checked + .checkmark {
  border-radius: 50%;
  transition: box-shadow 0.3s ease-in-out;
}

.custom-checkbox .form-check-input:checked:focus {
  box-shadow: 0 0 0 0.2rem var(--custom-green);
}
.form-check-input:checked {
  background-color: var(--custom-green);
  border-color: var(--custom-green);
}
.form-check-input:not(:checked) {
  box-shadow: none;
}
.form-check-input {
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.form-check-input:hover {
  box-shadow: 0px 0px 10px 2px var(--custom-green);
}
</style>
