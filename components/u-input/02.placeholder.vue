<template>
  <Example id="02.placeholder" title="Placeholder">
    <div class="w-full grid gap-y-[24px]">
      <h2>overwrite placeholder style</h2>

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
