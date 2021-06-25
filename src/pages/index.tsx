import React, { useEffect } from 'react';
import { Box } from 'theme-ui';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Carousel from '../components/Carousel';
import { graphql } from 'gatsby';

export const query = graphql`
	query {
		allImageSharp(
			filter: { sizes: { originalName: { glob: "terrance-*-min.jpg" } } }
			sort: { fields: fluid___originalName }
		) {
			edges {
				node {
					fluid(
						maxWidth: 2000
						quality: 100
						webpQuality: 10
						traceSVG: { alphaMax: 1.5 }
					) {
						...GatsbyImageSharpFluid
						...GatsbyImageSharpFluidLimitPresentationSize
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	}
`;

const IndexPage = ({ data }) => {
	return (
		<Box sx={sx.wrapper}>
			<SEO title="Home | Terrance Reynolds" />

			<Header />

			<Box>
				<Container>
					<Box sx={sx.grid}>
						{/* @ts-expect-error */}

						<Intro sx={{ alignSelf: 'center' }} />

						<Carousel
							data={data}
							sx={{
								alignSelf: [
									'flex-start',
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
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: ['auto', '100vh'],
		bg: 'background',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: ['none', '1fr', '1fr', '1fr', '1fr 1.1fr'],
		gridTemplateRows: ['1fr 1fr', 'none'],
		rowGap: [4, 4, 7, 7, 0],
		columnGap: [6],
		//alignItems: ['flex-start', 'flex-start', 'center'],
		height: ['auto', , '100%'],
		mt: [6, 0],
	},
};

export default IndexPage;
