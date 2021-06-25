const sx: StyleTypes = {
	wrapper: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: ['auto', '100vh'],
	},
	heading: {
		fontFamily: 'heading',
		fontSize: [3, 3, 3, 6, 6],
		mb: 4,
		lineHeight: 1.1,
	},
	post: {
		margin: '0 auto',
		maxWidth: 'xlg',
	},
	body: {
		fontSize: [1, 1, 1, 2],
		lineHeight: 1.5,
		fontFamily: `'Founders Grotesk'`,

		img: {
			width: '100%',
			py: 4,
		},
		p: {
			fontFamily: `'Founders Grotesk'`,
			lineHeight: 1.5,
		},
	},
	tag: {
		mb: 4,
	},

	button: {
		svg: { width: '1rem', height: '1rem', mr: 3 },
	},
};

export default sx;
