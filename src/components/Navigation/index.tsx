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
import { motion } from 'framer-motion';

const Navigation: FC<{ setMenu: () => void }> = ({ setMenu }) => {
	useEffect(() => {
		// DISABLED SCROLL
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'initial';
		};
	}, []);

	return createPortal(
		<motion.div
			animate={{
				height: '100%',
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				minHeight: '100vh',
				zIndex: 9999,
				overflowY: 'hidden',
				margin: 0,
			}}
			transition={{ duration: 0.2, ease: 'easeInOut', bounce: true }}
		>
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
						width: ['12rem', '13rem'],
						height: ['12rem', '13rem'],
						top: '50%',
						left: '50%',
						position: 'absolute',
						transform: 'translate(-50%, -50%)',
						opacity: [0.1, 0.08],
						filter: 'blur(4rem)',
						zIndex: 0,
						borderRadius: '50%',
					}}
				/>{' '}
				<Box sx={sx.menu}>
					<Box>
						{navItems.map((item: navItemsType) => {
							if (item.title === 'Contact') {
								return (
									<a href="mailto:hello@terrancereynolds.com">
										<Box sx={sx.link}>{item.title}</Box>
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
					</Box>
				</Box>
				<Footer />
			</Box>
		</motion.div>,
		document.body,
	);
};

export default Navigation;
