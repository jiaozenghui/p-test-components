import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import pkg from '../package.json' assert { type: 'json' }
import typescript from 'rollup-plugin-typescript2'

const name = pkg.name
const file = type=>`dist/${name}.${type}.js`

const overrides = {
  compilerOptions: { declaration: true, noUnusedLocals: false },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx'],
}
export default {
    input: 'src/App.vue',
    output:{
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins:[
        typescript({ tsconfigOverride: overrides }),
        vue(),
        
        css({output: 'bundle.css'})
    ]
}