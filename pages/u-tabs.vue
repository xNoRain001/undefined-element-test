<template>
  <UTabs>
    <div class="flex justify-center">
      <UTab data-key="1" data-active="true">
        <span style="width: 20px;">Tab1</span>
      </UTab> 
      <UTab data-key="2" class="ml-[10px]">
        <span style="width: 20px;">Tab2</span>
      </UTab> 
    </div>
  </UTabs>

  <UTabPannels>
    <div class="
      border-[1px] border-solid border-gray-500 h-32 flex justify-center 
      items-center
    ">
      <UTabPannel data-key="1">
        <div>Tab1 panel</div>
      </UTabPannel>
      <UTabPannel data-key="2">
        <div>Tab2 panel</div>
      </UTabPannel>
    </div>
  </UTabPannels>
</template>