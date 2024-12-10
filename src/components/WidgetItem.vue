<template>
  <div :style="{ backgroundColor: widget.selectedColor }">
    <p>
      This product {{ widget.action }} {{ widget.amount }} {{ widget.type }}
    </p>
  </div>
  <div>
    <p>Link to Public Profile {{ widget.linked }}</p>
    <p>Badge colour</p>
    <select v-model="selectedColor" @change="changeColor">
      <option v-for="color in colors" :key="color" :value="color">
        {{ color }}
      </option>
    </select>
    <p>
      Activate badge
      <button @click="toggleActive">
        {{ widget.active ? "Deactivate" : "Activate" }}
      </button>
    </p>
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
  widget: Widget; // Define the prop type here
}>();

const colors = ["white", "black", "blue", "green", "beige"];

const selectedColor = props.widget.selectedColor;

const store = useStore();

const toggleActive = () => {
  store.commit("toggleActive", props.widget.id);
};

const changeColor = () => {
  store.commit("changeColor", { id: props.widget.id, color: selectedColor });
};
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 5px;
  margin-top: 10px;
}
select {
  margin-top: 10px;
}
</style>
