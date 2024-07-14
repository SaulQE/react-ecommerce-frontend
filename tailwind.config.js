/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				'glass-dark': '#0F090C',
				'glass-light': '#FFEDE0',
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui'), require('flowbite/plugin')],
};
