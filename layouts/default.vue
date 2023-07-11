<template>
  <Header></Header>

  <div class="flex w-full h-[calc(100vh-55px)] relative mt-[55px]">
    <Navigation></Navigation>

    <div class="w-full pl-[288px] pt-[55px] absolute top-0">
      <div class="pt-[64px] pl-[64px] pb-[42px] flex">
        <!-- content -->
        <div class="w-[800px] grid gap-y-[24px]">
          <slot></slot>
        </div>

        <Directory></Directory>
      </div>
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
