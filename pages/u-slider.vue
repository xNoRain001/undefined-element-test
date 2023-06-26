<template>
  <USlider class="w-full h-[20px]">
    <template #default>
      <USliderInner v-model="value" :max="1000">
        <template #default>
          <div class="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
        </template>
      </USliderInner>
    </template>
  </USlider>
</template>

<script lang="ts" setup>
const value = ref(0)

watch(value, (v) => {
  console.log(v)
})
</script>
