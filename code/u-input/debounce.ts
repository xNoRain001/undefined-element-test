const code = `
<template>
  <Example id="debounce" title="Debounce">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        debounce="300"
        v-model="value"
        placeholder="Please input..."
      >
      </u-input>

      <div>value: {{ value }}</div>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('')
</script>
`

const debounce = {}

splitCode(code, debounce)

export default debounce
