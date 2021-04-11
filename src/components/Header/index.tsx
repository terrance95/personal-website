import React, { FC } from 'react';
import { Menu } from 'react-feather';
import { Box, Text } from 'theme-ui';
import Container from '../Container';
import { Logo, MenuIcon } from '../Icons';
import sx from './styles';

type HeaderProps = {
	isMobile?: boolean;
};

const menuItems = {};

const Header: FC<HeaderProps> = ({ isMobile = true }) => {
	return (
		<Box as="header" sx={sx.wrapper}>
			{/* @ts-expect-error  */}
			<Container sx={sx.flex}>
				<Box
					sx={{
						width: ['4.3rem', '5.16rem', '7.43rem'],
						height: '100%',
					}}
				>
					<Logo />
				</Box>

				{isMobile ? (
					<Menu />
				) : (
					<Box sx={sx.flex}>
						<Text
							sx={{
								pl: 6,
								fontSize: 3,
								fontWeight: 'semibold',
								fontFamily: `'Founders Grotesk Condensed'`,
								color: 'primary',
							}}
						>
							Home
						</Text>
						<Text
							sx={{
								pl: 6,
								fontSize: 3,
								fontWeight: 'semibold',
								fontFamily: `'Founders Grotesk Condensed'`,
								color: 'hsl(60deg 11% 19%)',
							}}
						>
							Side Hustles
						</Text>
						<Text
							sx={{
								pl: 6,
								fontSize: 3,
								fontWeight: 'semibold',
								fontFamily: `'Founders Grotesk Condensed'`,
								color: 'hsl(60deg 11% 19%)',
							}}
						>
							Writings
						</Text>
					</Box>
				)}
			</Container>
		</Box>
	);
};

export { Header as default };
