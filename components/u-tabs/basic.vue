<template>
  <Example id="basic">
    <div class="w-full">
      <UTabs 
        v-model="tab" 
        :activeTabStyle="{
          border: '2px solid #409eff',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none'
        }"
      >
        <div class="
          tabs-container h-[40px] flex border-[2px] border-x-0 border-t-0 
          border-solid border-[#e4e7ed]
        ">
          <UTab name="1">
            <div class="tab">User</div>
          </UTab> 
          <UTab name="2">
            <div class="tab">Config</div>
          </UTab> 
          <UTab name="3">
            <div class="tab">Role</div>
          </UTab> 
          <UTab name="4">
            <div class="tab">Task</div>
          </UTab> 
        </div>
      </UTabs>

      <UTabPanels v-model="tab" :pannelStyle="{ padding: '32px' }">
        <UTabPanel name="1">
          <div class="panel">User</div>
        </UTabPanel>
        <UTabPanel name="2">
          <div class="panel">Config</div>
        </UTabPanel>
        <UTabPanel name="3">
          <div class="panel">Role</div>
        </UTabPanel>
        <UTabPanel name="4">
          <div class="panel">Task</div>
        </UTabPanel>
      </UTabPanels>
    </div>
  </Example>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tab = ref('1')
</script>

<style type="text/tailwindcss" scoped>
.tabs-container > *:not(:first-of-type) {
  @apply ml-[40px]
}

.tab {
  @apply h-[40px] text-[14px] text-[#303133] hover:text-[#409efe] font-medium 
  flex items-center
}

.panel {
  @apply text-[#6b778c] text-[32px] font-semibold
}
</style>
