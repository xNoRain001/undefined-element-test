import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-scroll-area height="200px" width="400px" hidden>
        <div v-for="i in 15" :key="i">
          Lorem ipsum dolor sit amet.
        </div>
      </u-scroll-area>
    </div>
  
</template>
`
const target = {}

splitCode(code, target)

export default target
