<template>
  <Example 
    id="01.basic" 
    :title="$t('components.u-checkbox.01-basic.title')" 
    :desc="$t('components.u-checkbox.01-basic.desc')"
  >
    <div class="w-full flex items-center [&>*:not(:first-of-type)]:ml-[32px]">
      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center hover:border-red-500
        "
        activeClass="
          bg-red-500 border-red-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center rounded-full
        "
        activeClass="
          border-blue-500
        "
      >
        <div class="w-[10px] h-[10px] bg-blue-500 rounded-full"></div>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
          items-center
        "
        activeClass="
          bg-green-500 border-green-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>

      <u-checkbox 
        v-model="value" 
        class="
          w-[20px] h-[20px] border-[2px] border-solid 
          border-[rgba(0,0,0,.54)] rounded-full flex justify-center
          items-center
        "
        activeClass="
          bg-pink-500 border-pink-500
        "
      >
        <u-icon name="done" color="white" width="16" height="16"></u-icon>
      </u-checkbox>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value =ref(false)
</script>