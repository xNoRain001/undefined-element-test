<template>
  <Header></Header>

  <Navigation></Navigation>

  <div class="w-full pl-[285px] pt-[55px]">
    <div class="pt-[64px] pl-[64px] pb-[42px] flex">
      <!-- content -->
      <div class="w-[800px] h-full grid gap-y-[24px]">
        <slot></slot>
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

watch(() => useRoute().fullPath, v => {
  const title = genTitle(v)
  useHead({ title })
}, { immediate: true })
</script>
