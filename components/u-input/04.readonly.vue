<template>
  <Example id="04.readonly" title="Readonly">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        readonly
        v-model="value"
        :inputStyle="{ 
          border: '1px solid rgba(0, 0, 0, .23)',
          borderRadius: '4px'
        }"
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
const value = ref('This is readonly input')
</script>
