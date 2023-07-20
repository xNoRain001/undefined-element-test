import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full flex items-center [&>*:not(:first-of-type)]:ml-[32px]">
      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center
        "
        activeClass="
          bg-red-500 border-red-500
        "
      >
        <!-- show it when checkeed -->
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center
        "
        activeClass="
          bg-blue-500 border-blue-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center
        "
        activeClass="
          bg-green-500 border-green-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-full flex justify-center
          items-center
        "
        activeClass="
          bg-pink-500 border-pink-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>
    </div>
  
</template>

<script lang="ts" setup>
const value =ref(false)
</script>`
const target = {}

splitCode(code, target)

export default target
