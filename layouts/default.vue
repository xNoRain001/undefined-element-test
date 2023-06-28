<template>
  <div class="flex">
    <Header></Header>
    <div class="w-full max-w-[83.33%] p-5">
      <div class="h-1/3 ">
        <slot></slot>
      </div>
      <codemirror
        v-model="code"
        placeholder="Code goes here..."
        :style="{ height: '66.67%' }"
        :extensions="extensions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'

import codeMap from '@/code'

const code = ref('')
const extensions = [javascript()]

watch(() => useRoute().fullPath, (v) => {
  code.value = codeMap[v]
}, { immediate: true })
</script>