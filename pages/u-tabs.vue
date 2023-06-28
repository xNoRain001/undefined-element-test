<template>
  <UTabs>
    <div class="flex justify-center">
      <UTab data-key="1" data-active="true">
        <button class="btn">Tab1</button>
      </UTab> 
      <UTab data-key="2" class="ml-[10px]">
        <button class="btn">Tab2</button>
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