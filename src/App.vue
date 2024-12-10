<template>
  <div>
    <h1>Product Widgets</h1>
    <ul v-if="widgets.length > 0">
      <li v-for="widget in widgets" :key="widget.id">
        <p><strong>Type:</strong>{{ widget.type }}</p>
        <p><strong>Amount:</strong>{{ widget.amount }}</p>
        <p><strong>Active:</strong>{{ widget.active ? "Yes" : "No" }}</p>
        <p><strong>Linked:</strong>{{ widget.linked ? "Yes" : "No" }}</p>
        <p><strong>Color:</strong>{{ widget.selectedColor }}</p>
      </li>
    </ul>
    <p v-else>Loading widgets...</p> 
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { State } from "./store";
import { computed } from "vue";

const store = useStore<State>();

store.dispatch("loadWidgets");

const widgets = computed(() => store.getters.allWidgets);
</script>
