import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-infinite-scroll @load="onLoad" class="h-[400px] overflow-y-scroll relative">
        <template #content>
          <div 
            v-for="(item, index) in items" 
            :key="index"
          >{{ index }}: {{ item }}</div>
        </template>

        <template #loading>
          <div class="w-fit sticky bottom-[16px] left-1/2">
            <u-icon name="refresh"></u-icon>
          </div>
        </template>
      </u-infinite-scroll>
    </div>
  
</template>

<script lang="ts" setup>
const items = reactive<string[]>((new Array(40)).fill('Lorem ipsum dolor sit amet.'))

const onLoad = () => {
  // setTimeout(() => {
  //   const newItems = (new Array(10)).fill('Lorem ipsum dolor sit amet.')
  //   items.push(...newItems)
  // }, 1000) 
}
</script>
`
const target = {}

splitCode(code, target)

export default target
