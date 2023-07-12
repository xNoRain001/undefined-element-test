import splitCode from '../../utils/split-code'

const code = `<template>
  <Example id="clearable" title="Clearable">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        v-model="value"
        placeholder="Please input..."
      >
        <template #append>
          <u-icon name="close" clearable></u-icon>
        </template>
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('This is clearable input')
</script>
`
const target = {}

splitCode(code, target)

export default target
