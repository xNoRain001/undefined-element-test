import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-skeleton v-model="loading">
        <template #skeleton-items>
          <u-skeleton-item class="
            w-full h-[24px] bg-[rgba(0,0,0,.12)] rounded-[4px]
          "></u-skeleton-item>
          <u-skeleton-item class="
            w-[48px] h-[48px] bg-[rgba(0,0,0,.12)] rounded-full mt-[16px]
          "></u-skeleton-item>
        </template>
        <template #content>
          <div>Lorem ipsum dolor sit amet.</div>
          <div class="w-[48px] h-[48px] rounded-full bg-pink-500 mt-[16px]"></div>
        </template>
      </u-skeleton>
    </div>
  
</template>

<script lang="ts" setup>
const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>`
const target = {}

splitCode(code, target)

export default target
