import React, { FC, useState } from 'react';
import { Menu } from 'react-feather';
import { Box, Text } from 'theme-ui';
import Container from '../Container';
import Navigation from '../Navigation';
import sx from './styles';
import Logo from '../Logo';
import { Link } from 'gatsby';
import '../index.css';
import navItems from '../Navigation/navItem';

type HeaderProps = {
	title?: string;
	to?: string;
};

const Header: FC<HeaderProps> = ({ title, to }) => {
	const [menu, setMenu] = useState(false);

	return (
		<Box as="header" sx={sx.wrapper}>
			<Container sx={sx.flex}>
				<Link to="/">
					<Logo />
				</Link>
				{title && (
					<Box sx={sx.title}>
						<Link to={to ? `${to.toLowerCase()}` : '/'}>
							<Text>{title}</Text>
						</Link>
					</Box>
				)}
				<Box sx={sx.button} onClick={() => setMenu(!menu)}>
					<Menu />
				</Box>
				{/* <Box>
					{navItems.map((item) => {
						return <Box>{item.title}</Box>;
					})}
				</Box> */}
				{menu && <Navigation setMenu={() => setMenu(!menu)} />}
			</Container>
		</Box>
	);
};

export { Header as default };
