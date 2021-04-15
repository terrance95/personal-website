import React, { FC } from 'react';
import { Minus } from 'react-feather';
import { Box, Text } from 'theme-ui';

const sx: StyleTypes = {
	flex: { display: 'flex', alignItems: 'center' },

	label: {
		fontSize: ['.625rem', '.625rem', '.625rem', '.750rem'],
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: 4,
		display: 'block',
		letterSpacing: ['.075rem', '.1rem'],
	},
};

const Tag: FC = ({ children }) => {
	return (
		<Box sx={sx.flex}>
			<Minus />
			<Text sx={sx.label} as="span">
				{children}
			</Text>
		</Box>
	);
};

export default Tag;
