<template>
  <Example 
    id="04.scroll-offset" 
    :title="$t('components.u-scroller.04-scroll-offset.title')" 
    :desc="$t('components.u-scroller.04-scroll-offset.desc')"
  >
    <u-scroll-area height="400px">
      <div v-for="i in 100" :key="i">
        Lorem ipsum dolor sit amet.
      </div>
      <u-scroller :scrollOffset="0" class="absolute right-[20px] bottom-[20px]">
        <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
          <u-icon name="keyboard_arrow_up" color="white"></u-icon>
        </div>
      </u-scroller>
    </u-scroll-area>
  </Example>
</template>
