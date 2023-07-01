<template>
  <div class="flex w-full h-full relative">
    <Header></Header>
    <div class="w-full pl-[321px] pt-[55px] absolute right-0 top-0">
      <div class="pt-[64px] pl-[64px] pb-[42px]">
        <div class="w-[800px]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
