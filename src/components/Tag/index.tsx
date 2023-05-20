import React, { FC, ReactNode, VFC } from 'react';
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

const Tag: FC<ExtendStyles & { children: ReactNode }> = ({ children, sx }) => {
	return (
		<Box sx={{ ...sx, ..._sx.flex }}>
			<svg
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M5 12h14" />
			</svg>

			<Text sx={_sx.label} as="span">
				{children}
			</Text>
		</Box>
	);
};

export default Tag;
