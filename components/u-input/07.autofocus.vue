<template>
  <Example id="07.autofocus" title="Autofocus">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        autofocus
        v-model="value"
        :inputStyle="{ 
          border: '1px solid rgba(0, 0, 0, .23)',
          borderRadius: '4px'
        }"
        :focusedInputStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredInputStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        inputClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)]
        "
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('')
</script>
