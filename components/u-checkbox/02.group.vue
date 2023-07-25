<template>
  <Example id="02.group" title="Group">
    <div class="w-full">
      <u-checkbox-group 
        v-model="selection" 
        class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
      >
        <u-checkbox 
          class="
            w-[20px] h-[20px] border-[2px] border-solid 
            border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
            items-center
          "
          activeClass="
            bg-red-500 border-red-500
          "
        >
          <u-icon name="done" color="white" width="16" height="16"></u-icon>
        </u-checkbox>

        <u-checkbox 
          class="
            w-[20px] h-[20px] border-[2px] border-solid 
            border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
            items-center
          "
          activeClass="
            bg-blue-500 border-blue-500
          "
        >
          <u-icon name="done" color="white" width="16" height="16"></u-icon>
        </u-checkbox>

        <u-checkbox 
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
      </u-checkbox-group>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const selection = reactive<any[]>([])
</script>