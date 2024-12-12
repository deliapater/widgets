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
      class="text-customWhite px-4 py-4 mb-6 rounded-lg shadow-md"
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
        <v-checkbox
          v-model="widget.linked"
          class="hover:opacity-20 mt-3"
          @change="toggleLinked"
        />
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

        <v-switch
          v-model="widget.active"
          @change="handleSwitchChange($event.target.checked)"
          :color="widget.active ? 'var(--custom-green)' : 'var(--custom-white)'"
          inset
          class="mt-5"
        ></v-switch>
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

const handleSwitchChange = (value: boolean) => {
  if (value) {
    store.commit("setActiveWidget", props.widget.id);
  } else {
    store.commit("clearActiveWidget");
  }
};
const toggleLinked = (value: boolean) => {
  store.commit("toggleLinked", { id: props.widget.id, value });
  console.log("Checkbox changed:", event);
};
</script>
