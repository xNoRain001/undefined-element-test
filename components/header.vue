<template>
  <nav class="
    routing-container flex flex-col items-center h-screen w-[300px]
    overflow-y-scroll fixed left-0 top-0 border-[1px] border-y-0 border-l-0
    border-[rgba(0,0,0,.12)] pt-[100px] z-10
  ">
    <NuxtLink noPrefetch to="/u-input">UInput</NuxtLink>
    <!-- <NuxtLink noPrefetch to="/u-tabs">UTabs</NuxtLink>
    <NuxtLink noPrefetch to="/u-dialog">UDislog</NuxtLink>
    <NuxtLink noPrefetch to="/u-slider">USlider</NuxtLink>
    <NuxtLink noPrefetch to="/u-expansion">UExpansion</NuxtLink>
    <NuxtLink noPrefetch to="/u-splitter">USplitter</NuxtLink>
    <NuxtLink noPrefetch to="/u-rating">URating</NuxtLink>
    <NuxtLink noPrefetch to="/u-tooltip">UTooltip</NuxtLink> -->
  </nav>
</template>

<style type="text/tailwindcss" scoped>
.routing-container > a {
  @apply w-full h-[40px] text-[12px] pl-[72px] flex items-center 
  hover:text-[#00b4ff] hover:bg-[rgba(64,158,255,.1)]
}
</style>
