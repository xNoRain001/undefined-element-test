<template>
  <Example 
    id="03.disabled" 
    :title="$t('components.u-checkbox.03-disabled.title')" 
    :desc="$t('components.u-checkbox.03-disabled.desc')"
  >
    <div class="w-full">
      <u-checkbox-group 
        v-model="selection"
        class="flex items-center [&>*:not(:first-of-type)]:ml-[32px]"
      >
        <u-checkbox class="flex items-center" value="red" disabled>
          <template #checkbox="{ checked }">
            <div 
              class="
                w-[20px] h-[20px] border-[2px] border-solid 
                border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
                items-center duration-300 transition-[all] cursor-not-allowed
              "
            >
              <Transition name="u-animate-opacity">
                <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
              </Transition>
            </div>
          </template>
        </u-checkbox>

        <u-checkbox class="flex items-center" value="green">
          <template #checkbox="{ checked }">
            <div 
              class="
                w-[20px] h-[20px] border-[2px] border-solid 
                border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
                items-center hover:border-green-500 duration-300 transition-[all]
              "
              :class="checked ? 'bg-green-500 border-green-500' : ''"
            >
              <Transition name="u-animate-opacity">
                <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
              </Transition>
            </div>
          </template>
        </u-checkbox>

        <u-checkbox class="flex items-center" value="blue">
          <template #checkbox="{ checked }">
            <div 
              class="
                w-[20px] h-[20px] border-[2px] border-solid 
                border-[rgba(0,0,0,.54)] rounded-[2px] flex justify-center
                items-center hover:border-blue-500 duration-300 transition-[all]
              "
              :class="checked ? 'bg-blue-500 border-blue-500' : ''"
            >
              <Transition name="u-animate-opacity">
                <u-icon v-if="checked" name="done" color="white" width="16" height="16"></u-icon>
              </Transition>
            </div>
          </template>
        </u-checkbox>
      </u-checkbox-group>

      <div class="mt-[16px]">checked: {{ selection }}</div>
    </div>
  </Example>
</template>

<script lang="ts" setup>
const selection = reactive<any[]>([])
</script>