<template>
  <div class="container mx-auto" :style="{ backgroundColor: widget.selectedColor }">
    <p>
      This product {{ widget.action }} {{ widget.amount }} {{ widget.type }}
    </p>
  </div>
  <div>
    <p>Link to Public Profile</p>
    <label>
      <input type="checkbox" :checked="widget.linked" @change="toggleLinked" />
    </label>
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
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(14px);
}
</style>
