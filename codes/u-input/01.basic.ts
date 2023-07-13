import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        :inputStyle="{ 
          width: '100%',
          height: '56px',
          borderRadius: '4px',
          padding: '0 12px',
          color: 'rgba(0, 0, 0, .87)',
          fontSize: '14px',
          fontWeight: '400px',
          border: '1px solid rgba(0, 0, 0, .23)'
        }"
        :focusedInputStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredInputStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        v-model="value1"
      >
      </u-input>

      <u-input 
        v-model="value2"
        inputClass="
          w-full h-[56px] rounded-[4px] px-[12px] text-[14px] font-normal
          bg-[rgba(0,0,0,.05)] text-black
        "
        focusedInputClass="bg-black !text-white"
        hoveredInputClass="bg-[rgba(0,0,0,.07)]"
      >
      </u-input>

      <u-input 
        v-model="value3"
        :inputStyle="{ 
          border: '1px solid #dcdfe6',
          borderRadius: '4px'
        }"
        :focusedInputStyle="{ border: '1px solid #409eff' }"
        :hoveredInputStyle="{ border: '1px solid #c0c4cc' }"
        inputClass="
          w-full h-[30px] py-[1px] px-[11px] text-[14px] 
          font-normal text-[rbg(48,49,51)]
        "
      >
      </u-input>

      <u-input 
        v-model="value4"
        :inputStyle="{ border: '1px solid #dcdfe6' }"
        :focusedInputStyle="{ border: '1px solid #409eff' }"
        :hoveredInputStyle="{ border: '1px solid #c0c4cc'   }"
        inputClass="
          w-full h-[30px] py-[1px] px-[11px] 
          text-[14px] font-normal text-[rbg(48,49,51)]
        "
      >
        <template #before>
          <div class="
            h-full px-[20px] border-[1px] border-r-0 rounded-tl-[4px] 
            rounded-bl-[4px] border-solid border-[#dcdfe6] 
            bg-[rgb(245,247,250)] text-[rgb(144,147,153)] text-[14px] flex 
            items-center
          ">
            https://
          </div>
        </template>
      </u-input> 
    </div>
  
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
`
const target = {}

splitCode(code, target)

export default target
