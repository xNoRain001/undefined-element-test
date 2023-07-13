<template>
  <Example id="08.type" title="Type">
    <div class="w-full grid gap-y-[24px]">
      <u-input 
        type="password"
        v-model="value"
        :inputStyle="{ 
          border: '1px solid rgba(0, 0, 0, .23)',
          borderRadius: '4px'
        }"
        :focusedInputStyle="{ border: '2px solid rgb(25, 118, 210)' }"
        :hoveredInputStyle="{ border: '1px solid rgba(0, 0, 0, .87)' }"
        inputClass="
          w-full h-[56px] px-[12px] text-[14px] font-normal 
          text-[rgba(0, 0, 0, .87)]
        "
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
  </Example>
</template>

<script lang="ts" setup>
const value = ref('')
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>
