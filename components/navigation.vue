<template>
  <div class="
    fixed left-0 top-[55px] bottom-0 z-10 w-[288px] pl-[54px] pr-[32px] pt-[48px] 
    pb-[96px]
  ">
    <u-scroll-area height="760px">
      <nav class="routing-container">
        <NuxtLink 
          v-for="{ to, label } in links" 
          noPrefetch 
          :key="to"
          :to="to"
          :data-active="path === to"
        >{{ label }}</NuxtLink>
      </nav>
    </u-scroll-area>
  </div>
</template>

<script lang="ts" setup>
const links = [
  { to: '/u-input', label: 'UInput' },
  { to: '/u-select', label: 'USelect' },
  { to: '/u-tabs', label: 'UTabs' },
  { to: '/u-dialog', label: 'UDialog' },
  { to: '/u-expansion', label: 'UExpansion' },
  { to: '/u-rating', label: 'URating' },
  { to: '/u-tooltip', label: 'UTooltip' },
  { to: '/u-scroll-area', label: 'UScrollArea' },
  { to: '/u-slider', label: 'USlider'},
  { to: '/u-icon', label: 'UIcon'},
  { to: '/u-splitter', label: 'USplitter' },
  { to: '/u-skeleton', label: 'USkeleton' },
  { to: '/u-toggle', label: 'UToggle' },
  { to: '/u-dropdown', label: 'UDropdown' },
  { to: '/u-scroller', label: 'UScroller' },
  { to: '/u-checkbox', label: 'UCheckbox' },
]

const path = computed(() => useRoute().path)
</script>

<style type="text/tailwindcss" scoped>
.routing-container > a {
  @apply w-full py-[10px] px-[16px] text-[13px] text-[#606266] text-[13px] 
  font-medium block hover:text-[#409eff] 
}

.routing-container > a[data-active="true"] {
  @apply bg-[rgba(64,158,255,.1)] rounded-[8px] font-semibold text-[#409eff]
}
</style>
