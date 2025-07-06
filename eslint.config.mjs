// eslint.config.mjs
import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    type: 'app',
    vue: true,
    typescript: true,
    formatters: true,
    rules: {
      'ts/no-redeclare': 'off',
    },
  }),
)
