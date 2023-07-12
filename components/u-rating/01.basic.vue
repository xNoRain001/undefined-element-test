<template>
  <Example id="01.basic" title="Basic">
    <div class="w-full">
      <u-rating v-model="value1" max="5" color="black" activeColor="#eab308">
        <u-icon name="star" fill="currentColor"></u-icon>
      </u-rating>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const value1 = ref(3)
</script>
