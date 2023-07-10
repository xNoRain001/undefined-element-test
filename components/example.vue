<template>
  <div>
    <div 
      @click="updateAnchor"
      :id="__title"
      class="
        text-[#00b4ff] text-[27px] mb-[24px] cursor-pointer after:content-['#'] 
        after:opacity-0 after:ml-[12px] hover:after:opacity-100
      "
    >
      {{ title }}
    </div>

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
            <div>
              <u-icon name="code" @click="onExpand"></u-icon>
              <u-tooltip>
                <div class="tooltip mt-[16px]">View Source</div>
              </u-tooltip>
            </div>
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
            <u-tab v-if="script.length" name="script">
              Script
            </u-tab>
            <u-tab v-if="style.length" name="style">
              Style
            </u-tab>
            <u-tab name="all">
              All
            </u-tab>
          </u-tabs>
          <u-tab-panels v-model="tab" panelClass="relative">
            <u-tab-panel name="template">
              <codemirror
                v-model="template"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
              <div class="absolute top-[24px] right-[24px]">
                <u-icon 
                  @click="writeText('template')"
                  name="content_copy" 
                  fill="rgb(0, 180, 255)"
                ></u-icon>
                <u-tooltip>
                  <div class="tooltip mt-[16px]">Copy to clipboard</div>
                </u-tooltip>
              </div>
            </u-tab-panel>
            <u-tab-panel v-if="script.length" name="script">
              <codemirror
                v-model="script"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
              <div class="absolute top-[24px] right-[24px]">
                <u-icon 
                  @click="writeText('script')"
                  name="content_copy" 
                  fill="rgb(0, 180, 255)"
                ></u-icon>
                <u-tooltip>
                  <div class="tooltip mt-[16px]">Copy to clipboard</div>
                </u-tooltip>
              </div>
            </u-tab-panel>
            <u-tab-panel v-if="style.length" name="style">
              <codemirror
                v-model="style"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
              <div>
                <u-icon 
                  @click="writeText('style')"
                  name="content_copy" 
                  fill="rgb(0, 180, 255)"
                ></u-icon>
                <u-tooltip>
                  <div class="tooltip mt-[16px]">Copy to clipboard</div>
                </u-tooltip>
              </div>
            </u-tab-panel>
            <u-tab-panel name="all">
              <codemirror
                v-model="all"
                placeholder="Code goes here..."
                :style="codeMirrorStyle"
              />
              <div>
                <u-icon 
                  @click="writeText('all')"
                  name="content_copy" 
                  fill="rgb(0, 180, 255)"
                ></u-icon>
                <u-tooltip>
                  <div class="tooltip mt-[16px]">Copy to clipboard</div>
                </u-tooltip>
              </div>
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

const props = defineProps<{ id: string, title: string }>()
const { id, title } = toRefs(props)
const _title = title.value
const __title = `${ _title[0].toLocaleLowerCase() }${ _title.slice(1) }`
const expanded = reactive<string[]>([])
const path = useRoute().path
const code = codeMap[path][id.value]
const { template = '', script = '', style = '', all = '' } = code
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

const writeText = async (type: 'template' | 'script' | 'style' | 'all') => {
  await navigator.clipboard.writeText(code[type] || '')
}

const updateAnchor = () => location.hash = __title
</script>
