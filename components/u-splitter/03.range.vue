<template>
  <Example 
    id="03.range" 
    :title="$t('components.u-splitter.03-range.title')" 
    :desc="$t('components.u-splitter.03-range.desc')"
  >
    <div class="w-full">
      <u-splitter 
        min="10"
        max="60"
        v-model="value" 
        class="w-full h-[200px]"
      >
        <template #before>
          <div v-for="i in 5" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </template>
        <template #splitter>
          <div class="w-[13px] h-full flex justify-center">
            <div class="
              h-full border-[1px] border-solid border-[#dcdfe6] border-y-0 
              border-r-0
            "></div>
          </div>
        </template>
        <template #after>
          <div v-for="i in 5" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </template>
      </u-splitter>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value = ref(30)
</script>
