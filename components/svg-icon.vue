<template>
  <svg 
    aria-hidden="true" 
    :fill="_fill" 
    :stroke="_stroke" 
    :width="width" 
    :height="height"
    :stroke-width="_strokeWidth"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
import { toRefs, computed } from 'vue'

const props = defineProps<{
  name: string,
  fill?: string,
  stroke?: string,
  width: number | string,
  height: number | string,
  strokeWidth?: number | string
}>()
const {
  name,
  fill,
  stroke,
  width,
  height,
  strokeWidth
} = toRefs(props)
const _fill = fill?.value || '#000'
const _stroke = stroke?.value || '#000'
const _strokeWidth = strokeWidth?.value || 0

const symbolId = computed(() => `#icon-${ name.value }`)
</script>