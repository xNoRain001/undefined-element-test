const UTooltip = `
<template>
  <div class="flex flex-col items-center justify-center">
    <button>
      top
      <u-tooltip position="top">
        <div class="tooltip-content mb-[10px]">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>

    <button>
      right
      <u-tooltip position="right">
        <div class="tooltip-content ml-[10px]">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>

    <button>
      bottom
      <u-tooltip position="bottom">
        <div class="tooltip-content mt-[10px]">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>

    <button>
      left
      <u-tooltip position="left">
        <div class="tooltip-content mr-[10px]">
          Lorem ipsum dolor sit amet.
        </div>
      </u-tooltip>
    </button>
  </div>
</template>

<style type="tailwind/css" scoped>
button {
  @apply bg-blue-500 text-white rounded-lg px-4 py-2 mt-4
}

.tooltip-content {
  @apply bg-green-500 text-white py-2 px-3 rounded-lg
}
</style>
`

export default UTooltip
