<template>
  <Example id="basic" title="Basic">
    <div class="w-full">
      <u-skeleton v-model="loading">
        <template #skeleton-items>
          <u-skeleton-item :style="{
            width: '100%',
            height: '24px',
            backgroundColor: 'rgba(0, 0, 0, .12)',
            borderRadius: '4px'
          }"></u-skeleton-item>
          <u-skeleton-item :style="{
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(0, 0, 0, .12)',
            borderRadius: '50%',
            marginTop: '16px'
          }"></u-skeleton-item>
        </template>
        <template #content>
          <div>Lorem ipsum dolor sit amet.</div>
          <div class="w-[48px] h-[48px] rounded-full bg-pink-500 mt-[16px]"></div>
        </template>
      </u-skeleton>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>