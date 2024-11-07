import { defineConfig } from 'rollup'
import pkg from '../package.json' assert { type: 'json' }
import typescript from 'rollup-plugin-typescript2'
// import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
import { nodeResolve } from '@rollup/plugin-node-resolve'

const name = pkg.name
const overrides = {
  compilerOptions: { declaration: true, noUnusedLocals: false },
  exclude: ['__tests__/**/*.ts', '__tests__/**/*.tsx']
}
const file = (type) => `dist/${name}.${type}.js`

export { name, file }
export default defineConfig({
  input: 'src/index.ts',
  output: {
    name: name,
    file: file('esm'),
    format: 'es'
  },

  plugins: [
    json(),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    postcss({
      plugins: [autoprefixer(), cssnano()],
      extract: 'css/index.css'
    })
  ],
  external: ['vue', 'lodash-es']
  // external:(id)=>{
  //   return /^vue/.test(id)
  // }
})
