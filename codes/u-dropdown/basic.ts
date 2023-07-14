import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-dropdown></u-dropdown>
    </div>
  
</template>`
const target = {}

splitCode(code, target)

export default target
