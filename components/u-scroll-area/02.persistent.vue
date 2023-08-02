<template>
  <Example 
    id="02.persistent" 
    :title="$t('components.u-scroll-area.02-persistent.title')" 
    :desc="$t('components.u-scroll-area.02-persistent.desc')"
  >
    <div class="w-full">
      <u-scroll-area height="200px" width="400px" persistent>
        <div v-for="i in 15" :key="i">
          Lorem ipsum dolor sit amet.
        </div>
      </u-scroll-area>
    </div>
  </Example>
</template>
