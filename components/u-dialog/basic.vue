<template>
  <Example id="basic">
    <div class="btns w-full flex items-center">
      <button @click="updateVisible1">
        <SvgIcon name="arrow-up" fill="#fff"></SvgIcon>
        <span>TOP</span>
      </button>
      <button @click="updateVisible2">
        <SvgIcon name="arrow-right" fill="#fff"></SvgIcon>
        <span>RIGHT</span>
      </button>
      <button @click="updateVisible3">
        <SvgIcon name="arrow-down" fill="#fff"></SvgIcon>
        <span>BOTTOM</span>
      </button>
      <button @click="updateVisible4">
        <SvgIcon name="arrow-left" fill="#fff"></SvgIcon>
        <span>LEFT</span>
      </button>
      <button @click="updateVisible5">
        <SvgIcon name="control-camera" fill="#fff"></SvgIcon>
        <span>CENTER</span>
      </button>
      <button @click="updateVisible6">
        <SvgIcon name="control-camera" fill="#fff"></SvgIcon>
        <span>PERSISTENT</span>
      </button>
    </div>

    <u-dialog v-model="visible1" position="top">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible1">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible1" class="btn">close</button>
      </div>
    </u-dialog>
    <u-dialog v-model="visible2" position="right">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible2">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible2" class="btn">close</button>
      </div>
    </u-dialog>
    <u-dialog v-model="visible3" position="bottom">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible3">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible3" class="btn">close</button>
      </div>
    </u-dialog>
    <u-dialog v-model="visible4" position="left">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible4">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible4" class="btn">close</button>
      </div>
    </u-dialog>
    <u-dialog v-model="visible5" position="center">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible5">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible5" class="btn">close</button>
      </div>
    </u-dialog>
  </Example> 
</template>

<script lang="ts" setup>
const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)
const visible6 = ref(false)

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const updateVisible3 = () => visible3.value = !visible3.value
const updateVisible4 = () => visible4.value = !visible4.value
const updateVisible5 = () => visible5.value = !visible5.value
const updateVisible6 = () => visible6.value = !visible6.value
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
