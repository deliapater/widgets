<template>
    <div class="container mx-auto px-6 py-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 class="w-258 h-20 h1-custom-typography">Per product widgets</h1>
        <div class="flex gap-10">
        <WidgetItem 
            v-for="widget in widgets"
            :key="widget.id"
            :widget="widget"
        />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import WidgetItem from './WidgetItem.vue';
import { Widget } from '@/store'

const store = useStore();

const widgets =  computed<Widget[]>(() => store.getters.allWidgets);
</script>
<style scoped>
.h1-custom-typography {
  font-family: 'Cabin', sans-serif;
  font-size: 30px; 
  font-weight: 700; 
  text-align: left; 
  text-underline-position: from-font;
  text-decoration-skip-ink: none; 
}
</style>