const sx: StyleTypes = {
	wrapper: {
		bg: '#1C1C1C',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: 0,
		minHeight: '100vh',
	},

	heading: {
		fontSize: [6, 7, 7, 9],
		lineHeight: '1.0',
		letterSpacing: ['auto', '.1rem'],
	},
	text: {
		fontFamily: 'body',
		fontSize: [1, 2, 2, 3],
		mt: 4,
		lineHeight: '1.4',
		maxWidth: ['md', 'sm', 'md', 'xlg'],
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '3fr 2fr',
		alignItems: 'center',
		height: '100%',
	},
	label: {
		fontSize: ['.625rem', '.625rem', '.625rem', 0],
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: 4,
		display: 'block',
		letterSpacing: ['.075rem', '.1rem'],
	},
	row: {
		display: 'flex',
		alignItems: 'center',
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		a: {
			pl: 7,
			fontWeight: 500,
			fontFamily: 'body',
			color: '#f7f7df',
			textDecoration: 'none',
			display: 'block',
			pr: 2,
		},
		svg: {
			color: '#f7f7df',
			width: '1rem',
		},
	},
};

export default sx;
