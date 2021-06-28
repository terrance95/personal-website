import { number } from 'prop-types';
import * as React from 'react';
import { Box, Text } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostPreview, { PostPreviewTypes } from '../components/PostPreview';
import SEO from '../components/SEO';
import usePosts from '../hooks/usePosts';
import FadeIn from 'react-fade-in';

const PostPage = () => {
	const posts = usePosts();

	return (
		<Box sx={sx.wrapper}>
			<Header title="Writings" />
			<SEO title="Writings | Terrance Reynolds" />

			<Container sx={{ pb: 6 }}>
				<FadeIn>
					<Box sx={{ display: 'grid', justifyContent: 'center' }}>
						{posts.map((post: PostPreviewTypes, key: number) => {
							return <PostPreview {...post} key={key} />;
						})}
					</Box>
				</FadeIn>
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
		minHeight: ['auto', '100vh'],
	},
};

export default PostPage;
