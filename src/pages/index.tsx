import React from 'react';
import { Box, Button, Heading, Image, Text } from 'theme-ui';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Container from '../components/Container';
import { Minus } from 'react-feather';
const photo = require('../images/054_Terrance.jpg');

const sx: StyleTypes = {
	wrapper: {
		bg: '#1C1C1C',
		minHeight: '100vh',
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		margin: 0,
	},
	heading: { fontSize: 8, lineHeight: '1.0' },
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		alignItems: 'center',
		mt: 10,
	},
	label: {
		fontSize: '.625rem',
		textTransform: 'uppercase',
		color: '#BABAB3',
		ml: 4,
		display: 'block',
		letterSpacing: '.125rem',
	},
	row: {
		display: 'flex',
		alignItems: 'center',
	},
	link: {
		pl: 7,
		fontWeight: 500,
	},
};

const IndexPage = () => {
	return (
		<Box sx={sx.wrapper}>
			<SEO title="Home" />
			<Header />
			<Box>
				<Container>
					<Box sx={sx.grid}>
						<Box sx={{ justifySelf: 'normal' }}>
							<Box sx={{ ...sx.row, mb: 6 }}>
								<Minus />
								<Text sx={sx.label} as="span">
									Developer / Designer / Tokyo
								</Text>
							</Box>
							<Heading as="h1" sx={sx.heading}>
								A Difference
								<br /> of Perspective
							</Heading>
							<Text
								sx={{
									fontFamily: 'body',
									fontSize: 2,
									maxWidth: 600,
									mt: 4,
									lineHeight: '1.4',
								}}
							>
								A software developer with a background in design
								and understanding of business. My work balances
								these perspectives and shapes them into one
								product.
							</Text>
							<Box sx={{ ...sx.row, mt: 9 }}>
								<Button variant="primary">Contact Me</Button>
								<Text as="span" sx={sx.link}>
									View My Writing
								</Text>
							</Box>
						</Box>
						<Box>
							<Image src={photo} />
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default IndexPage;
