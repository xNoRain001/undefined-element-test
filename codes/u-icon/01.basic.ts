import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full grid gap-y-[24px]">
      <div>
        <span>icon from </span>
        <a 
          target="_blank" 
          class="text-blue-500 hover:underline" 
          href="https://fonts.google.com/icons"
        >
          https://fonts.google.com/icons
        </a>
      </div>

      <h2>Filled</h2>
      
      <div>
        <u-icon name="favorite" width="18" height="18" color="#1976d2"></u-icon>
        <u-icon name="favorite" width="24" height="24" color="#1976d2"></u-icon>
        <u-icon name="favorite" width="32" height="32" color="#1976d2"></u-icon>
        <u-icon name="favorite" width="38" height="38" color="#1976d2"></u-icon>
        <u-icon name="favorite" width="46" height="46" color="#1976d2"></u-icon>
      </div>

      <div>
        <u-icon name="trending_up" width="18" height="18" color="#1976d2"></u-icon>
        <u-icon name="trending_up" width="24" height="24" color="#1976d2"></u-icon>
        <u-icon name="trending_up" width="32" height="32" color="#1976d2"></u-icon>
        <u-icon name="trending_up" width="38" height="38" color="#1976d2"></u-icon>
        <!-- or Lower Camel Case -->
        <u-icon name="trendingUp" width="46" height="46" color="#1976d2"></u-icon>
      </div>

      <h2>Outlined</h2>

      <div>
        <u-icon type="outlined" name="thumb_up" width="18" height="18" color="#1976d2"></u-icon>
        <u-icon type="outlined" name="thumb_up" width="24" height="24" color="#1976d2"></u-icon>
        <u-icon type="outlined" name="thumb_up" width="32" height="32" color="#1976d2"></u-icon>
        <u-icon type="outlined" name="thumb_up" width="38" height="38" color="#1976d2"></u-icon>
        <u-icon type="outlined" name="thumb_up" width="46" height="46" color="#1976d2"></u-icon>
      </div>
    </div>
  
</template>
`
const target = {}

splitCode(code, target)

export default target
