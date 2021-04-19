import React from 'react';
import { Box } from 'theme-ui';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Carousel from '../components/Carousel';

const IndexPage = () => {
	return (
		<Box sx={sx.wrapper}>
			<SEO title="Home - Terrance Reynolds" />
			<Header />
			<Box>
				<Container>
					<Box sx={sx.grid}>
						{/* @ts-expect-error */}
						<Intro sx={{ alignSelf: 'center' }} />
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
