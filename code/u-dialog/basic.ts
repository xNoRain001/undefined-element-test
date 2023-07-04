const code = `
<template>
  <Example id="basic">
    <div class="btns w-full flex items-center">
      <button @click="updateVisible1">
        <SvgIcon name="arrow-up" fill="#fff"></SvgIcon>
        <span>Top</span>
      </button>
      <button @click="updateVisible2">
        <SvgIcon name="arrow-right" fill="#fff"></SvgIcon>
        <span>Right</span>
      </button>
      <button @click="updateVisible3">
        <SvgIcon name="arrow-down" fill="#fff"></SvgIcon>
        <span>Bottom</span>
      </button>
      <button @click="updateVisible4">
        <SvgIcon name="arrow-left" fill="#fff"></SvgIcon>
        <span>Left</span>
      </button>
      <button @click="updateVisible5">
        <SvgIcon name="control-camera" fill="#fff"></SvgIcon>
        <span>Center</span>
      </button>
    </div>

    <u-dialog v-model="visible1" position="top">
      <div class="dialog">
        <div class="header">
          <div>Top</div>
          <SvgIcon 
            name="close" 
            @click="updateVisible1"
          ></SvgIcon>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
    <u-dialog v-model="visible2" position="right">
      <div class="dialog">
        <div class="header">
          <div>Right</div>
          <SvgIcon 
            name="close" 
            @click="updateVisible2"
          ></SvgIcon>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
    <u-dialog v-model="visible3" position="bottom">
      <div class="dialog">
        <div class="header">
          <div>Bottom</div>
          <SvgIcon 
            name="close" 
            @click="updateVisible3"
          ></SvgIcon>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
    <u-dialog v-model="visible4" position="left">
      <div class="dialog">
        <div class="header">
          <div>Left</div>
          <SvgIcon 
            name="close" 
            @click="updateVisible4"
          ></SvgIcon>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
      </div>
    </u-dialog>
    <u-dialog v-model="visible5" position="center">
      <div class="dialog">
        <div class="header">
          <div>Center</div>
          <SvgIcon 
            name="close" 
            @click="updateVisible5"
          ></SvgIcon>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
          quisquam repellendus vitae quam. Officiis, soluta. Perferendis 
          minima accusamus aliquid nam nostrum dolorem, ad numquam assumenda 
          magni modi harum incidunt repellat.
        </div>
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

const updateVisible1 = () => visible1.value = !visible1.value
const updateVisible2 = () => visible2.value = !visible2.value
const updateVisible3 = () => visible3.value = !visible3.value
const updateVisible4 = () => visible4.value = !visible4.value
const updateVisible5 = () => visible5.value = !visible5.value
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

.dialog {
  @apply w-[560px] bg-white p-[24px]
}

.dialog > .header {
  @apply flex justify-between
}

.dialog> .header > div {
  @apply text-[20px] font-semibold 
}

.dialog > .header > svg {
  @apply cursor-pointer
}

.dialog > .content {
  @apply mt-[24px] text-[14px]
}
</style>
`

const basic = {}

splitCode(code, basic)

export default basic
