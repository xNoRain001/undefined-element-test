<template>
  <Example id="01.basic" title="Basic">
    <div class="w-full">
      <u-table 
        :head="head" 
        :body="body"
        thClass="
          border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
          h-[48px] text-[13px] 
        "
        tdClass="
          border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
          h-[48px] text-[13px] text-center
        "
        tableClass="w-full border-separate border-spacing-0"
      ></u-table>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const head = [
  {
    field: 'a',
    label: 'A'
  },
  {
    field: 'b',
    label: 'B'
  },
  {
    field: 'c',
    label: 'C'
  },
]
const body = [
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: Math.random().toFixed(4),
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
]
</script>
