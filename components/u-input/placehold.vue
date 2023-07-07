<template>
  <Example id="placeholder" title="Placeholder">
    <div class="w-full grid gap-y-[24px]">
      <h2>overwrite placeholder style</h2>

      <u-input 
        v-model="value"
        placeholder="Please input..."
        :placeholderStyle="{
          color: 'black',
          fontSize:'16px',
          fontWeight: '600'
        }"
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('')
</script>
