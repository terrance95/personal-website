import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Box, Button, Text } from 'theme-ui';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Tag from '../../components/Tag';
import SEO from '../../components/SEO';
import { ChevronLeft } from 'react-feather';
import sx from './styles';

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

const StandardTemplate = ({ data: { mdx } }: any) => {
	useEffect(() => {
		console.log(mdx);
	}, [mdx]);
	return (
		<Box sx={sx.wrapper}>
			<Header title="Writings" to="/posts" />
			<SEO title="Writings | Terrance Reynolds" />
			<Container sx={{ pt: 8, pb: 9 }}>
				<Box sx={sx.post}>
					<Box>
						<Link to="/posts" style={{ textDecoration: 'none' }}>
							<Button variant="back" sx={sx.button}>
								<ChevronLeft />
								<Text as="p">Back To Writings</Text>
							</Button>
						</Link>
					</Box>
					{/* @ts-ignore */}
					<Tag sx={sx.tag}>{mdx.frontmatter.category}</Tag>
					<Text as="h1" sx={sx.heading}>
						{mdx.frontmatter.title}
					</Text>

					<Box sx={sx.body}>
						<MDXRenderer>{mdx.body}</MDXRenderer>
					</Box>
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

export default StandardTemplate;
