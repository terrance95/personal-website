import React, { FC, useState } from 'react';
import { Menu, X } from 'react-feather';
import { Box, Text } from 'theme-ui';
import Container from '../Container';
import Navigation from '../Navigation';
import { MenuIcon } from '../Icons';
import sx from './styles';
import Logo from '../Logo';

type HeaderProps = {
	isOpen?: boolean;
};

const menuItems = {};

const Header: FC<HeaderProps> = ({ isOpen = false }) => {
	const [menu, setMenu] = useState(false);

	return (
		<Box as="header" sx={sx.wrapper}>
			{/* @ts-expect-error  */}
			<Container sx={sx.flex}>
				<Logo />
				<Box sx={sx.button} onClick={() => setMenu(!menu)}>
					{!isOpen ? <Menu /> : <X />}
				</Box>
				{menu && <Navigation setMenu={() => setMenu(!menu)} />}
			</Container>
		</Box>
	);
};

export { Header as default };
