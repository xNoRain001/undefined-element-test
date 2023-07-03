const basic = `
  <template>
    <Example id="basic">
      <div class="w-full">
        <u-expansion 
          v-model="expanded"
          :headerClass="\`
            flex items-center justify-between border-x-0 border-solid 
            border-[1px] h-[47px] \${ expanded.includes(name1) ? 'border-b-transparent' : '' }
          \`"
          contentClass="text-[14px] text-[#303133] font-medium"
        >
          <u-expansion-item name="1">
            <template #header>
              <div class="text-[14px] text-[#303133] font-medium">About us</div>
              <SvgIcon :name="expanded ? 'arrow-up' : 'arrow-down'" width="24" height="24"></SvgIcon>
            </template>
            <template #content>
              <div class="pb-[24px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, 
                voluptatum laborum illo voluptatibus cumque nesciunt provident 
                alias nam id possimus! Voluptatibus, at reprehenderit aperiam 
                accusantium laborum nulla aspernatur? Aut, tempore!
              </div>
            </template>
          </u-expansion-item>
        </u-expansion>
      </div>
    </Example>
  </template>

  <script lang="ts" setup>
  const name1 = '1'
  const expanded = reactive([name1])
  </script>
`

export default basic
