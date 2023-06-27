<template>
  <UTabs>
    <template #default>
      <div class="flex justify-center">
        <UTab data-key="1" data-active="true">
          <template #default>
            <span style="width: 20px;">Tab1</span>
          </template>
        </UTab> 
        <UTab data-key="2" class="ml-[10px]">
          <template #default>
            <span style="width: 20px;">Tab2</span>
          </template>
        </UTab> 
      </div>
    </template>
  </UTabs>

  <UTabPannels>
    <template #default>
      <div class="
        border-[1px] border-solid border-gray-500 h-32 flex justify-center 
        items-center
      ">
        <UTabPannel data-key="1">
          <template #default>
            <div>Tab1 panel</div>
          </template>
        </UTabPannel>
        <UTabPannel data-key="2">
          <template #default>
            <div>Tab2 panel</div>
          </template>
        </UTabPannel>
      </div>
    </template>
  </UTabPannels>
</template>