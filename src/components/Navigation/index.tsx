import { Link } from 'gatsby';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { Box } from 'theme-ui';
import Container from '../Container';
import Header from '../Header';
import Logo from '../Logo';

const sx: StyleTypes = {
	wrapper: {
		width: '100%',
		position: 'absolute',
		top: '0',
		bg: 'background',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: [0],
		minHeight: '100vh',
	},
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		top: [4, 5, 5, 6],
		position: 'relative',
	},
	menu: {
		height: '100%',
		width: '100%',
		display: 'grid',
		placeItems: 'center',
		textAlign: 'center',
		a: {
			color: 'muted',
			textDecoration: 'none',
			fontFamily: 'Founders Grotesk Condensed',
			fontSize: 9,
			display: 'inline-block',
			textTransform: 'uppercase',
			pb: 9,
		},
	},
	close: {
		cursor: 'pointer',
	},
};

type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'Writings', to: '/' },
	{ title: 'Side Hustles', to: '/' },
	{ title: 'Photos', to: '/' },
];

const Navigation: FC<{ setMenu: () => void }> = ({ setMenu }) => {
	return createPortal(
		<Box sx={sx.wrapper}>
			<Container>
				<Box sx={sx.flex}>
					<Logo />
					<Box onClick={setMenu} sx={sx.close}>
						<X />
					</Box>
				</Box>
			</Container>
			<Box sx={sx.menu}>
				<Box>
					{navItems.map((item: navItemsType) => {
						return (
							<Box>
								<Link to={item.to}>{item.title}</Link>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>,
		document.body,
	);
};

export default Navigation;
