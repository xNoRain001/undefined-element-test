<template>
  <div class="flex w-full h-full relative">
    <Header></Header>
    <div class="w-5/6 p-5 absolute right-0 top-0">
      <slot></slot>
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