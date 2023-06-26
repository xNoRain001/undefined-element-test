<template>
  <nav class="routing-container flex flex-col">
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
  @apply text-pink-500 hover:underline
}
</style>
