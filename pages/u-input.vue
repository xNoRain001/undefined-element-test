<template>
  <UInput class=" input-container cursor-text px-[12px] py-[16px] border-[2px] border-solid 
    border-[#B3B7C1] rounded-[8px] flex items-center" v-model="value">
    <template #prefix>
      <div class="text-red-500 mr-[10px]">prefix</div>
    </template>
    <template #suffix>
      <div>suffix</div>
    </template>
  </UInput>

  <div>value: {{ value }}</div>
</template>

<script lang="ts" setup>
const value = ref('')
</script>
