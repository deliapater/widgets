<template>
    <div>
        <h1>Product Widgets</h1>
        <WidgetItem 
            v-for="widget in widgets"
            :key="widget.id"
            :widget="widget"
        />
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import WidgetItem from './WidgetItem.vue';

const store = useStore();

const widget = computed(() => store.getters.allWidgets);
</script>