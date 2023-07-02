<template>
  <div class="fixed left-0 top-0 bottom-0 z-10  w-[321px] pl-[87px] pr-[32px] pt-[48px] py-[96px]">
    <u-scroll-area :height="760">
      <nav class="routing-container">
        <NuxtLink 
          v-for="{ to, label} in links" 
          noPrefetch 
          :key="to"
          :to="to"
          :data-active="fullPath === to"
        >{{  label }}</NuxtLink>
      </nav>
    </u-scroll-area>
  </div>
</template>

<script lang="ts" setup>
const links = [
  { to: '/u-input', label: 'UInput' },
  { to: '/u-tabs', label: 'UTabs' },
  // { to: '/u-dialog', label: 'UDialog' },
  // { to: '/u-slider', label: 'USlider'},
  // { to: '/u-expansion', label: 'UExpansion' },
  // { to: '/u-splitter', label: 'USplitter' },
  // { to: '/u-rating', label: 'UTooltip' },
  // { to: '/u-rating', label: 'UTooltip' },
  // { to: '/u-scroll-area', label: 'UScrollArea' }
]

const fullPath = computed(() => useRoute().fullPath)
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
