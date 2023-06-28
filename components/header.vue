<template>
  <nav class="routing-container flex flex-col items-center h-screen border-[1px] border-y-0 border-l-0 border-gray-500 w-1/6">
    <NuxtLink to="/u-input">UInput</NuxtLink>
    <NuxtLink to="/u-tabs">UTabs</NuxtLink>
    <NuxtLink to="/u-dialog">UDislog</NuxtLink>
    <NuxtLink to="/u-slider">USlider</NuxtLink>
    <NuxtLink to="/u-expansion">UExpansion</NuxtLink>
    <NuxtLink to="/u-splitter">USplitter</NuxtLink>
  </nav>
</template>

<style type="text/tailwindcss" scoped>
.routing-container > a {
  @apply text-pink-500 hover:underline mt-4
}
</style>
