// eslint.config.mjs
import antfu from '@antfu/eslint-config';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	antfu({
		type: 'app',
		vue: true,
		typescript: true,
		formatters: true,
		stylistic: {
			indent: 'tab',
			semi: true,
			quotes: 'single',
		},
		ignores: ['**/migrations/*'],
		rules: {
			'ts/no-redeclare': ['off'],
			'node/prefer-global/process': ['off'],
			'unicorn/filename-case': ['error', {
				case: 'kebabCase',
				ignore: ['README.md'],
			}],
		},
	}),
);
