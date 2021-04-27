const sx: StyleTypes = {
	wrapper: {
		bg: '#1C1C1C',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: 0,
		minHeight: '100vh',
	},

	heading: {
		fontSize: [4, 4, 5, 6, 6, 6, 7],
		lineHeight: '1.0',
		//letterSpacing: ['auto', '.1rem'],
	},
	text: {
		fontFamily: 'body',
		fontSize: ['.875rem', '.875rem', '.875rem', 1, 1, 1, 2],
		mt: 4,
		lineHeight: '1.4',
		maxWidth: ['md', 'tny', 'tny', 'sm', 'sm', 'xsm', 'sm', 'md', 'mdx'],
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: '2fr 2fr',
		alignItems: 'center',
		height: '100%',
	},
	label: {
		fontSize: ['.625rem', '.625rem', '.625rem', '.750rem'],
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: 4,
		display: 'block',
		letterSpacing: ['.075rem', '.1rem'],
	},
	row: {
		display: 'grid',
		maxWidth: ['sm', 'xsm'],
		gridTemplateColumns: ['1.25fr 1fr', '1.25fr 1fr'],
		alignItems: 'center',
	},
	link: {
		display: 'flex',
		alignItems: 'center',
		a: {
			pl: [0, 0, 5, 5, 7],
			fontWeight: 500,
			fontFamily: 'body',
			color: '#f7f7df',
			textDecoration: 'none',
			display: 'block',
			pr: [0, 0, 0, 0, 1],
			m: ['0 auto', '0 auto', '0'],
			fontSize: [0, 0, 1],
		},
	},
};

export default sx;
