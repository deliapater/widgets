<template>
  <div
    class="container mx-auto flex flex-col mt-20 px-6 py-8 bg-gray-100 rounded-lg shadow-lg"
  >
    <h1 class="text-left">Per product widgets</h1>
    <hr class="border-t-2 border-gray-400 my-4 w-full" />
    <div class="flex flex-col md:flex-row gap-10">
      <WidgetItem v-for="widget in widgets" :key="widget.id" :widget="widget" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
import WidgetItem from "./WidgetItem.vue";
import { Widget } from "@/store";

const store = useStore();

const widgets = computed<Widget[]>(() => store.getters.allWidgets);
</script>
