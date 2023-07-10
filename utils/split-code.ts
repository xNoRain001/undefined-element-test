const splitCode = (
  code: string, 
  target: { 
    all?: string,
    style?: string, 
    script?: string, 
    template?: string,
  }
) => {
  const template = code.match(/(<template>[\s\S]*?<\/template>)/)?.[0] || ''
  const script = code.match(/(<script lang="ts" setup>[\s\S]*?<\/script>)/)?.[0] || '' 
  const style = code.match(/(<style type="text\/tailwindcss" scoped>[\s\S]*?<\/style>)/)?.[0] || '' 

  target.template = template
  target.script = script
  target.style = style
  target.all = template + script + style
}

export default splitCode
