<template>
  <u-expansion v-model="expanded">
    <template #default>
      <div 
        class="p-[8px] border-[1px] border-solid border-[#dcdfe6] flex justify-end"
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
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import codeMap from '@/code'

const props = defineProps<{ id: 'string' }>()
const expanded = ref(false)
const fullPath = useRoute().fullPath
const code = codeMap[fullPath][props.id]
</script>
