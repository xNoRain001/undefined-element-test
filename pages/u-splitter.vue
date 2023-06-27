<template>
  <u-splitter v-model="value" :min="min" :max="max" class="h-[200px]">
    <template #before>
      <div class="h-full overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum eos, distinctio iusto eum mollitia! Tempora, impedit exercitationem quos repellendus dolores sequi, quod repellat amet accusantium libero, molestiae atque porro?
      </div>
    </template>
    <template #splitter>
      <div class="h-full border-[2px] border-solid border-red-500 border-y-0 border-r-0"></div>
    </template>
    <template #after>
      <div class="h-full overflow-y-scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe iste tempore ex nemo, tempora fuga, quisquam recusandae, ipsam fugit cum dolores soluta alias illum rerum asperiores quas. Deserunt, sint veniam!
      </div>
    </template>
  </u-splitter>
</template>

<script lang="ts" setup>
const value = ref(30)
const min = 10 // 10%
const max = 90 // 90%
</script>