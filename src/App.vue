<template>
  <WidgetList />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import WidgetList from "./components/WidgetList.vue";
import './style.css'; 
const store = useStore();
store.dispatch("loadWidgets");
</script>
