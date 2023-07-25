<template>
  <Example 
    id="05.disabled" 
    :title="$t('components.u-input.05-disabled.title')" 
    :desc="$t('components.u-input.05-disabled.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        disabled
        v-model="value"
        :inputStyle="{ 
          border: '1px solid #dcdfe6',
          borderRadius: '4px'
        }"
        inputClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)] bg-[#f5f7fa]
        "
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref('This is disabled input')
</script>
