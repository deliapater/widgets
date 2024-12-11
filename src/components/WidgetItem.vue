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
        <img src="../assets/logo.png" alt="Logo" class="w-[33px] h-[33px]"/>
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
