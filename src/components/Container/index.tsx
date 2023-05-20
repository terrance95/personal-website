import React, { FC, ReactNode } from 'react';
import { Box, SxStyleProp } from 'theme-ui';

const _sx: StyleTypes = {
	wrapper: {
		margin: '0 auto',
		height: '100%',
	},
};

type ContainerProps = {
	children: ReactNode;
	sx?: SxStyleProp;
	fullWidth?: boolean;
};

const Container: FC<ContainerProps> = ({ children, sx, fullWidth = true }) => {
	return (
		<Box
			sx={{
				..._sx.wrapper,
				width: fullWidth ? '90vw' : 'spacing08',
				...sx,
			}}
		>
			{children}
		</Box>
	);
};

export default Container;
