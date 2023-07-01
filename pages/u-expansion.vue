<template>
  <div class="w-full">
    <u-expansion v-model="expanded">
      <template #default>
        <button class="btn">
          click me
        </button>
      </template>
      <template #panel>
        <div class="bg-green-500 h-[100px]">
        </div>
      </template>
    </u-expansion>
  </div>
</template>

<script lang="ts" setup>
const expanded = ref(false)
</script>
