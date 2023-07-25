<template>
  <Header></Header>

  <Navigation></Navigation>

  <div class="h-full pl-[285px] pt-[110px]">
    <div class="pt-[64px] pl-[64px] pb-[42px] flex">
      <!-- content -->
      <div class="w-[800px] grid gap-y-[24px]">
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

watch(() => useRoute().path, v => {
  const title = genTitle(v)
  useHead({ title })
}, { immediate: true })
</script>
