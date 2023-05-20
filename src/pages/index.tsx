import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Carousel from '../components/Carousel';
import { graphql } from 'gatsby';
import { Box } from 'theme-ui';

export const query = graphql`
	query {
		allImageSharp(
			filter: { fixed: { originalName: { glob: "terrance-*-min.jpg" } } }
			sort: { fields: fluid___originalName }
		) {
			edges {
				node {
					fluid(
						maxWidth: 2000
						quality: 50
						webpQuality: 5
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
			<SEO
				title="Terrance Reynolds | Frontend Developer & Designer | Based In Tokyo"
				description="With over six years of design and development experience, my
					work focuses on creating well-crafted UI's for the web."
				lang="en"
			/>

			<Header />

			<Box>
				<Container>
					<Box sx={sx.grid}>
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
