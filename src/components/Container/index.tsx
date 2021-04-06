import React, { FC, ReactNode } from 'react';
import { Box } from 'theme-ui';

const _sx: StyleTypes = {
	wrapper: {
		maxWidth: '100rem',
		margin: '0 auto',
		width: "90vw"
	},
};

type ContainerProps = { children: ReactNode; sx?: StyleTypes };

const Container: FC<ContainerProps> = ({ children, sx }) => {
	return <Box sx={{ ..._sx.wrapper, ...sx }}>{children}</Box>;
};

export default Container;
