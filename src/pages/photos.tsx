import React from 'react';
import { AspectImage, Box } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Tag from '../components/Tag';

type PhotoGalleryTypes = {
	landscapes: any[];
};
const photoGallery: PhotoGalleryTypes = {
	landscapes: [require('../images/kochi-web.jpg')],
};

const PhotoPage = () => {
	const title = 'Photos';
	return (
		<Box sx={sx.wrapper}>
			<SEO title={title} />
			<Header title={title} />
			<Container fullWidth={false}>
				<Box sx={sx.section}>
					<Box sx={{ mb: 4 }}>
						<Tag>Landscapes</Tag>
					</Box>
					{photoGallery.landscapes.map((photo: any) => {
						return <AspectImage src={photo} ratio={9 / 16} />;
					})}
				</Box>
			</Container>

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
	section: {},
};

export default PhotoPage;
