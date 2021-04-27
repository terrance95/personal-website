import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Box, Button, Text } from 'theme-ui';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Tag from '../components/Tag';
import SEO from '../components/SEO';
import { ChevronLeft } from 'react-feather';

export const query = graphql`
	query($slug: String) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				category
				author
				date
			}
			body
		}
	}
`;

const PostTemplate = ({ data: { mdx } }: any) => {
	useEffect(() => {
		console.log(mdx);
	}, [mdx]);
	return (
		<Box sx={sx.wrapper}>
			<Header title="Writing" to="/posts" />
			<SEO title="Writings | Terrance Reynolds" />
			<Container sx={{ py: 8 }}>
				<Box sx={sx.post}>
					<Box>
						<Link to="/posts" style={{ textDecoration: 'none' }}>
							<Button variant="back" sx={sx.button}>
								<ChevronLeft />
								<Text>Back To Writings</Text>
							</Button>
						</Link>
					</Box>
					{/* @ts-ignore */}
					<Tag sx={sx.tag}>{mdx.frontmatter.category}</Tag>
					<Text as="h1" sx={sx.heading}>
						{mdx.frontmatter.title}
					</Text>
					<Box
						sx={{
							display: 'flex',
							borderBottom: '1px solid #191917',
							pb: 4,
							mb: 4,
							'*': {
								mr: 4,
							},
						}}
					>
						<Text> By: {mdx.frontmatter.author}</Text>
						<Box>|</Box>
						<Text> {mdx.frontmatter.date}</Text>
					</Box>

					<Box sx={sx.body}>
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</Box>
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
		minHeight: ['auto', '100vh'],
	},
	heading: {
		fontFamily: 'heading',
		fontSize: 4,
		mb: 4,
		lineHeight: 1.1,
	},
	post: {
		margin: '0 auto',
		maxWidth: 'lg',
	},
	body: {
		fontSize: [1, 1, 1, 2],
		lineHeight: 1.5,
		p: {
			my: 5,
		},
	},
	tag: {
		mt: [4, 4, 6, 8],
		mb: 5,
		span: {
			fontSize: 0,
		},
	},

	button: {
		svg: { width: '1rem', height: '1rem', mr: 3 },
	},
};

export default PostTemplate;
