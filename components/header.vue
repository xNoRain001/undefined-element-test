<template>
  <nav class="routing-container flex flex-col">
    <NuxtLink to="/u-input">UInput</NuxtLink>
    <NuxtLink to="/u-tabs">UTabs</NuxtLink>
    <NuxtLink to="/u-dialog">UDislog</NuxtLink>
  </nav>
</template>

<style type="text/tailwindcss" scoped>
.routing-container > a {
  @apply text-pink-500 hover:underline
}
</style>
