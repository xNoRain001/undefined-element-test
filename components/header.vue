<template>
  <div class="fixed left-0 top-0 bottom-0 z-10  w-[321px] pl-[87px] pr-[32px] pt-[48px] py-[96px]">
    <u-scroll-area :height="760">
      <nav 
        class="
          routing-container 
        "
        @click="clickHandler"
      >
        <NuxtLink noPrefetch to="/u-input" data-active="true">UInput</NuxtLink>
        <!-- <NuxtLink noPrefetch to="/u-tabs">UTabs</NuxtLink> -->
        <NuxtLink noPrefetch to="/u-dialog">UDislog</NuxtLink>
        <!-- <NuxtLink noPrefetch to="/u-slider">USlider</NuxtLink> -->
        <NuxtLink noPrefetch to="/u-expansion">UExpansion</NuxtLink>
        <!-- <NuxtLink noPrefetch to="/u-splitter">USplitter</NuxtLink> -->
        <!-- <NuxtLink noPrefetch to="/u-rating">URating</NuxtLink> -->
        <NuxtLink noPrefetch to="/u-tooltip">UTooltip</NuxtLink>
        <NuxtLink noPrefetch to="/u-scroll-area">UScrollArea</NuxtLink>
      </nav>
    </u-scroll-area>
  </div>
</template>

<script lang="ts" setup>
const prevActiveElm = ref<HTMLElement | null>(null)

const initPrevActiveElm = () => {
  const activeElm = document.querySelector('.routing-container > a[data-active="true"]') as HTMLElement
  prevActiveElm.value = activeElm
}

const clickHandler = (e: Event) => {
  const target = e.target as HTMLElement

  if (target === prevActiveElm.value) {
    return
  }

  if (target.tagName === 'A') {
    target.setAttribute('data-active', 'true')
    prevActiveElm.value!.setAttribute('data-active', 'false')
    prevActiveElm.value = target
  }
}

onMounted(() => {
  initPrevActiveElm()
})
</script>

<style type="text/tailwindcss" scoped>
/* .routing-container::-webkit-scrollbar {
  display: none;
}

.routing-container:hover::-webkit-scrollbar {
  display: block;
} */

.routing-container > a {
  @apply w-full py-[10px] px-[16px] text-[13px] text-[#606266] text-[13px] 
  font-medium block
  hover:text-[#409eff] 
}

.routing-container > a[data-active="true"] {
  @apply bg-[rgba(64,158,255,.1)] rounded-[8px] font-semibold text-[#409eff]
}
</style>
