<template>
  <div class="w-full pl-[300px] py-[30px] absolute right-0 top-0">
    <div class="px-[180px]">
      <u-expansion v-model="expanded">
        <template #default>
          <div 
            class="p-2 border-[1px] border-solid border-[#dcdfe6] flex justify-end"
            :class="expanded ? 'border-b-0' : ''"
          >
            <SvgIcon class="cursor-pointer" name="code" width="24" height="24"></SvgIcon>
          </div>
        </template>

        <template #panel>
          <codemirror
            v-model="code"
            placeholder="Code goes here..."
            :style="{ 
              maxHeight: '600px', 
              fontSize: '12px',
              backgroundColor: '#eee'
            }"
          />
        </template>
      </u-expansion>

      <div 
        class="
          flex flex-col items-center border-[1px] border-solid border-[#dcdfe6]
          p-[24px]
        "
        :class="expanded ? 'border-t-[1px]' : 'border-t-0'"
      >
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import codeMap from '@/code'

const code = ref('')
const expanded = ref(false)

watch(() => useRoute().fullPath, value => {
  code.value = codeMap[value]
}, { immediate: true })
</script>
