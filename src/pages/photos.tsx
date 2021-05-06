import React from 'react';
import { AspectImage, Box, Image } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SlideShow from '../components/Slideshow';
import Tag from '../components/Tag';

type PhotoGalleryTypes = {
	landscapes: any[];
	me: any[];
};
const photoGallery: PhotoGalleryTypes = {
	landscapes: [require('../images/kochi-web.jpg')],
	me: [
		require('../images/terrance-1.jpg'),
		require('../images/terrance-2.jpg'),
		require('../images/terrance-3.jpg'),
		require('../images/terrance-1.jpg'),
	],
};

const PhotoPage = () => {
	const title = 'Photos | Terrance Reynolds';
	return (
		<Box sx={sx.wrapper}>
			<Header title="Photos" />
			<SEO title={title} />
			<Container sx={{ maxWidth: ['xxlg', 'mg'], py: 8 }}>
				{/* <SlideShow /> */}

				<Tag sx={{ mb: 5 }}>Photos of Me</Tag>
				<Box sx={sx.photoGrid}>
					{photoGallery.me.map((photo) => {
						return <Image src={photo} />;
					})}
				</Box>
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

	photoGrid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		rowGap: 5,
		columnGap: 5,
	},
};

export default PhotoPage;
