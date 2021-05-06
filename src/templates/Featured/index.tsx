import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { AspectImage, Box, Button, Text } from 'theme-ui';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Tag from '../../components/Tag';
import SEO from '../../components/SEO';
import sx from './styles';
import Image from 'gatsby-image';

const FeaturedTemplate = ({ data: { mdx } }: any) => {
	const featuredImage = mdx.frontmatter.featuredImage.childImageSharp.fluid;

	useEffect(() => {
		console.log(featuredImage);
	}, [mdx]);
	return (
		<Box sx={sx.wrapper}>
			<Header title="Writing" to="/posts" />
			<SEO title="Writings | Terrance Reynolds" />
			<Container sx={{ pt: 10 }}>
				{/**
				 * POST HEADER
				 */}
				<Box sx={sx.postHeader}>
					<Tag>Personal Life</Tag>
					<Text as="h1" sx={sx.heading}>
						{mdx.frontmatter.title}
					</Text>
					<Text as="p" sx={sx.excerpt}>
						{mdx.frontmatter.excerpt}
					</Text>
				</Box>
				<Image fluid={featuredImage} />
				{/**
				 * MDX CONTENT
				 */}
				{/* <Box sx={sx.body}>
					<MDXRenderer>{mdx.body}</MDXRenderer>
				</Box> */}
			</Container>
			<Footer />
		</Box>
	);
};

export const query = graphql`
	query($slug: String) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				category
				author
				date
				excerpt
				featuredImage {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			body
		}
	}
`;

export default FeaturedTemplate;
