<template>
  <Example id="readonly" title="Readonly">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        readonly
        v-model="value"
        placeholder="Please input..."
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('This is readonly input')
</script>
