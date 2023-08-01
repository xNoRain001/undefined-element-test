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
        justify-between items-center relative
      "
    >
      <div></div>
      <!-- <u-dropdown 
        class="h-[64px] cursor-pointer flex items-center px-[12px]" 
        trigger="hover"
        listClass="right-0 top-[52px]"
      >
        <u-icon name="translate" width="24" height="24"></u-icon>

        <template #dropdown-list>
          <ul 
            @click="onSetLocale"
            class="
              bg-white p-[12px] border-[1px] border-solid whitespace-nowrap
              border-[var(--border-color)] rounded-[12px]
              shadow-[0_12px_32px_rgba(0,0,0,.1),0_2px_6px_rgba(0,0,0,.08)]
              [&>li]:px-[12px] [&>li]:leading-[32px] [&>li]:text-[14px]
              [&>li]:font-medium [&>li]:rounded-[6px] [&>li]:cursor-pointer
              hover:[&>li]:bg-[#f6f6f7]
            "
          >
            <li data-language="zh">
              简体中文
            </li>
            <li data-language="en">
              English
            </li>
          </ul>
        </template>
      </u-dropdown> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
const { setLocale } = useI18n()

const onSetLocale = (e: Event) => {
  const type = (e.target as HTMLElement).getAttribute('data-language')

  if (type) {
    setLocale(type)
  }
}
</script>
