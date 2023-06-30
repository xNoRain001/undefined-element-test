<template>
  <nav class="
    routing-container flex flex-col items-center h-screen w-1/6
    overflow-y-scroll fixed left-0 top-0
  ">
    <NuxtLink noPrefetch to="/u-input">UInput</NuxtLink>
    <NuxtLink noPrefetch to="/u-tabs">UTabs</NuxtLink>
    <NuxtLink noPrefetch to="/u-dialog">UDislog</NuxtLink>
    <NuxtLink noPrefetch to="/u-slider">USlider</NuxtLink>
    <NuxtLink noPrefetch to="/u-expansion">UExpansion</NuxtLink>
    <NuxtLink noPrefetch to="/u-splitter">USplitter</NuxtLink>
    <NuxtLink noPrefetch to="/u-rating">URating</NuxtLink>
    <NuxtLink noPrefetch to="/u-tooltip">UTooltip</NuxtLink>
  </nav>
</template>

<style type="text/tailwindcss" scoped>
.routing-container > a {
  @apply w-full h-10 rounded-md flex justify-center items-center text-[12px]
  text-left text-black hover:bg-blue-500 hover:text-white
}
</style>
