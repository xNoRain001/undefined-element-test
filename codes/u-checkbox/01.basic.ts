import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full flex items-center [&>*:not(:first-of-type)]:ml-[32px]">
      <u-checkbox 
        v-model="value" 
        class="flex items-center"
      >
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid 
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-red-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-red-500 border-red-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>

        <template #after>
          <span class="ml-[8px]">label</span>
        </template>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="flex items-center"
      >
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid rounded-full
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-green-500 duration-300 transition-[all]
            "
            :class="checked ? 'border-green-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <div v-if="checked" class="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            </Transition>
          </div>
        </template>

        <template #after>
          <span class="ml-[8px]">label</span>
        </template>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="flex items-center"
      >
        <template #checkbox="{ checked }">
          <div 
            class="
              w-[20px] h-[20px] border-[2px] border-solid rounded-full
              border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
              items-center hover:border-blue-500 duration-300 transition-[all]
            "
            :class="checked ? 'bg-blue-500 border-blue-500' : ''"
          >
            <Transition name="u-animate-opacity">
              <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
            </Transition>
          </div>
        </template>

        <template #before>
          <span class="mr-[8px]">label</span>
        </template>
      </u-checkbox>
    </div>
  
</template>

<script lang="ts" setup>
const value =ref(false)
</script>`
const target = {}

splitCode(code, target)

export default target
