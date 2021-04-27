import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx {
				nodes {
					frontmatter {
						title
						slug
						category
						author
						date
					}
					excerpt
				}
			}
		}
	`);

	return data.allMdx.nodes.map((post: any) => {
		return {
			title: post.frontmatter.title,
			slug: post.frontmatter.slug,
			category: post.frontmatter.category,
			author: post.frontmatter.author,
			date: post.date,
			excerpt: post.excerpt,
		};
	});
};

export default usePosts;
