type ThemeTypes = {
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
		spacing01: '22.186rem',
		spacing02: '24rem',
		spacing03: '26.623rem',
		spacing04: '31.948rem',
		spacing05: '33.000rem',
		spacing06: '38.338rem',
		spacing07: '44.005rem',
		spacing08: '55.206rem',
		spacing09: '66.247rem',
		spacing10: '79.497rem',
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

	buttons: {
		primary: {
			bg: 'primary',
			fontFamily: 'body',
			fontSize: ['.75rem', '.75rem', 0, 0, 0, 0, 0, 0, 1],
			px: [3, 3, 3, 3, 5],
			py: [1, 1, 2, 2, 2, 2, 2, 2, 3],
			width: '100%',
			border: '1px solid hsl(0deg 0% 100% / 5%)',
			transition: 'all 200ms ease-in-out',
			cursor: 'pointer',
			fontWeight: 500,
			borderRadius: '2rem',
			color: 'background',
			letterSpacing: '0.025rem',
			textTransform: 'uppercase',
			'&:hover': {
				bg: '#bcbcaa',
			},
		},
		secondary: {
			bg: '#161616',
			fontFamily: 'body',
			fontSize: ['.75rem', '.75rem', 0, 0, 0, 0, 0, 0, 1],
			px: [3, 3, 3, 3, 5],
			py: [1, 1, 2, 2, 2, 2, 2, 2, 3],
			width: '100%',
			border: '1px solid hsl(0deg 0% 100% / 5%)',
			color: '#f7f7df',
			cursor: 'pointer',
			fontWeight: 500,
			letterSpacing: '0.025rem',
			transition: 'all 200ms ease-in-out',
			borderRadius: '2rem',
			textTransform: 'uppercase',
			'&:hover': {
				bg: '#111',
				color: '#bcbcaa',
			},
		},
		ghost: {
			bg: 'rgb(247 247 223 / 0%)',
			fontFamily: 'body',
			fontSize: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			fontWeight: 500,
			px: [3, 3, 3, 3, 7],
			py: [1, 1, 2, 2, 2, 2, 2, 2, 3],
			width: '100%',
			border: 'none',
			color: 'primary',
			cursor: 'pointer',
			textTransform: 'uppercase',
			letterSpacing: '0.025rem',
			transition: 'all 200ms ease-in-out',
			borderRadius: '2rem',

			'&:hover': {
				bg: '#111',
				//color: '#bcbcaa',
			},
		},
		inline: {
			bg: 'rgb(247 247 223 / 0%)',
			fontFamily: 'body',
			fontSize: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			fontWeight: 500,
			px: 0,
			py: 4,
			width: '100%',
			border: 'none',
			color: 'primary',
			cursor: 'pointer',
			textTransform: 'uppercase',
			letterSpacing: '0.025rem',
			transition: 'all 200ms ease-in-out',
			textAlign: 'left',
			'&:hover': {
				//color: '#bcbcaa',
			},
		},
		reset: {
			background: 'none',
			p: 0,
			m: 0,
		},
		back: {
			bg: '#161616',
			fontFamily: 'body',
			fontSize: 0,
			fontWeight: 500,
			color: 'primary',
			px: [3, 3, 3, 3, 5],
			py: [1, 1, 2, 2, 2, 2, 2, 2, 3],
			border: '1px solid hsl(0deg 0% 100% / 5%)',
			display: 'flex',
			alignItems: 'center',
			textTransform: 'uppercase',
			letterSpacing: '.0250rem',
			borderRadius: '.5rem',
			cursor: 'pointer',
		},
	},
	breakpoints: [
		'20em',
		'23em',
		'48em',
		'64rem',
		'75em',
		'90em',
		'112em',
		'150em',
		'175em',
	],
};

export default theme;
