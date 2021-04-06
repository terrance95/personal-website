import React from 'react';
import { Box } from 'theme-ui';
import Container from '../Container';
import { Logo, MenuIcon } from '../Icons';
import sx from './styles';

const Header = () => {
	return (
		<Box as="header" sx={sx.wrapper}>
			{/* @ts-expect-error  */}
			<Container sx={sx.flex}>
				<Box sx={{ width: '4rem', height: '100%' }}>
					<Logo />
				</Box>

				<MenuIcon />
			</Container>
		</Box>
	);
};

export { Header as default };
