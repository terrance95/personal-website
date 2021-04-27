const sx: StyleTypes = {
	wrapper: {
		width: '100%',
		pt: [3, 3, 4, 5, 5, 6],
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	button: {
		svg: {
			cursor: 'pointer',
		},
	},
	title: {
		textTransform: 'uppercase',
		fontSize: 0,
		letterSpacing: '.025rem',
		display: ['none', 'none', 'none', 'none', 'block'],

		a: {
			color: 'primary',
			textDecoration: 'none',
		},
	},
};

export default sx;
