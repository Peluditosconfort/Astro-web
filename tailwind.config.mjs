/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./node_modules/flowbite/**/*.js',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue }'
	],
	
	theme: {
		extend: {
			fontFamily : {
				"myriad" : ["Myriad-pro", "sans-serif"],
				"lato" : ["Lato", "sans-serif"]
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
