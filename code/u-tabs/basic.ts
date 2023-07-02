const basic = `
  <template>
    <Example id="basic">
      <div class="w-full">
        <UTabs 
          v-model="tab"
          :tabsStyle="{
            height: '40px',
            display: 'flex'
          }"
          tabClass="
            text-[14px] text-[#303133] font-medium flex items-center border-x-0
            border-t-0 border-b-transparent border-solid border-[2px] ml-[40px]
            hover:text-[#409efe] first-of-type:ml-0
          "
          activeTabClass="!border-b-[#409eff] text-[#409eff]"
          >
          <UTab name="1">
            <div>User</div>
          </UTab> 
          <UTab name="2">
            <div>Config</div>
          </UTab> 
          <UTab name="3">
            <div>Role</div>
          </UTab> 
          <UTab name="4">
            <div>Task</div>
          </UTab> 
        </UTabs>

        <UTabPanels 
          v-model="tab" 
          :pannelStyle="{ padding: '32px' }"
          pannelClass="text-[#6b778c] text-[32px] font-semibold"
        >
          <UTabPanel name="1">
            <div>User</div>
          </UTabPanel>
          <UTabPanel name="2">
            <div>Config</div>
          </UTabPanel>
          <UTabPanel name="3">
            <div>Role</div>
          </UTabPanel>
          <UTabPanel name="4">
            <div>Task</div>
          </UTabPanel>
        </UTabPanels>
      </div>
    </Example>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'

  const tab = ref('1')
  </script>
`

export default basic
