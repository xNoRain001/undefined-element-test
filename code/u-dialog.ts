const UDialog = `
  <template>
    <div @click="updateVisible">click me</div>
    
    <!-- mask -->
    <div 
      v-if="visible" 
      class="w-screen h-screen fixed z-10 bg-gray-200 opacity-80 top-0 left-0"
    >
      <UDialog 
        class="
          border-[1px] border-solid border-red-500 w-[200px] h-[200px] fixed 
          top-0 bottom-0 left-0 right-0 m-auto p-2
        " 
        v-model="visible"
      >
        <template #header>
          <div class="flex justify-between">
            <div>header title</div>
            <div @click="updateVisible" class="cursor-pointer">close icon</div>
          </div>
        </template>
        <template #main>
          <div>main content</div>
        </template>
        <template #footer>
          <div @click="updateVisible" class="cursor-pointer">close dialog</div>
        </template>
      </UDialog>
    </div>
  </template>

  <script lang="ts" setup>
  const visible = ref(false)

  const updateVisible = () => visible.value = !visible.value
  </script>
`

export default UDialog
