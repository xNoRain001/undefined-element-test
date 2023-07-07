<template>
  <div class="flex w-full h-full relative">
    <Header></Header>
    <div class="w-full pl-[321px] pt-[55px] absolute right-0 top-0">
      <div class="pt-[64px] pl-[64px] pb-[42px]">
        <div class="w-[800px] grid gap-y-[24px]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
watch(() => useRoute().fullPath, v => {
  let title = ''
  const segments = v.slice(1).split('-')

  for (let i = 0, l = segments.length; i < l; i++) {
    const segment = segments[i]

    title += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
  }

  useHead({ title })
}, { immediate: true })
</script>
