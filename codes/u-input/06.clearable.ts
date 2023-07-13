import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        v-model="value"
        :inputStyle="{ 
          border: '1px solid rgba(0, 0, 0, .23)',
          borderRadius: '4px'
        }"
        :focusedInputStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredInputStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        inputClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)]
        "
      >
        <template #append>
          <u-icon name="close" width="16" height="16" clearable></u-icon>
        </template>
      </u-input>
    </div>
  
</template>

<script lang="ts" setup>
const value = ref('This is clearable input')
</script>
`
const target = {}

splitCode(code, target)

export default target