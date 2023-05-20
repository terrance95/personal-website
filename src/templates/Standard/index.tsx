import React from 'react';
import { graphql, Link } from 'gatsby';
import { Box, Button, Text } from 'theme-ui';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Tag from '../../components/Tag';
import SEO from '../../components/SEO';
import sx from './styles';
import FadeIn from 'react-fade-in';
import { MDXProvider } from '@mdx-js/react';

export const query = graphql`
	query ($slug: String) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				category
				author
				date
			}
			body
			internal {
				contentFilePath
			}
		}
	}
`;

const StandardTemplate = ({ data: { mdx } }: any) => {
	return (
		<Box sx={sx.wrapper}>
			<Header title="Writings" to="/posts" />
			<SEO title="Writings | Terrance Reynolds" />
			<Container sx={{ pt: 6, pb: 9 }}>
				<Box sx={sx.post}>
					<FadeIn delay={200}>
						{/* @ts-ignore */}
						<Tag sx={sx.tag}>{mdx.frontmatter.category}</Tag>
						<Text as="h1" sx={sx.heading}>
							{mdx.frontmatter.title}
						</Text>

						<Box sx={sx.body}>{mdx.body}</Box>
						<Link to="/posts" style={{ textDecoration: 'none' }}>
							<Button
								variant="primary"
								sx={{
									mt: 5,
								}}
							>
								Back To Writing
							</Button>
						</Link>
					</FadeIn>
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

export default StandardTemplate;
