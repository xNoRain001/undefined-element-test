<template>
  <Example 
    id="02.step" 
    :title="$t('components.u-slider.02-step.title')" 
    :desc="$t('components.u-slider.02-step.desc')"
  >
    <div class="w-full">
      <div>value: {{ value }}</div>
      <u-slider 
        v-model="value" 
        :min="0"
        :max="100" 
        :step="50"
        class="w-full h-[20px] flex items-center"
        trackClass="w-full h-[4px] bg-[rgba(0,0,0,.1)] flex items-center"
        selectionClass="h-full bg-[#1976d2]"
        thumbClass="w-[20px] h-[20px] bg-[#1976d2] rounded-full"
      ></u-slider>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref(50)
</script>
