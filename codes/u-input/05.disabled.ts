import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        disabled
        v-model="value"
        :inputStyle="{ 
          border: '1px solid #dcdfe6',
          borderRadius: '4px'
        }"
        inputClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)] bg-[#f5f7fa]
        "
      >
      </u-input>
    </div>
  
</template>

<script lang="ts" setup>
const value = ref('This is disabled input')
</script>
`
const target = {}

splitCode(code, target)

export default target
