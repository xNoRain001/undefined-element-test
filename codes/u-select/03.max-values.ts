import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-select 
        :selectStyle="{ 
          height: '56px',
          borderRadius: '4px',
          padding: '0 12px',
          color: 'rgba(0, 0, 0, .87)',
          fontSize: '14px',
          fontWeight: '400px',
          border: '1px solid rgba(0, 0, 0, .23)'
        }"
        :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        :placeholderStyle="{ 
          color: '#a8abb2',
          fontSize: '14px',
          fontWeight: '400px'
        }"
        v-model="value" 
        :options="options"
        @focus="focusHandler"
        @blur="blurHandler"
        multiple
        maxValues="2"
      >
        <template #select-items>
          <div class="
            bg-white border-[1px] border-solid border-[#dcdfe6] border-t-0
            cursor-pointer
          ">
            <div 
              class="
                h-[48px] py-[8px] px-[16px] text-[12px] flex items-center
                bg-white hover:bg-[rgba(0,0,0,.08)]
              " 
              v-for="(option, index) in options"
              :key="index"
              :data-index="index"
              :class="value.includes(option)
                ? '!bg-[rgb(25,118,210,.08)]' 
                : 'bg-white'
              "
            >
              {{ option }}
            </div>
          </div>
        </template>
        <template #append>
          <u-icon 
            :name="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
          "></u-icon>
        </template>
      </u-select>
    </div>
  
</template>

<script lang="ts" setup>
const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 

const focusHandler = () => expanded.value = !expanded.value

const blurHandler = () => expanded.value = !expanded.value
</script>
`
const target = {}

splitCode(code, target)

export default target
