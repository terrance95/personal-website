import { Link } from 'gatsby';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { Box } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';
import Container from '../Container';
import Footer from '../Footer';
import Logo from '../Logo';
import sx from './styles';

type navItemsType = {
	title: string;
	to: string;
};

const navItems: navItemsType[] = [
	{ title: 'Home', to: '/' },
	{ title: 'Writings', to: '#' },
	{ title: 'Side Hustles', to: '#' },
	{ title: 'Photos', to: '/photos' },
];

const Navigation: FC<{ setMenu: () => void }> = ({ setMenu }) => {
	return createPortal(
		<Box sx={sx.wrapper}>
			<Container>
				<Box sx={sx.flex}>
					<Box onClick={setMenu}>
						<Logo />
					</Box>
					<Box onClick={setMenu} sx={sx.close}>
						<X />
					</Box>
				</Box>
			</Container>
			<Box
				sx={{
					bg: 'primary',
					width: ['16rem', '18rem'],
					height: ['16rem', '18rem'],
					top: '50%',
					left: '50%',
					position: 'absolute',
					transform: 'translate(-50%, -50%)',
					opacity: [0.1, 0.05],
					filter: 'blur(4rem)',
					zIndex: 0,
				}}
			/>
			<Box sx={sx.menu}>
				<Box>
					{navItems.map((item: navItemsType) => {
						return (
							<Box sx={sx.link}>
								<Link
									to={item.to}
									activeStyle={{
										color: theme.colors.primary,
										fontWeight: 700,
									}}
								>
									{item.title}
								</Link>
							</Box>
						);
					})}
				</Box>
			</Box>
			<Footer />
		</Box>,
		document.body,
	);
};

export default Navigation;
