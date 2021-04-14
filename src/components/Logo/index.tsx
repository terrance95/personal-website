import * as React from 'react';
import { Box } from 'theme-ui';
import { Logo as LogoIcon } from '../Icons';

const Logo = () => {
	return (
		<Box
			sx={{
				width: ['4.3rem', '5.16rem', '6.192rem'],
				height: '100%',
			}}
		>
			<LogoIcon />
		</Box>
	);
};

export default Logo;
