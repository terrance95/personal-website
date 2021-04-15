const sx: StyleTypes = {
	wrapper: {
		width: '100%',
		pt: [4, 5, 5, 6],
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		svg: {
			cursor: 'pointer',
		},
	},
	title: {
		textTransform: 'uppercase',
		fontSize: 0,
		alignSelf: 'flex-start',
		letterSpacing: '.025rem',
		display: ['none', 'block'],
	},
};

export default sx;
