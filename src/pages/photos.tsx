import React from 'react';
import { AspectImage, Box } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SlideShow from '../components/Slideshow';
import Tag from '../components/Tag';

type PhotoGalleryTypes = {
	landscapes: any[];
};
const photoGallery: PhotoGalleryTypes = {
	landscapes: [require('../images/kochi-web.jpg')],
};

const PhotoPage = () => {
	const title = 'Photos | Terrance Reynolds';
	return (
		<Box sx={sx.wrapper}>
			<Header />
			<SEO title={title} />
			<Container>
				<SlideShow />
			</Container>
			<Footer />
		</Box>
	);
};

const sx: StyleTypes = {
	wrapper: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: '100vh',
	},
};

export default PhotoPage;
