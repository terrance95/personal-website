import React, { FC } from 'react';
import { Minus } from 'react-feather';
import { Box, Text } from 'theme-ui';

const _sx: StyleTypes = {
	flex: {
		display: 'flex',
		alignItems: 'center',
		svg: {
			display: ['none', 'none', 'initial'],
		},
	},

	label: {
		fontSize: [
			'.579rem',
			'.579rem',
			'.625rem',
			'.625rem',
			'.625rem',
			'.625rem',
			'.625rem',
			'.750rem',
			'.875rem',
		],
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: [0, 0, 2, 2, 4],
		display: 'block',
		letterSpacing: ['.075rem', '.1rem'],
	},
};

const Tag: FC<ExtendStyles> = ({ children, sx }) => {
	return (
		<Box sx={{ ...sx, ..._sx.flex }}>
			<Minus strokeWidth="1" />

			<Text sx={_sx.label} as="span">
				{children}
			</Text>
		</Box>
	);
};

export default Tag;
