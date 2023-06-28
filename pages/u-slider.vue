<template>
  <USlider class="w-full h-[40px] flex items-center">
    <USliderTrack v-model="value" :max="200" class="w-full bg-gray-500">
      <template #selection>
        <div class="h-[4px] bg-green-500"></div>
      </template>
      <template #thumb>
        <div class="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
      </template>
    </USliderTrack>
  </USlider>

  <div>value: {{ value }}</div>
</template>

<script lang="ts" setup>
const value = ref(50)
</script>
