<template>
  <u-rating v-model="value1" :max="5" defaultColor="black" activeColor="green">
    <SvgIcon name="color" width="24" height="24"></SvgIcon>
  </u-rating>

  <u-rating v-model="value2" :max="10" defaultColor="black" activeColor="green">
    <SvgIcon name="color" width="24" height="24"></SvgIcon>
  </u-rating>

  <div>value1: {{ value1 }}</div>
  <div>value2: {{ value2 }}</div>
</template>

<script lang="ts" setup>
const value1 = ref(3)
const value2 = ref(7)
</script>
