const code = `
<template>
  <Example id="disabled" title="Disabled">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        disabled
        v-model="value"
        placeholder="Please input..."
        :hoveredInputStyle="{}"
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('This is disabled input')
</script>
`

const disabled = {}

splitCode(code, disabled)

export default disabled
