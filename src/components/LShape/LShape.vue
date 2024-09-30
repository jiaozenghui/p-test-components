<template>
    <component :is="tag" :style="prop.styleProps" @click="prop.handleClick" class="l-shape-component"
        :draggable="false">
    </component>
</template>
<script setup lang="ts" name="LShape">
import { computed } from 'vue'
import { defaultShapeProps, shapeStylePropNames, isEditingProp } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const props = defineProps({
    tag: {
        type: String,
        default: 'div'
    },
    ...defaultShapeProps,
    ...isEditingProp
})
const prop = computed(() => useComponentCommon(props, shapeStylePropNames))
//const state = reactive({ styleProps })
</script>
<style>
.l-text-component {
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
}
</style>

