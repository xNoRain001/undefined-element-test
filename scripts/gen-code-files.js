const { resolve } = require('path')
const { stat, mkdir, readdir, readFile, writeFile } = require('fs').promises

const dirname = resolve(__dirname, '../')

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

const genCodeFile = async (dirs, codes, prefix) => {
  for (let i = 0, l = dirs.length; i < l; i++) {
    const dir = dirs[i]
    const code = codes[dir]
      .replace(/<Example[\s\S]*?>/, '')
      .replace(/<\/Example>/, '')

    await writeFile(`${ prefix }/${ dir.slice(0, -3) }ts`, `import splitCode from '../../utils/split-code'\r\n\r\nconst code = \`${ code }\`\r\nconst target = {}\r\n\r\nsplitCode(code, target)\r\n\r\nexport default target\r\n`)
  }
}

const genIndexFile = async (dirs, prefix) => {
  let indexStr = ''
  let importStr = ''
  let exportStr = '\r\nexport default {\r\n'

  for (let i = 0, l = dirs.length; i < l; i++) {
    const name = dirs[i].slice(0, -4) // 01.basic, 02.max...
    const segments = name.slice(3).split('-')
    let _name = segments[0]

    for (let i = 1, l = segments.length; i < l; i++) {
      const segment = segments[i]
      _name += `${ segment[0].toUpperCase() }${ segment.slice(1) }`
    }

    importStr += `import ${ _name } from './${ name }'\r\n`
    exportStr += `\t'${ name }': ${ _name },\r\n`
  }

  exportStr += '}\r\n'
  indexStr += importStr + exportStr

  await writeFile(`${ prefix }/index.ts`, indexStr)
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

    await genCodeFile(_dirs, codes, _prefix)
    await genIndexFile(_dirs, _prefix)
  }
}

;(async () => {
  const codesMap = await genCodesMap()
  await genCodeFiles(codesMap)
})()
