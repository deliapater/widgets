<template>
  <div class="rounded-lg shadow-md">
    <div
      :style="{ backgroundColor: widget.selectedColor }"
      class="text-customWhite w-[221.32px] h-[66px] p-4 mb-6 rounded-lg shadow-md"
    >
      <p class="text-[12px]">This product {{ widget.action }}</p>
      <p class="text-[21px]">{{ widget.amount }} {{ widget.type }}</p>
    </div>
    <div class="text-customGreen">
      <div class="inline-flex items-center gap-2">
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
      <p>Badge colour</p>
      <select v-model="selectedColor" @change="changeColor">
        <option v-for="color in colors" :key="color" :value="color">
          {{ color }}
        </option>
      </select>
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
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
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

const colors = ["white", "black", "blue", "green", "beige"];

const selectedColor = props.widget.selectedColor;

const store = useStore();

const handleSwitchChange = () => {
  store.commit("setActiveWidget", props.widget.id);
};

const toggleLinked = () => {
  store.commit("toggleLinked", props.widget.id);
};

const changeColor = () => {
  store.commit("changeColor", { id: props.widget.id, color: selectedColor });
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
  background-color: #3B755F;
  border-color: #3B755F;
}

.custom-checkbox input:checked {
  background-color: #3B755F; 
  border-color: #3B755F;
}

.custom-checkbox input:hover {
  border-color: #AFC6BD;
}

.custom-checkbox input:checked::after {
  content: '';
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
  background-color: #3B755F;
}

input:checked + .slider:before {
  transform: translateX(14px);
}
</style>
