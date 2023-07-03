<template>
  <Example id="basic">
    <div class="w-full">
      <!-- class="border-[1px] border-solid border-[#dcdfe6] border-x-0 border-b-0" -->

      <u-expansion 
        v-model="expanded"
        itemClass="
          border-[1px] border-x-0 border-solid border-[#dcdfe6] border-t-0
          first-of-type:border-t-[1px]
        "
        headerClass="flex items-center justify-between h-[47px]"
        contentClass="text-[14px] text-[#303133] font-medium"
      >
        <u-expansion-item name="1">
          <template #header>
            <div class="text-[14px] text-[#303133] font-medium">Home</div>
            <SvgIcon :name="expanded.includes('1') ? 'arrow-up' : 'arrow-down'" width="24" height="24"></SvgIcon>
          </template>
          <template #content>
            <div class="pb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
              voluptatum laborum illo voluptatibus cumque nesciunt provident 
              alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
              accusantium laborum nulla aspernatur? Aut, tempore!
            </div>
          </template>
        </u-expansion-item>

        <u-expansion-item name="2">
          <template #header>
            <div class="text-[14px] text-[#303133] font-medium">About us</div>
            <SvgIcon :name="expanded.includes('2') ? 'arrow-up' : 'arrow-down'" width="24" height="24"></SvgIcon>
          </template>
          <template #content>
            <div class="pb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
              voluptatum laborum illo voluptatibus cumque nesciunt provident 
              alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
              accusantium laborum nulla aspernatur? Aut, tempore!
            </div>
          </template>
        </u-expansion-item>
      </u-expansion>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const expanded = reactive([])
</script>
