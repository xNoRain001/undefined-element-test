const UInput = `
  <template>
    <div class="flex flex-col items-center">
      <UInput 
        ref="inputContainer"
        class="input-container"
        v-model="value1"
        placeholder="input your content..."
        @focus="focusHandler"
        @blur="blurHandler"
      >
      </UInput>

      <UInput 
        class="input-container"
        v-model="value2"
        debounce="300"
        placeholder="input your content..."
        @focus="focusHandler"
        @blur="blurHandler"
      >
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <SvgIcon name="search" width="24" height="24" class="append"></SvgIcon>
        </template>
      </UInput>

      <UInput 
        class="input-container"
        v-model="value3"
        readonly
        placeholder="input your content..."
      >
        <template #before>
          <span class="mr-2">Readonly</span>
        </template>
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <SvgIcon name="search" width="24" height="24" class="append"></SvgIcon>
        </template>
      </UInput>

      <UInput 
        class="input-container"
        v-model="value4"
        disabled
        placeholder="input your content..."
      >
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <SvgIcon name="search" width="24" height="24" class="append"></SvgIcon>
        </template>
        <template #after>
          <span class="ml-2">Disabled</span>
        </template>
      </UInput>

      <UInput 
        class="input-container"
        v-model="value5"
        placeholder="input your content..."
        :inputStyle="{
          common: { borderRadius: '9999px' }
        }"
        @focus="focusHandler"
        @blur="blurHandler"
        @clear="clearHandler"
      >
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <span data-clearable class="cursor-pointer append">×</span>
        </template>
      </UInput>

      <UInput 
        class="input-container"
        v-model="value6"
        placeholder="input your content..."
        autofocus
        @focus="focusHandler"
        @blur="blurHandler"
      >
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <SvgIcon name="search" width="24" height="24" class="append"></SvgIcon>
        </template>
      </UInput>

      <UInput 
        class="input-container"
        v-model="value6"
        placeholder="input your content..."
        :inputStyle="inputStyle"
        @focus="focusHandler"
        @blur="blurHandler"
      >
        <template #before>
          <span class="before whitespace-nowrap">custom input style:</span>
        </template>
        <template #prepend>
          <SvgIcon name="location" width="24" height="24" class="prepend"></SvgIcon>
        </template>
        <template #append>
          <SvgIcon name="search" width="24" height="24" class="append"></SvgIcon>
        </template>
      </UInput>

      <div class="mt-4">
        <!-- <span>value1: {{ value1 }}</span><br>
        <span>value2: {{ value2 }}</span><br>
        <span>value3: {{ value3 }}</span><br>
        <span>value4: {{ value4 }}</span><br>
        <span>value5: {{ value5 }}</span><br>
        <span>value6: {{ value6 }}</span><br> -->
      </div>
    </div>
  </template>

  <script lang="ts" setup>
  const value1 = ref('')
  const value2 = ref('debounced...')
  const value3 = ref('readonly...')
  const value4 = ref('disabled...')
  const value5 = ref('clearable...')
  const value6 = ref('autofocus...')
  const inputStyle = {
    common: { padding: '0 8px' },
    source: { border: '1px solid rgba(0, 0, 0, .4)' },
    focused: { border: '1px solid #22c55e' },
    hovered: { border: '1px solid black' }
  }

  const focusHandler = (e: Event) => {}

  const blurHandler = (e: Event) => {}

  const clearHandler = (oldValue: string) => {}
  </script>

  <style type="text/tailwindcss" scoped>
  .input-container {
    @apply w-1/3 h-14 mt-4
  }

  .input-container 
  {
    @apply mr-2
  }

  .perpend,
  .before {
    @apply mr-2
  }

  .append,
  .after {
    @apply ml-2
  }

  /* .input-container :deep(.u-input) {
    @apply font-normal
  }

  .input-container :deep(.u-input)::placeholder {
    @apply text-[rgba(0,0,0,.3)]
  } */
  </style>
`

export default UInput
