<template>
  <Header></Header>
  <Sidebar></Sidebar>
  <div class="h-full pl-[287px] pr-[15px] pt-[64px]">
    <div class="px-[32px] pt-[32px] flex max-w-[1280px]">
      <div class="px-[32px] pb-[128px] grid gap-y-[24px] w-full">
        <div class="mx-auto max-w-[688px]">
          <slot></slot>
        </div>
      </div>
      <Directory></Directory>
    </div>
  </div>
</template>

<script lang="ts" setup>
const genTitle = (v: string) => {
  let title = ''
  const segments = v.slice(1).split('-')

  for (let i = 0, l = segments.length; i < l; i++) {
    const segment = segments[i]

    title += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
  }

  return title
}

watch(() => useRoute().path, v => {
  const title = genTitle(v)
  useHead({ title })
}, { immediate: true })
</script>
