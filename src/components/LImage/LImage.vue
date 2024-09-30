<template>
    <img class="l-image-component" :style="prop.styleProps" :src="props.imgSrc" @click="prop.handleClick" /></template>
<script setup lang="ts">
import { computed } from 'vue'
import { defaultImageProps, shapeStylePropNames, isEditingProp } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const props = defineProps({
    ...defaultImageProps,
    ...isEditingProp
})

const prop = computed(() => useComponentCommon(props, shapeStylePropNames))

</script>
<style lang="scss" scoped>
.l-image-component {
    max-width: 100%;
    position: relative !important;
}
</style>