<template>
  <UInput 
    class="input-container"
    v-model="value1"
    placeholder="input your content..."
  >
    <template #prefix>
      <div class="prefix">prefix</div>
    </template>
    <template #suffix>
      <div>suffix</div>
    </template>
  </UInput>

  <UInput 
    class="input-container"
    v-model="value2"
    debounce="300"
    placeholder="input your content...(debounced)"
  >
    <template #prefix>
      <div class="prefix">prefix</div>
    </template>
    <template #suffix>
      <div>suffix</div>
    </template>
  </UInput>

  <div class="mt-4">
    <span>value1: {{ value1 }}</span><br>
    <span>value2: {{ value2 }}</span>
  </div>
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('')
</script>

<style type="text/tailwindcss" scoped>
.input-container {
  @apply px-[12px] py-[16px] border-[2px] border-solid 
  border-[#B3B7C1] rounded-[8px] flex items-center mt-4
}

.prefix {
  @apply mr-2 text-green-500
}
</style>
