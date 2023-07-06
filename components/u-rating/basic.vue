<template>
  <Example id="basic">
    <div class="w-full">
      <u-rating v-model="value1" max="5" color="black" activeColor="#eab308">
        <SvgIcon name="star" width="24" height="24" fill="currentColor"></SvgIcon>
      </u-rating>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value1 = ref(3)
</script>
