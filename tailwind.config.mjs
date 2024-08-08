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
			},
			colors : {
				"naranja" : "#f2790c",
				"azul" : "#04297e"
			},
			screens :{
				"sm" : "360px",
				"md" : "768px",      
				"lg" : "1080px",
				"xl" : "1536px",
				"2xl" : "1900px",	
			},
			
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
