import React from 'react';
import { Box, Text } from 'theme-ui';
import Container from '../Container';

const Footer = () => {
	const date = new Date();

	return (
		<Box sx={{ py: 4, bg: 'hsl(0deg 0% 6%)' }}>
			<Container>
				<Text
					sx={{
						textTransform: 'uppercase',
						letterSpacing: '0.0750rem',
						fontSize: '.625rem',
					}}
				>
					Copyrighted {date.getFullYear()}, All Rights Reserved.{' '}
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
