<template>
  <svg 
    aria-hidden="true" 
    :fill="fill" 
    :stroke="stroke" 
    :width="width" 
    :height="height"
    :stroke-width="strokeWidth"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = withDefaults(defineProps<{
  name: string,
  fill?: string,
  stroke?: string,
  width?: number | string,
  height?: number | string,
  strokeWidth?: number | string
}>(), {
  fill: '#000',
  stroke: '#000',
  width: 24,
  height: 24,
  strokeWidth: 0
})
const {
  name,
  fill,
  stroke,
  width,
  height,
  strokeWidth
} = toRefs(props)

const symbolId = computed(() => `#icon-${ name.value }`)
</script>