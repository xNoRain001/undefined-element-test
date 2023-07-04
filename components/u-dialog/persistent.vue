<template>
  <Example id="persistent" class="mt-[24px]">
    <div class="w-full">
      <div class="btns w-full flex items-center">
        <button @click="updateVisible6">
          <SvgIcon name="control-camera" fill="#fff"></SvgIcon>
          <span>PERSISTENT</span>
        </button>
      </div>

      <u-dialog v-model="visible" position="center" persistent>
        <div class="dialog-content-container">
          <div class="header-container flex justify-between">
            <div>header</div>
            <div class="icon" @click="updateVisible">×</div>
          </div>
          <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
          <button @click="updateVisible" class="btn">close</button>
        </div>
      </u-dialog>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const visible = ref(false)

const updateVisible = () => visible.value = !visible.value
</script>

<style type="text/tailwindcss" scoped>
.btns > button {
  @apply cursor-pointer flex items-center justify-between py-[6px] px-[16px] 
  rounded-[3px] bg-[#1976d2]
}

.btns > button > span {
  @apply ml-[12px] text-white text-[14px] font-medium
}

.btns > button:not(:first-of-type) {
  @apply ml-[8px]
}

.dialog-content-container {
  @apply w-80 bg-white p-4
}

.dialog-content-container > .header-container > .icon {
  @apply cursor-pointer
}

.dialog-content-container > .content,
.dialog-content-container > .btn {
  @apply mt-4
}
</style>
