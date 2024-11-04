import basicConfig, { file } from './rollup.config'
import { defineConfig } from 'rollup'

export default defineConfig({
  ...basicConfig,
  output: {
    name: 'PTestComp',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'Vue',
      'lodash': '_'
    },
    exports: 'named'
  }
})
