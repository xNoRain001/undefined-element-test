<template>
  <Example 
    id="03.hidden" 
    :title="$t('components.u-scroll-area.03-hidden.title')" 
    :desc="$t('components.u-scroll-area.03-hidden.desc')"
  >
    <div class="w-full">
      <u-scroll-area height="200px" width="400px" hidden>
        <div v-for="i in 15" :key="i">
          Lorem ipsum dolor sit amet.
        </div>
      </u-scroll-area>
    </div>
  </Example>
</template>
