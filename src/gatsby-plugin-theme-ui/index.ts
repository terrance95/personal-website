type ThemeTypes = {
	styles: StyleTypes;
	[index: string]: any;
};

const theme: ThemeTypes = {
	colors: {
		text: '#BABAB3',
		background: '#fff',
	},
	space: [
		0,
		'.25rem', // 1
		'.5rem', // 2
		'.75rem', // 3
		'1rem', // 4
		'1.5rem', // 5 
		'2rem', // 6
		'2.5rem', // 7
		'3rem', // 8
		'4rem', // 9
		'6rem', // 10
		'10rem', // 11
	],
	fontSizes: [
		'0.833rem',
		'1rem',
		'1.2rem',
		'1.728rem',
		'2.074rem',
		'2.488rem',
		'2.986rem',
		'2.986rem',
		'3.583rem',
		'4.3rem',
		'5.16rem',
	],
	fonts: {
		heading: 'Founders Grotesk Condensed',
		body: `'Founders Grotesk'`,
	},
	text: {
		default: {
			fontFamily: 'body',
		},
	},
	fontWeights: {
		body: 400,
		heading: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	styles: {
		h1: {
			fontWeight: 700,
			textTransform: 'uppercase',
			fontSize: '5rem',
		},
	},
	buttons: {
		primary: {
			bg: "#262625",
			fontFamily: "body",
			fontWeight: 500,
			px: 7
		}
	}
};

export default theme;
