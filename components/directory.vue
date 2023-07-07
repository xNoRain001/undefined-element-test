<template>
  <div class="pl-[64px]">
    <div class="w-[200px] py-[4px] pr-[8px] pl-[12px] mb-[32px]">
      <div class="text-[#606266] text-[12px] font-semibold">CONTENTS</div>

      <ul class="mt-[12px] grid gap-y-[10px] text-[12px] text-[#909399]">
        <li v-for="dir in dirs" :key="dir">
          <a 
            class="cursor-pointer hover:text-[#409eff]" 
            :href="`#${ dir }`"
          >{{ dir }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import codeMap from '@/code'

const dirs: string[] = reactive([])

watch(() => useRoute().fullPath, v => {
  const examples = codeMap[v]
  const _dirs = Object.keys(examples)

  dirs.length = 0

  for (let i = 0, l = _dirs.length; i < l; i++) {
    const dir = _dirs[i]
    dirs.push(`${ dir[0].toUpperCase() }${ dir.slice(1) }`)
  }
}, { immediate: true })
</script>
