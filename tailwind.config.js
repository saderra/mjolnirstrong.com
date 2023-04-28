const theme = require('tailwindcss/defaultTheme');
const twtype = require('@tailwindcss/typography');
const twforms = require('@tailwindcss/forms');

module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    container: {
			center: true,
			padding: {
				DEFAULT: '.8rem',
				sm: '1.5rem'
			  },
			screens: {
				sm: "100%",
				md: "100%",
				lg: "1140px",
				xl: "1380px",
				"2xl": "1540px"
			}
		},
    extend: {
		backgroundImage: theme => ({
			'home-cover': "url('/assets/images/mast/home-page-mast-min.jpg')"
		}),
		fontWeight: {
			light: 200,
			normal: 300,
			medium: 400,
			strong: 500,
			stronger: 600
		},
		maxWidth: {
			xxs: '200px',
		},			
      	colors: {
			cfpurple: {
				light: '#e8e8e9',
				bright: '#bcb4ff',
				DEFAULT: '#2d2b3d',
				dark: '#201e2b',
				darker: '#121118',
				border: '#494754',
			},
			cfgray: {
					DEFAULT: '#f6f6f6',
					dark: '#f1f1f1'
				},
		},
    },
  },

  variants: {
		display: ['responsive', 'group-hover', 'group-focus'],
	},
  plugins: [ twtype, twforms ]
}