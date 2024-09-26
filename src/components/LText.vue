<template>
  <component
    :is="tag"
    :style="prop.styleProps"
    @click="prop.handleClick"
    class="l-text-component"
    >{{ text }}</component
  >
</template>
<script setup lang="ts" name="LText">
import { computed } from 'vue'
import { defaultProps, textStylePropNames, isEditingProp } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  ...defaultProps,
  ...isEditingProp
})
const prop = computed(() => useComponentCommon(props, textStylePropNames))
//const state = reactive({ styleProps })
</script>
<style>
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
