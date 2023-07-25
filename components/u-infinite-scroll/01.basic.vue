<template>
  <Example id="01.basic" title="Basic">
    <div class="w-full">
      <u-infinite-scroll @load="onLoad" class="h-[400px] overflow-y-scroll relative">
        <div 
          v-for="(item, index) in items" 
          :key="index"
        >{{ index }}: {{ item }}</div>

        <template #loading="{ loading }">
          <div class="w-fit sticky bottom-[16px] left-1/2">
            <u-icon v-if="loading" name="refresh"></u-icon>
            <div v-else>
              load more
            </div>
          </div>
        </template>
      </u-infinite-scroll>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = () => {
  setTimeout(() => {
    const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
    items.push(...newItems)
  }, 1000) 
}
</script>
