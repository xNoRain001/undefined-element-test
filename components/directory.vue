<template>
  <div class="pl-[64px] h-full sticky top-[85px]">
    <div class="w-[200px] py-[4px] pr-[8px] pl-[12px] mb-[32px]">
      <div class="text-[#606266] text-[12px] font-semibold">CONTENTS</div>

      <ul class="mt-[12px] grid gap-y-[10px] text-[12px] font-semibold text-[#909399]">
        <li v-for="dir in dirs" :key="dir">
          <a 
            class="cursor-pointer hover:text-[#409eff]" 
            :href="`#${ dir }`"
          >{{ `${ dir[0].toUpperCase() }${ dir.slice(1) }` }}</a>
        </li>
      </ul>
    </div>

    <u-scroller scrollTarget="html" class="fixed right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller>
  </div>
</template>

<script lang="ts" setup>
import codesMap from '@/codes'

const dirs: string[] = reactive([])
const { t } = useI18n()

const updateDirs = (path: string) => {
  const examples = codesMap[path]
  const _dirs = Object.keys(examples)

  dirs.length = 0

  for (let i = 0, l = _dirs.length; i < l; i++) {
    // dirs.push(t(`components.${ path.slice(1) }.${ _dirs[i].slice(3) }.title`))
    dirs.push(_dirs[i].slice(3))
  }
}

watch(() => useRoute().path, v => {
  updateDirs(v)
}, { immediate: true })
</script>
codes