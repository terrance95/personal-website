import { Link } from 'gatsby';
import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'react-feather';
import { Box } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui';
import Container from '../Container';
import Footer from '../Footer';
import Logo from '../Logo';
import navItems, { navItemsType } from './navItem';
import sx from './styles';
import FadeIn from 'react-fade-in';

const Navigation: FC<{ setMenu: () => void }> = ({ setMenu }) => {
	useEffect(() => {
		// DISABLED SCROLL
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'initial';
		};
	}, []);

	return createPortal(
		<Box sx={sx.wrapper}>
			<Box sx={sx.content}>
				<Container>
					<Box sx={sx.flex}>
						<Box
							onClick={setMenu}
							sx={{ ':hover': { cursor: 'pointer' } }}
						>
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
						width: ['12rem', '13rem'],
						height: ['12rem', '13rem'],
						top: '50%',
						left: '50%',
						position: 'absolute',
						transform: 'translate(-50%, -50%)',
						opacity: '.08',
						filter: 'blur(4rem)',
						zIndex: 0,
						borderRadius: '50%',
					}}
				/>{' '}
				<Box sx={sx.menu}>
					<FadeIn delay={100}>
						{navItems.map((item: navItemsType, key: number) => {
							if (item.title === 'Contact') {
								return (
									<a
										key={key}
										href="mailto:terrancereynolds2@gmail.com"
									>
										<Box sx={sx.link}>Contact</Box>
									</a>
								);
							}
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
					</FadeIn>
				</Box>
				<Footer />
			</Box>
		</Box>,
		document.body,
	);
};

export default Navigation;
