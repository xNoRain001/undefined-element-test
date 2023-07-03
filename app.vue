<template>
 <div class="w-screen h-screen">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? `${ titleChunk } - Undefined Element` : 'Undefined Element';
  }
})
</script>
