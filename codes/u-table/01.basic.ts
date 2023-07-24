import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      1
    </div>
  
</template>`
const target = {}

splitCode(code, target)

export default target
