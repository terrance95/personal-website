const sx: StyleTypes = {
	wrapper: {
		width: '100%',
		position: 'fixed',
		top: '0',
		bg: 'background',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: [0],
		minHeight: '100vh',
		height: '100%',
		overflow: 'hidden',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		pt: [3, 3, 4, 5, 5, 6],
		position: 'relative',
	},
	menu: {
		height: '100%',
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		textAlign: 'center',
		a: {
			color: 'muted',
			textDecoration: 'none',
			fontFamily: 'Founders Grotesk Condensed',
			fontSize: [4, 4, 5, 9],
			display: 'inline-block',
			textTransform: 'uppercase',
			pb: [5, 5, 6, 9],
		},
	},
	close: {
		cursor: 'pointer',
	},
	link: {
		position: 'relative',
		zIndex: 10,
	},
};

export default sx;
