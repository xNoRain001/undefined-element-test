<template>
  <Example 
    id="01.basic" 
    :title="$t('components.u-input.01-basic.title')" 
    :desc="$t('components.u-input.01-basic.desc')"
  >
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="w-full"
        inputClass="
          h-[56px] rounded-[4px] px-[12px] text-[rgba(0,0,0,.87)]
          text-[14px] font-normal 
          border border-solid border-[rgba(0,0,0,.23)]
          hover:border-[rgba(0,0,0,.87)]
          focus:border-[rgb(25,118,210)]
        "
        v-model="value1"
      >
      </u-input>

      <u-input 
        class="w-full"
        inputClass="
          h-[56px] rounded-[4px] px-[12px] text-[14px] font-normal
          bg-[rgba(0,0,0,.05)] text-black
          border border-solid border-[rgba(0,0,0,.23)]
          hover:bg-[rgba(0,0,0,.87)] hover:text-white
          focus:bg-black focus:text-white
        "
        v-model="value2"
      >
      </u-input>

      <u-input 
        class="w-full"
        inputClass="
          h-[30px] py-[1px] px-[11px] text-[14px] 
          font-normal text-[rbg(48,49,51)]
          border border-solid border-[#dcdfe6]
          hover:border-[#c0c4cc]
          focus:border-[#409eff]
        "
        v-model="value3"
      >
      </u-input>

      <u-input 
        class="w-full"
        inputClass="
          h-[30px] py-[1px] px-[11px] 
          text-[14px] font-normal text-[rbg(48,49,51)]
          border border-solid border-[#dcdfe6]
          hover:border-[#c0c4cc]
          focus:border-[#409eff]
        "
        v-model="value4"
      >
        <template #before>
          <div class="
            h-full px-[20px] border-[1px] border-r-0 rounded-tl-[4px] 
            rounded-bl-[4px] border-solid border-[#dcdfe6] 
            bg-[rgb(245,247,250)] text-[rgb(144,147,153)] text-[14px] flex 
            items-center
          ">
            https://
          </div>
        </template>
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
