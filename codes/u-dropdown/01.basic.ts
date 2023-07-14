import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-dropdown>
        <template #dropdown-trigger>
          <button 
            class="
              w-[209px] h-[36px] bg-[rgb(25,118,210)] flex jusfity-center
              items-center text-white text-[14px] font-medium py-[4px] px-[16px]
              whitespace-nowrap
            ">
            DROPDOWN BUTTON
            <u-icon 
              name="keyboard_arrow_down" 
              color="white" 
              class="ml-[8px]"
            ></u-icon>
          </button>
        </template>

        <template #dropdown-list>
          <div 
            style="box-shadow: 0 1px 5px #0003, 0 2px 2px #00000024, 0 3px 1px -2px #0000001f;"
            class="w-[209px] bg-white rounded-[4px] cursor-pointer"
          >
            <div 
              v-for="i in 3" 
              :key="i" 
              class="
                h-[48px] text-[14px] flex items-center
                py-[8px] px-[16px] hover:bg-[#e8e8e8]
              "
            >{{ i }}</div>
          </div>
        </template>
      </u-dropdown>
    </div>
  
</template>

<script lang="ts" setup>
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>`
const target = {}

splitCode(code, target)

export default target
