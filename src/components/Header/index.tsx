import React, { FC, useState } from 'react';
import { Box, Text } from 'theme-ui';
import Container from '../Container';
import Navigation from '../Navigation';
import sx from './styles';
import Logo from '../Logo';
import '../index.css';
//@ts-expect-error
import AniLink from 'gatsby-plugin-transition-link/AniLink';

type HeaderProps = {
	title?: string;
	to?: string;
};

const Header: FC<HeaderProps> = ({ title, to }) => {
	const [menu, setMenu] = useState(false);

	return (
		<Box as="header" sx={sx.wrapper}>
			<Container sx={sx.flex}>
				<AniLink
					to="/"
					style={{ textDecoration: 'none' }}
					fade
					aria-label="Logo"
				>
					<Logo />
				</AniLink>
				{title && (
					<Box sx={sx.title}>
						<AniLink to={to ? `${to.toLowerCase()}` : '/'} fade>
							<Text sx={{ fontSize: '.750rem' }}>{title}</Text>
						</AniLink>
					</Box>
				)}

				<Box sx={sx.button} onClick={() => setMenu(!menu)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						data-prefix="fas"
						data-icon="bars"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
						/>
					</svg>
				</Box>

				{menu && <Navigation setMenu={() => setMenu(!menu)} />}
			</Container>
		</Box>
	);
};

export { Header as default };
