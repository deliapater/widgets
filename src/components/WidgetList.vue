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
import { Widget } from '@/store'; 

const store = useStore();

const widgets =  computed<Widget[]>(() => store.getters.allWidgets);
</script>