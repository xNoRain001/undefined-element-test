<template>
  <UInput 
    ref="inputContainer"
    class="input-container"
    v-model="value1"
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
    @focus="focusHandler"
    @blur="blurHandler"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <SvgIcon name="search" width="24" height="24"></SvgIcon>
    </template>
  </UInput>

  <UInput 
    class="input-container rounded-full"
    v-model="value2"
    debounce="300"
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
    @focus="focusHandler"
    @blur="blurHandler"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <SvgIcon name="search" width="24" height="24"></SvgIcon>
    </template>
  </UInput>

  <UInput 
    class="input-container rounded-md"
    v-model="value3"
    readonly
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <SvgIcon name="search" width="24" height="24"></SvgIcon>
    </template>
  </UInput>

  <UInput 
    class="input-container"
    v-model="value4"
    disabled
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <SvgIcon name="search" width="24" height="24"></SvgIcon>
    </template>
  </UInput>

  <UInput 
    class="input-container"
    v-model="value5"
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
    @focus="focusHandler"
    @blur="blurHandler"
    @clear="clearHandler"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <span data-clearable class="cursor-pointer">×</span>
    </template>
  </UInput>

  <UInput 
    class="input-container"
    v-model="value6"
    placeholder="input your content..."
    focusedBorderColor="#3b82f6"
    autofocus
    @focus="focusHandler"
    @blur="blurHandler"
  >
    <template #prefix>
      <SvgIcon name="location" width="24" height="24" class="prefix"></SvgIcon>
    </template>
    <template #suffix>
      <SvgIcon name="search" width="24" height="24"></SvgIcon>
    </template>
  </UInput>

  <div class="mt-4">
    <span>value1: {{ value1 }}</span><br>
    <span>value2: {{ value2 }}</span><br>
    <span>value3: {{ value3 }}</span><br>
    <span>value4: {{ value4 }}</span><br>
    <span>value5: {{ value5 }}</span><br>
    <span>value6: {{ value6 }}</span><br>
  </div>
</template>

<script lang="ts" setup>
const value1 = ref('')
const value2 = ref('debounced...')
const value3 = ref('readonly...')
const value4 = ref('disabled...')
const value5 = ref('clearable...')
const value6 = ref('autofocus...')

const focusHandler = (e: Event) => {
  // const container = (e.target as HTMLElement).parentNode as HTMLElement
  // container.style.borderColor = '#3b82f6'
}

const blurHandler = (e: Event) => {
  // const target = e.target as HTMLElement
  // const container = target.parentNode as HTMLElement
}

const clearHandler = (oldValue: string) => {
  console.log(oldValue)
}
</script>

<style type="text/tailwindcss" scoped>
.input-container {
  @apply px-2 border-[2px] border-solid border-[rgba(0,0,0,.3)] h-14 mt-4
}

.input-container:hover {
  @apply border-black
}

.input-container 
.prefix {
  @apply mr-2
}

.input-container :deep(.u-input) {
  @apply font-normal
}

.input-container :deep(.u-input)::placeholder {
  @apply text-[rgba(0,0,0,.3)]
}
</style>
