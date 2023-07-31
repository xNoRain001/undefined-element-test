<template>
  <header class="header w-full h-[64px] fixed top-0 z-20 flex">
    <div 
      class="
        w-[287px] h-[64px] flex items-center bg-[#f6f6f7] pl-[47px] pr-[32px]
        bg-[#f6f6f7]
      "
    >
      <a 
        href="/" 
        class="
          font-semibold flex items-center border-[1px] border-solid border-x-0 
          border-t-0 border-b-[var(--border-color)] h-full w-full
        "
        >
        <div class="w-[24px] h-[24px] mr-[8px] bg-pink-500 rounded-full"></div>
        Undefined Element
      </a>
    </div>
    <div 
      class="
        w-[calc(100vw-287px)] pl-[287px] pr-[47px] bg-white h-full flex 
        justify-between items-center
      "
    >
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
  </header>
</template>
