<template>
  <button @click="updateVisible" class="btn">click me</button>
  
  <UDialog v-model="visible">
    <div class="flex justify-between">
      <div>header title</div>
      <div @click="updateVisible" class="cursor-pointer">close icon</div>
    </div>
    <div>main content</div>
    <div @click="updateVisible" class="cursor-pointer">close dialog</div>
  </UDialog>
</template>

<script lang="ts" setup>
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>