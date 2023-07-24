import splitCode from '../../utils/split-code'

const code = `<template>
  
    <div class="w-full">
      <u-table 
        :head="head" 
        :body="body"
        thClass=""
        tdClass="
          border-b-[1px] border-solid border-[#0000001f] px-[7px] py-[16px]
          h-[48px] text-[13px] text-center
        "
        headTrClass=""
        bodyTrClass="hover:bg-[rgba(0,0,0,.08)]"
        tableClass="w-full border-separate border-spacing-0"
      ></u-table>
    </div>
  
</template>

<script lang="ts" setup>
const head = [
  {
    field: 'a',
    label: 'A',
    sortable: true,
    sortOrder: 'asc' // default value is desc
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
const body = reactive([
  {
    a: 3,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 1,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  },
  {
    a: 2,
    b: Math.random().toFixed(4),
    c: Math.random().toFixed(4),
  }
])
</script>
`
const target = {}

splitCode(code, target)

export default target
