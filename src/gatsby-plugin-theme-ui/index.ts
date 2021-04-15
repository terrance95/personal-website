type ThemeTypes = {
	styles: StyleTypes;
	[index: string]: any;
};

const theme: ThemeTypes = {
	colors: {
		text: '#BABAB3',
		background: '#0B0B0B',
		primary: '#f7f7df',
		muted: '#6D6D63',
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
		'3.583rem',
		'4.3rem',
		'4.8rem',
		'6.192rem',
	],
	sizes: {
		sm: '26.623rem',
		md: '31.948rem',
		mdx: '33.000rem',
		lg: '38.338rem',
		xlg: '44.005rem',
		xxlg: '55.206rem',
		mg: '66.247rem',
		xmg: '79.497rem',
	},
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
		semibold: 500,
		heading: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	styles: {
		root: {
			fontFamily: 'body',
		},

		h1: {
			fontWeight: 700,
			textTransform: 'uppercase',
			fontSize: '5rem',
		},
		a: {
			fontFamily: 'body',
			color: 'text',
			textDecoration: 'none',
		},
	},
	buttons: {
		primary: {
			bg: '#161616',
			fontFamily: 'body',
			fontWeight: 500,
			px: 7,
			border: '1px solid hsl(0deg 0% 100% / 5%)',
			color: '#f7f7df',
		},
	},
	breakpoints: ['48em', '75em', '112em', '150em', '175em'],
};

export default theme;
