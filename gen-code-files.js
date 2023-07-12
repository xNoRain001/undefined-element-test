const { resolve } = require('path')
const { stat, mkdir, readdir, readFile, writeFile } = require('fs').promises

const dirname = resolve(__dirname)

const genCodesMap = async () => {
  const codesMap = {}
  const prefix = `${ dirname }/components`
  const dirs = await readdir(prefix)
  
  for (let i = 0, l = dirs.length; i < l; i++) {
    const dir = dirs[i] // u-input, u-dialog...
    const stats = await stat(`${ prefix}/${ dir }`)
    const isFile = await stats.isFile()

    if (!isFile) {
      const target = codesMap[dir] = {}
      const _prefix = `${ prefix }/${ dir }`
      const dirs = await readdir(_prefix)

      for (let i = 0, l = dirs.length; i < l; i++) {
        const dir = dirs[i] // 01.basic.vue, 02.max.vue...
        
        target[dir] = await readFile(`${ _prefix }/${ dir }`, 'utf-8')
      }
    }
  }

  return codesMap
}

const genCodeFiles = async (codesMap) => {
  const prefix = `${ dirname }/codes`
  const dirs = Object.keys(codesMap)

  for (let i = 0, l = dirs.length; i < l; i++) {
    const dir = dirs[i]
    const target = `${ prefix }/${ dir }`

    try {
      await stat(target)
    } catch (error) {
      await mkdir(target)
    }

    const _dirs = Object.keys(codesMap[dir]) 
    const _prefix = `${ prefix }/${ dir }`
    const codes = codesMap[dir]

    for (let i = 0, l = _dirs.length; i < l; i++) {
      const dir = _dirs[i]
      const code = codes[dir]

      await writeFile(`${ _prefix }/${ dir.slice(0, -3) }ts`, `import splitCode from '../../utils/split-code'\r\n\r\nconst code = \`${ code }\`\r\nconst target = {}\r\n\r\nsplitCode(code, target)\r\n\r\nexport default target\r\n`)
    }
    
    let indexStr = ''

    for (let i = 0, l = _dirs.length; i < l; i++) {
      const name = _dirs[i].slice(0, -4) // 01.basic, 02.max...
      const _name = name.slice(3) // basic, max...

      indexStr += `import ${ _name } from './${ name }'\r\n`
    }

    indexStr += '\r\nexport default {\r\n'

    for (let i = 0, l = _dirs.length; i < l; i++) {
      const name = _dirs[i].slice(0, -4)
      const _name = name.slice(3)

      indexStr += `\t'${ name }': ${ _name },\r\n`
    }

    indexStr += '}\r\n'

    await writeFile(`${ _prefix }/index.ts`, indexStr)
  }
}

;(async () => {
  const codesMap = await genCodesMap()
  await genCodeFiles(codesMap)
})()
