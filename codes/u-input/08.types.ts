import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <u-input
        class="
          w-full h-[56px] px-[12px] rounded-[4px]
          before:border before:border-solid before:border-[rgba(0,0,0,.23)]
          hover:before:border-[rgba(0,0,0,.87)]
        "
        focusedClass="before:!border-[rgb(25,118,210)] before:!border-[2px]"
        inputClass="text-[rgba(0,0,0,.87)] text-[14px] font-normal"
        v-model="value"
        type="password"
      >
        <template #append>
          <u-icon 
            visible
            @click="updateVisible" 
            :name="visible ? 'visibility' : 'visibility_off'"
          ></u-icon>
        </template>
      </u-input>
    </div>
  
</template>

<script lang="ts" setup>
const value = ref('')
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
`
const target = {}

splitCode(code, target)

export default target
