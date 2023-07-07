const code = `
<template>
  <Example id="autofocus" title="Autofocus">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        autofocus
        v-model="value"
        placeholder="Please input..."
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('This is autofocusing input')
</script>
`

const autofocus = {}

splitCode(code, autofocus)

export default autofocus
