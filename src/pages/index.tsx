import React from 'react';
import { AspectImage, Box, Button, Heading, Image, Text } from 'theme-ui';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Container from '../components/Container';
import { Minus } from 'react-feather';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Carousel from '../components/Carousel';

const photo = require('../images/054_Terrance.jpg');

// const _ = () => {
// 	return (
// 		<Box sx={sx.wrapper}>
// 			<SEO title="Home" />
// 			<Header />
// 			<Box>
// 				<Container sx={{ height: '100%' }}>
// 					<Box sx={sx.grid}>
// 						<Box sx={{ justifySelf: 'normal' }}>
// 							<Box sx={{ ...sx.row, mb: 6 }}>
// 								<Minus />
// 								<Text sx={sx.label} as="span">
// 									Developer / Designer / Tokyo
// 								</Text>
// 							</Box>
// 							<Heading as="h1" sx={sx.heading}>
// 								A Difference
// 								<br /> of Perspective
// 							</Heading>
// 							<Text
// 								sx={{
// 									fontFamily: 'body',
// 									fontSize: 2,
// 									maxWidth: 600,
// 									mt: 4,
// 									lineHeight: '1.4',
// 								}}
// 							>
// 								A software developer with a background in design
// 								and understanding of business. My work balances
// 								these perspectives and shapes them into one
// 								product.
// 							</Text>
// 							<Box sx={{ ...sx.row, mt: 9 }}>
// 								<Button variant="primary">Contact Me</Button>
// 								<Text as="span" sx={sx.link}>
// 									View My Writing
// 								</Text>
// 							</Box>
// 						</Box>
// 						<Box sx={{}}>
// 							{/* <AspectImage ratio={2 / 3} src={photo} /> */}
// 							<Image
// 								sx={{
// 									width: '100%',
// 									height: '100%',
// 									objectFit: 'cover',
// 									objectPosition: 'center center',
// 								}}
// 								src={photo}
// 							/>
// 						</Box>
// 					</Box>
// 				</Container>
// 			</Box>
// 		</Box>
// 	);
// };

const IndexPage = () => {
	return (
		<Box sx={sx.wrapper}>
			<SEO title="Home" />
			<Header />
			<Box>
				<Container>
					<Box sx={sx.grid}>
						<Landing sx={{ alignSelf: 'center' }} />
						<Carousel
							sx={{
								alignSelf: [
									'flex-start',
									'flex-start',
									'center',
								],
							}}
						/>
					</Box>
				</Container>
			</Box>
			<Footer />
		</Box>
	);
};

const sx: StyleTypes = {
	wrapper: {
		bg: '#0B0B0B',
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: '100vh',
	},
	heading: { fontSize: 8, lineHeight: '1.0' },
	grid: {
		display: 'grid',
		gridTemplateColumns: ['none', '1fr', '1fr 1.10fr'],
		gridTemplateRows: ['1fr 1.5fr', 'none'],
		rowGap: [7, 7, 0],
		//alignItems: ['flex-start', 'flex-start', 'center'],
		height: '100%',
		mt: [6, 0],
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

export default IndexPage;
