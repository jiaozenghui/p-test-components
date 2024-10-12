import { defineConfig, InputPluginOption } from 'rollup'
import pkg from '../package.json' assert { type: 'json' }
import typescript from 'rollup-plugin-typescript2'
// import typescript from '@rollup/plugin-typescript'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
const name = pkg.name
const overrides = {
  compilerOptions: { declaration: true, noUnusedLocals: false },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx']
}
const file = (type) => `dist/${name}.${type}.js`

export { name, file }
export default defineConfig({
  input: 'src/App.vue',
  output: {
    name: name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript(),
    vue(),
    css({
      // Optional: filename to write all styles to
      output: 'bundle.css'
    })
  ]
})
