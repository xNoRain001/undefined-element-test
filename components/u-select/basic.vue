<template>
  <Example id="basic" title="Basic">
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
              :class="value === option 
                ? '!bg-[rgb(25,118,210,.08)]' 
                : 'bg-white'
              "
            >
              {{ option }}
            </div>
          </div>
        </template>
      </u-select>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('1')
const options = ['1', '2', '3', '4']
</script>
