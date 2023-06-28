<template>
  <div class="flex">
    <Header></Header>
    <div class="w-full max-w-[83.33%] p-5">
      <div class="h-1/3 p-5">
        <slot></slot>
      </div>
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="{ height: '66.67%', fontSize: '16px' }"
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