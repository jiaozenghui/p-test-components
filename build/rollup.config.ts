import { defineConfig } from 'rollup'
import pkg from '../package.json' assert { type: 'json' }
import typescript from 'rollup-plugin-typescript2'
// import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
import { nodeResolve } from '@rollup/plugin-node-resolve'

const name = pkg.name
const overrides = {
  compilerOptions: { declaration: true, noUnusedLocals: false },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx'],
}
const file = (type) => `dist/${name}.${type}.js`

export { name, file }
export default defineConfig({
  input: 'src/app.vue',
  output: {
    name: name,
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' })
  ],
  external: ['vue', 'lodash-es'],
})