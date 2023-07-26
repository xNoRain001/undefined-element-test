<template>
  <div class="
    header w-full h-[55px] fixed top-0 z-10 border-[1px] border-solid 
    border-[#dcdfe6] border-x-0 border-t-0 bg-[length:4px_4px] px-[51px]
  ">
    <div class="w-full h-full flex justify-between items-center">
      <div></div>
      <div>
        <u-dropdown :offset="{ right: '0' }">
          <u-icon name="translate" width="24" height="24"></u-icon>

          <template #dropdown-list>
            <ul class="bg-white w-[190px] p-[14px] shadow-[0_1px_5px_#0003,0_2px_2px_#00000024,0_3px_1px_-2px_#0000001f]">
              <li>
                简体中文
              </li>
              <li>
                English
              </li>
            </ul>
          </template>
        </u-dropdown>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: radial-gradient(transparent 1px,#fff 1px);
  backdrop-filter: saturate(50%) blur(4px);
}
</style>
