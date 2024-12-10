<template>
  <WidgetList />
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import WidgetList from "./components/WidgetList.vue";
const store = useStore();
store.dispatch("loadWidgets");
</script>
