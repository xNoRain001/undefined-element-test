<template>
  <Example 
    id="03.max-values"
    title="Max-values"
    desc="The default value is Number.MAX_SAFE_INTEGER"
  >
    <div class="w-full">
      <u-select 
        :selectStyle="{ 
          border: '1px solid rgba(0, 0, 0, .23)',
          borderRadius: '4px'
        }"
        :focusedSelectStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredSelectStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        selectClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)]
        "
        v-model="value" 
        :options="options"
        multiple
        :maxValues="2"
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
  </Example>
</template>

<script lang="ts" setup>
const value = reactive<string[]>([])
const options = ['1', '2', '3', '4']
const expanded = ref(false) 
</script>
