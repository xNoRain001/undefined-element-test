<template>
  <USlider class="w-full h-[40px]" v-model="value" :max="200">
    <template #track>
      <div class="w-full h-[4px] bg-red-500"></div>
    </template>
    <template #thumb>
        <div class="w-[20px] h-[20px] bg-red-500 rounded-full">
        </div>
    </template>
  </USlider>
</template>

<script lang="ts" setup>
const value = ref(50)

watch(value, (v) => {
  console.log(v)
})
</script>
