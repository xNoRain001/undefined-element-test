<template>
  <div @click="updateVisible">open dialog</div>
  
  <div 
    v-if="visible" 
    class="w-screen h-screen fixed z-10 bg-gray-200 opacity-80 top-0 left-0"
  >
    <UDialog 
      class="
        border-[1px] border-solid border-red-500 w-[200px] h-[200px] fixed 
        top-0 bottom-0 left-0 right-0 m-auto
      " 
      v-model="visible"
    >
      <template #header>
        <div>header</div>
      </template>
      <template #main>
        <div>main</div>
      </template>
      <template #footer>
        <div @click="updateVisible">close dialog</div>
      </template>
    </UDialog>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>