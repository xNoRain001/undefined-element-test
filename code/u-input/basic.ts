const code = `
<template>
  <Example id="basic" title="Basic">
    <div class="w-full grid gap-y-[24px]">
      <h2>The style is up to you</h2>

      <u-input 
        :inputStyle="{ 
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
        :placeholderStyle="{ 
          color: '#a8abb2',
          fontSize: '14px',
          fontWeight: '400px'
        }"
        v-model="value1"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </u-input>

      <u-input 
        v-model="value2"
        :inputStyle="{
          height: '56px',
          borderRadius: '4px',
          padding: '0 12px',
          fontSize: '14px',
          fontWeight: '400px',
          backgroundColor: 'rgba(0, 0, 0, .05)',
          color: 'black',
        }"
        :focusedInputStyle="{
          backgroundColor: 'black',
          color: 'white'
        }"
        :hoveredInputStyle="{
          backgroundColor: 'rgba(0, 0, 0, .07)'
        }"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </u-input>

      <u-input 
        :inputStyle="{
          height: '30px',
          borderRadius: '4px',
          padding: '1px 11px',
          color: 'rbg(48, 49, 51)',
          fontSize: '14px',
          fontWeight: '400px',
          border: '1px solid #dcdfe6'
        }"
        :focusedInputStyle="{
          border: '1px solid #409eff'
        }"
        :hoveredInputStyle="{
          border: '1px solid #c0c4cc'
        }"
        v-model="value3"
        placeholder="Please input"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </u-input>

      <u-input 
        v-model="value4"
        placeholder="Please input"
        @focus="focusHandler"
        @blur="blurHandler"
        :inputStyle="{
          height: '30px',
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          padding: '1px 11px',
          color: 'rbg(48, 49, 51)',
          fontSize: '14px',
          fontWeight: '400px',
          border: '1px solid #dcdfe6'
        }"
        :focusedInputStyle="{
          border: '1px solid #409eff'
        }"
        :hoveredInputStyle="{
          border: '1px solid #c0c4cc'
        }"
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
  </Example>
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')

const focusHandler = (e: Event) => {}

const blurHandler = (e: Event) => {}

const clearHandler = (oldValue: string) => {}
</script>
`

const basic = {}

splitCode(code, basic)

export default basic
