<template>
  <aside 
    class="
      fixed left-0 top-0 z-10 w-[287px] pl-[47px] pr-[32px] pt-[64px]
      pb-[128px] bg-[#f6f6f7] overflow-y-scroll h-screen
    "
  > 
    <nav class="
      [&>section:not(:first-of-type)]:border-[1px] 
      [&>section:not(:first-of-type)]:border-solid 
      [&>section:not(:first-of-type)]:border-x-0 
      [&>section:not(:first-of-type)]:border-b-0 
      [&>section:not(:first-of-type)]:border-t-[var(--border-color)] 
      "
    >
      <section 
        class="
          pt-[10px] pb-[24px]  text-[14px]
          flex flex-col [&>*]:py-[4px] [&>a]:text-[var(--text-light-2)] [&>a]:font-medium
        ">
        <h2 class="font-bold">Components</h2>
        <NuxtLink 
          v-for="{ to, label } in links" 
          noPrefetch 
          :key="to"
          :to="to"
          :data-active="path === to"
        >{{ label }}</NuxtLink>
      </section>
    </nav>
  </aside>
</template>

<script lang="ts" setup>
const links = [
  { to: '/u-input', label: 'Input' },
  { to: '/u-select', label: 'Select' },
  { to: '/u-tabs', label: 'Tabs' },
  { to: '/u-dialog', label: 'Dialog' },
  { to: '/u-expansion', label: 'Expansion' },
  { to: '/u-rating', label: 'Rating' },
  { to: '/u-tooltip', label: 'Tooltip' },
  { to: '/u-scroll-area', label: 'ScrollArea' },
  { to: '/u-slider', label: 'Slider'},
  { to: '/u-icon', label: 'Icon'},
  { to: '/u-splitter', label: 'Splitter' },
  { to: '/u-skeleton', label: 'Skeleton' },
  { to: '/u-toggle', label: 'Toggle' },
  { to: '/u-dropdown', label: 'Dropdown' },
  { to: '/u-scroller', label: 'Scroller' },
  { to: '/u-checkbox', label: 'Checkbox' },
  { to: '/u-infinite-scroll', label: 'InfiniteScroll' },
  { to: '/u-table', label: 'Table' }
]

const path = computed(() => useRoute().path)
</script>

<style type="text/tailwindcss" scoped>

.routing-container > a[data-active="true"] {
  @apply bg-[rgba(64,158,255,.1)] rounded-[8px] font-semibold text-[#409eff]
}
</style>
