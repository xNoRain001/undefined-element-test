<template>
  <aside class="pl-[32px] max-w-[256px] grow w-full">
    <div class="fixed top-0 pt-[96px]">
      <div 
        class="
          border-[1px] border-solid border-y-0 border-r-0 
          border-[var(--border-color)] pl-[16px] text-[13px]
        "
      >
        <div 
          class="
            text-[var(--text-light-1)] font-semibold leading-[28px]
          "
        >CONTENTS</div>

        <ul class="text-[var(--text-light-2)]">
          <li v-for="dir in dirs" :key="dir">
            <a 
              class="cursor-pointer hover:text-[#409eff]" 
              :href="`#${ dir }`"
            >{{ `${ dir[0].toUpperCase() }${ dir.slice(1) }` }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- <u-scroller scrollTarget="html" class="fixed right-[20px] bottom-[20px]">
      <div class="cursor-pointer w-[40px] h-[40px] bg-blue-500 rounded-full flex justify-center items-center">
        <u-icon name="keyboard_arrow_up" color="white"></u-icon>
      </div>
    </u-scroller> -->
  </aside>
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
    dirs.push(t(`components.${ path.slice(1) }.${ _dirs[i].replace('.', '-') }.title`))
    // dirs.push(_dirs[i].slice(3))
  }
}

watch(() => useRoute().path, v => {
  updateDirs(v)
}, { immediate: true })
</script>
codes