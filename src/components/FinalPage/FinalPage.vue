<template>
    <div class="final-page" :style="page && page.props">
        <div v-for="item in components" :key="item.id" :id="`component-${item.id}`">
            <component :is="item.name" v-bind="item.props" />
        </div>
    </div>
</template>
<script setup lang="ts" name="FinalPage">
import { type PropType } from 'vue'
import { type PageData, type ComponentData } from '@/defaultProps'

const props = defineProps({
    page: {
        type: Object as PropType<PageData>
    },
    components: {
        type: Array as PropType<ComponentData[]>,
        required: true
    }
})
</script>

