const UDialog = `
  <template>
    <div class="btns">
      <button @click="updateVisible1" class="btn">top</button>
      <button @click="updateVisible2" class="btn">right</button>
      <button @click="updateVisible3" class="btn">bottom</button>
      <button @click="updateVisible4" class="btn">left</button>
      <button @click="updateVisible5" class="btn">center</button>
      <button @click="updateVisible6" class="btn">persistent</button>
    </div>

    <UDialog v-model="visible1" position="top">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible1">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible1" class="btn">close</button>
      </div>
    </UDialog>

    <UDialog v-model="visible2" position="right">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible2">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible2" class="btn">close</button>
      </div>
    </UDialog>

    <UDialog v-model="visible3" position="bottom">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible3">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible3" class="btn">close</button>
      </div>
    </UDialog>

    <UDialog v-model="visible4" position="left">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible4">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible4" class="btn">close</button>
      </div>
    </UDialog>

    <UDialog v-model="visible5" position="center">
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible5">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible5" class="btn">close</button>
      </div>
    </UDialog>

    <UDialog v-model="visible6" position="center" persistent>
      <div class="dialog-content-container">
        <div class="header-container flex justify-between">
          <div>header</div>
          <div class="icon" @click="updateVisible6">×</div>
        </div>
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptate saepe neque iure! Similique sed repudiandae sapiente maxime sequi consectetur vel, impedit exercitationem harum sunt esse, quo minima fugit.</div>
        <button @click="updateVisible6" class="btn">close</button>
      </div>
    </UDialog>
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

  <style type="tailwind/css" scoped>
  .btns > button:not(:first-of-type) {
    @apply ml-4
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
`

export default UDialog
