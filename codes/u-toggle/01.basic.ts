import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <div class="grid grid-cols-10">
        <u-toggle 
          v-model="value"
          class="w-[40px] h-[20px]"
          thumbClass="
            w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
          "
          trackClass="rounded-full bg-[#dcdfe6]"
          activeThumbClass="!left-[22px]"
          activeTrackClass="!bg-red-500"
        ></u-toggle>

        <u-toggle 
          v-model="value"
          class="w-[40px] h-[20px]"
          thumbClass="
            w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
          "
          trackClass="rounded-full bg-[#dcdfe6]"
          activeThumbClass="!left-[22px]"
          activeTrackClass="!bg-green-500"
        ></u-toggle>

        <u-toggle 
          v-model="value"
          class="w-[40px] h-[20px]"
          thumbClass="
            w-[16px] h-[16px] top-[2px] left-[2px] rounded-full bg-white
          "
          trackClass="rounded-full bg-[#dcdfe6]"
          activeThumbClass="!left-[22px]"
          activeTrackClass="!bg-blue-500"
        ></u-toggle>
      </div>

      <div class="grid grid-cols-10">
        <u-toggle 
          v-model="value"
          class="w-[52px] h-[20px] px-[10px]"
          thumbClass="
            w-[20px] h-[20px] rounded-full bg-white left-0
          "
          :thumbStyle="{ 
            boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
          }"
          trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
          activeThumbClass="left-[32px] !bg-red-500"
          activeTrackClass="!bg-red-500 "
        ></u-toggle>

        <u-toggle 
          v-model="value"
          class="w-[52px] h-[20px] px-[10px]"
          thumbClass="
            w-[20px] h-[20px] rounded-full bg-white left-0
          "
          :thumbStyle="{ 
            boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
          }"
          trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
          activeThumbClass="left-[32px] !bg-green-500"
          activeTrackClass="!bg-green-500 "
        ></u-toggle>

        <u-toggle 
          v-model="value"
          class="w-[52px] h-[20px] px-[10px]"
          thumbClass="
            w-[20px] h-[20px] rounded-full bg-white left-0
          "
          :thumbStyle="{ 
            boxShadow: '0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f' 
          }"
          trackClass="!w-[32px] !h-[14px] rounded-full bg-black opacity-50"
          activeThumbClass="left-[32px] !bg-blue-500"
          activeTrackClass="!bg-blue-500 "
        ></u-toggle>
      </div>
    </div>
  
</template>

<script lang="ts" setup>
const value = ref(false)
</script>
`
const target = {}

splitCode(code, target)

export default target
