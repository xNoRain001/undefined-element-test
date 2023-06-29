<template>
  <div class="flex w-full h-full">
    <Header></Header>
    <div class="w-full max-w-[83.33%] p-5">
      <div class="p-5">
        <slot></slot>
      </div>
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="{ maxHeight: '100vh', fontSize: '16px' }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'

import codeMap from '@/code'

const code = ref('')

watch(() => useRoute().fullPath, (v) => {
  code.value = codeMap[v]
}, { immediate: true })
</script>