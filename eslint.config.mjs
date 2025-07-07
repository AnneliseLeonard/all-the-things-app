// eslint.config.mjs
import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	antfu({
		type: 'app',
		stylistic: {
			indent: 'tab',
			quotes: 'single',
		},
		ignores: ['**/migrations/*'],
		vue: true,
		typescript: true,
		formatters: true,
		rules: {
			'ts/no-redeclare': 'off',
			'unicorn/filename-case': ['error', {
				case: 'kebabCase',
				ignore: ['README.md'],
			}],
		},
	}),
)
