<template>
  <Example id="basic">
    <div class="w-full grid gap-y-[24px]">
      <p>Element Plus</p>

      <UInput 
        :inputStyle="{
          style: {
            height: '30px',
            borderRadius: '4px',
            padding: '1px 11px',
            color: 'rbg(48, 49, 51)',
            fontSize: '14px',
            fontWeight: '400px',
            placeholderColor: '#a8abb2',
            border: '1px solid #dcdfe6'
          },
          focused: {
            border: '1px solid #409eff'
          },
          hovered: {
            border: '1px solid #c0c4cc'
          }
        }"
        v-model="value1"
        placeholder="Please input"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </UInput>

      <UInput 
        v-model="value2"
        placeholder="Please input"
        @focus="focusHandler"
        @blur="blurHandler"
        :inputStyle="{
          style: {
            height: '30px',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            placeholderColor: '#a8abb2',
            padding: '1px 11px',
            color: 'rbg(48, 49, 51)',
            fontSize: '14px',
            fontWeight: '400px',
            border: '1px solid #dcdfe6'
          },
          focused: {
            border: '1px solid #409eff'
          },
          hovered: {
            border: '1px solid #c0c4cc'
          }
        }"
      >
        <template #before>
          <div class="h-full px-[20px] border-[1px] border-r-0 rounded-tl-[4px] rounded-bl-[4px] border-solid border-[#dcdfe6] bg-[rgb(245,247,250)] text-[rgb(144,147,153)] text-[14px] flex items-center">
            https://
          </div>
        </template>
      </UInput>

      <p>Quasar Framework</p>

      <UInput 
        v-model="value3"
        :inputStyle="{
          style: {
            height: '56px',
            borderRadius: '4px',
            padding: '0 12px',
            color: 'rgba(0, 0, 0, .87)',
            fontSize: '14px',
            fontWeight: '400px',
            border: '1px solid rgba(0, 0, 0, .23)'
          },
          focused: {
            border: '2px solid rgb(25, 118, 210)'
          },
          hovered: {
            border: '1px solid rgba(0, 0, 0, .87)'
          }
        }"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </UInput>

      <UInput 
        v-model="value4"
        :inputStyle="{
          style: {
            height: '56px',
            borderRadius: '4px',
            padding: '0 12px',
            fontSize: '14px',
            fontWeight: '400px',
            backgroundColor: 'rgba(0, 0, 0, .05)',
            color: 'black',
          },
          focused: {
            backgroundColor: 'black',
            color: 'white'
          },
          hovered: {
            backgroundColor: 'rgba(0, 0, 0, .07)'
          }
        }"
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </UInput>

      <p>The style is up to you</p>

      <UInput 
        v-model="value6"
        placeholder="Please input"
        :inputStyle="{
          style: {
            height: '46px',
            borderRadius: '4px',
            padding: '0 12px',
            color: 'black',
            fontSize: '14px',
            fontWeight: '400px',
            placeholderColor: '#a8abb2',
            border: '1px solid #dcdfe6'
          },
          focused: {
            border: '1px solid #3b82f6'
          },
          hovered: {
            border: '1px solid black'
          }
        }"
      >
      </UInput>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const inputStyle = {
  common: { padding: '0 8px' },
  source: { border: '1px solid rgba(0, 0, 0, .4)' },
  focused: { border: '1px solid #22c55e' },
  hovered: { border: '1px solid black' }
}

const focusHandler = (e: Event) => {}

const blurHandler = (e: Event) => {}

const clearHandler = (oldValue: string) => {}
</script>

<style type="text/tailwindcss" scoped>
.input-container {
  @apply h-14
}

.input-container 
 {
  @apply mr-2
}

.perpend {
  @apply mr-2
}

.append {
  @apply ml-2
}

.before,
.after {
  @apply h-full border-[2px] border-solid border-[rgba(0,0,0,.4)] 
  flex justify-center items-center px-5 text-[#909399] text-[14px]
  bg-[#eee]
}

.before {
  @apply border-r-0
}

.after {
  @apply border-l-0
}
</style>
