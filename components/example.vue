<template>
  <div>
    <div class="text-[#00b4ff] text-[27px] mb-[24px]">{{ title }}</div>

    <u-expansion v-model="expanded">
      <u-expansion-item name="1">
        <template #header>
          <div 
            class="
              p-[8px] border-[1px] border-solid border-[#dcdfe6] flex 
              justify-end cursor-default
            "
            @click.stop="() => {}"
            :class="expanded.length ? '!border-b-transparent' : ''"
          >
            <u-icon name="code" @click="onExpand"></u-icon>
          </div>
        </template>

        <template #content>
          <u-tabs 
            v-model="tab"
            class="flex items-center bg-[#eee]"
            tabClass="
              text-[14px] font-medium text-[#757575] h-[36px] px-[16px] flex
              items-center border-[2px] border-solid border-x-0 border-t-0 
              border-b-transparent hover:bg-[rgba(117,117,117,.15)]
            "
            activeTabClass="!border-b-[#00b4ff] bg-[rgba(117,117,117,.15)]"
          >
            <u-tab name="template">
              Template
            </u-tab>
            <u-tab name="script">
              Script
            </u-tab>
            <u-tab name="style">
              Style
            </u-tab>
            <u-tab name="all">
              All
            </u-tab>
          </u-tabs>
          <u-tab-panels v-model="tab">
            <u-tab-panel name="template">
              <codemirror
                v-model="template"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
            </u-tab-panel>
            <u-tab-panel name="script">
              <codemirror
                v-model="script"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
            </u-tab-panel>
            <u-tab-panel name="style">
              <codemirror
                v-model="style"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
            </u-tab-panel>
            <u-tab-panel name="all">
              <codemirror
                v-model="all"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
            </u-tab-panel>
          </u-tab-panels>
        </template>
      </u-expansion-item>
    </u-expansion>

    <div 
      class="
        flex flex-col items-center border-[1px] border-solid border-[#dcdfe6]
        p-[24px]
      "
      :class="expanded ? 'border-t-[1px]' : 'border-t-0'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import codeMap from '@/code'

const props = defineProps<{ id: string, title?: string }>()
const { id, title } = toRefs(props)
const expanded = reactive<string[]>([])
const fullPath = useRoute().fullPath
const code = codeMap[fullPath][id.value]
const { template = '', script = '', style = '' } = code
const all = ref(template + script + style)
const tab = ref('template')
const codeMirrorStyle = { 
  maxHeight: '600px', 
  fontSize: '12px',
  backgroundColor: '#eee'
}

const onExpand = () => {
  if (expanded.length) {
    expanded.shift()
  } else {
    expanded.push('1')
  }
}
</script>
