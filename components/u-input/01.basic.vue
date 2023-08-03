<template>
  <Example 
    id="01.basic" 
    :title="$t('components.u-input.01-basic.title')" 
    :desc="$t('components.u-input.01-basic.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value1"
      >
      </u-input>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
