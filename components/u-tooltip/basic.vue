<template>
  <Example id="basic">
    <div class="btns w-full flex items-center">
      <button>
        <SvgIcon name="arrow-up" fill="#fff"></SvgIcon>
        <span>Top</span>
        <u-tooltip position="top">
          <div class="tooltip">
            Lorem ipsum dolor sit amet.
          </div>
        </u-tooltip>
      </button>
      <button>
        <SvgIcon name="arrow-right" fill="#fff"></SvgIcon>
        <span>Right</span>
        <u-tooltip position="right">
          <div class="tooltip">
            Lorem ipsum dolor sit amet.
          </div>
        </u-tooltip>
      </button>
      <button>
        <SvgIcon name="arrow-down" fill="#fff"></SvgIcon>
        <span>Bottom</span>
        <u-tooltip position="bottom">
          <div class="tooltip">
            Lorem ipsum dolor sit amet.
          </div>
        </u-tooltip>
      </button>
      <button>
        <SvgIcon name="arrow-left" fill="#fff"></SvgIcon>
        <span>Left</span>
        <u-tooltip position="left">
          <div class="tooltip">
            Lorem ipsum dolor sit amet.
          </div>
        </u-tooltip>
      </button>
    </div>
  </Example> 
</template>

<style type="text/tailwindcss" scoped>
.btns button {
  @apply cursor-pointer flex items-center justify-between py-[6px] px-[16px] 
  rounded-[3px] bg-[#1976d2]
}

.btns button > span {
  @apply ml-[12px] text-white text-[14px] font-medium
}

.btns button:not(:first-of-type) {
  @apply ml-[8px]
}

.tooltip {
  @apply py-[6px] px-[10px] bg-[#757575] text-[#fafafa] font-normal 
  text-[10px] rounded-[4px]
}
</style>
