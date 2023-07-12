import splitCode from '../../utils/split-code'

const code = `<template>
  <Example id="06.clearable" title="Clearable">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        v-model="value"
        placeholder="Please input..."
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
      >
        <template #append>
          <u-icon name="close" clearable></u-icon>
        </template>
      </u-input>
    </div>
  
</template>

<script lang="ts" setup>
const value = ref('This is clearable input')
</script>
`
const target = {}

splitCode(code, target)

export default target
