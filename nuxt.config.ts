import tailwindcss from '@tailwindcss/vite';
import './lib/env';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			standalone: false,
		},
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxtjs/color-mode',
		'@pinia/nuxt',
		'@vueuse/nuxt',
	],
	colorMode: {
		dataValue: 'theme',
	},
});
