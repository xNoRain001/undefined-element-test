const UInput = `
  <template>
    <UInput 
      class="input-container"
      v-model="value1"
      placeholder="input your content..."
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
      v-model="value2"
      debounce="300"
      placeholder="input your content..."
    >
      <template #prefix>
        <button class="btn prefix whitespace-nowrap">undefined element</button>
      </template>
      <template #suffix>
        <SvgIcon name="search" width="24" height="24"></SvgIcon>
      </template>
    </UInput>

    <UInput 
      class="input-container"
      v-model="value3"
      readonly
      placeholder="input your content..."
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
    </div>
  </template>

  <script lang="ts" setup>
  const value1 = ref('')
  const value2 = ref('debounced content...')
  const value3 = ref('readonly content...')
  const value4 = ref('disabled content...')
  const value5 = ref('clearable content...')
  </script>

  <style type="text/tailwindcss" scoped>
  .input-container {
    @apply px-[12px] py-[16px] border-[2px] border-solid 
    border-[#B3B7C1] rounded-[8px] flex items-center mt-4
  }

  .prefix {
    @apply mr-2
  }
  </style>
`

export default UInput
