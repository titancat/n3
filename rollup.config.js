
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: 'samples/js/n3.js',
    name: 'n3',
    format: 'umd',
    banner: `/* @license n3.js v${pkg.version} | (c) mcattx@gmail.com */`,
    globals: {
      d3: 'd3'
    }
  },
  plugins: [
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ]
      ]
    })
  ],
  external: ['d3']
}
