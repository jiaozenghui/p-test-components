import basicConfig, { file } from './rollup.config'
import { defineConfig } from 'rollup'

export default defineConfig({
  ...basicConfig,
  output: {
    name: 'PTestComps',
    file: file('umd'),
    format: 'umd',
    globals: {
        vue: 'Vue',
        'lodash-es': '_'
    },
    exports: 'named'
  },
})