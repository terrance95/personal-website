const sx: StyleTypes = {
	wrapper: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: ['auto', '100vh'],
	},
	heading: {
		fontFamily: 'heading',
		fontSize: 4,
		mb: 4,
		lineHeight: 1.1,
	},
	post: {
		margin: '0 auto',
		maxWidth: 'lg',
	},
	body: {
		fontSize: [1, 1, 1, 2],
		lineHeight: 1.5,
		// h2: { letterSpacing: '0.0250rem' },
		p: {
			my: 5,
		},
	},
	tag: {
		mt: [4, 4, 6, 8],
		mb: 5,
		span: {
			fontSize: 0,
		},
	},

	button: {
		svg: { width: '1rem', height: '1rem', mr: 3 },
	},
};

export default sx;
