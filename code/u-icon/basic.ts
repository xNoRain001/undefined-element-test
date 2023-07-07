const code = `
<template>
  <Example id="basic">
    <div class="w-full">
      <div>
        <span>icons from </span>
        <a 
          target="_blank" 
          class="text-blue-500 hover:underline" 
          href="https://fonts.google.com/icons"
        >
          https://fonts.google.com/icons
        </a>
      </div>
      <u-icon name="favorite" width="18" height="18" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="24" height="24" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="32" height="32" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="38" height="38" color="#1976d2"></u-icon>
      <u-icon name="favorite" width="46" height="46" color="#1976d2"></u-icon>
    </div>
  </Example>
</template>
`

const basic = {}

splitCode(code, basic)

export default basic
