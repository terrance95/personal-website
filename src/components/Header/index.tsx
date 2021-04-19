import React, { FC, useState } from 'react';
import { Menu } from 'react-feather';
import { Box, Text } from 'theme-ui';
import Container from '../Container';
import Navigation from '../Navigation';
import sx from './styles';
import Logo from '../Logo';
import { Link } from 'gatsby';
import '../index.css';

type HeaderProps = {
	title?: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
	const [menu, setMenu] = useState(false);

	return (
		<Box as="header" sx={sx.wrapper}>
			<Container sx={sx.flex}>
				<Link to="/">
					<Logo />
				</Link>
				{title && <Text sx={sx.title}>{title}</Text>}
				<Box sx={sx.button} onClick={() => setMenu(!menu)}>
					<Menu />
				</Box>
				{menu && <Navigation setMenu={() => setMenu(!menu)} />}
			</Container>
		</Box>
	);
};

export { Header as default };
