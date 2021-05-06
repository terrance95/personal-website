exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
		query {
			allMdx {
				nodes {
					frontmatter {
						slug
						category
						excerpt
					}
					body
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panic('failed to create posts', result.errors);
	}

	const posts = result.data.allMdx.nodes;

	posts.forEach((post) => {
		if (post.frontmatter.category === 'Featured') {
			actions.createPage({
				path: `/posts/${post.frontmatter.slug}`,
				component: require.resolve(
					'./src/templates/Featured/index.tsx',
				),
				context: {
					slug: post.frontmatter.slug,
				},
			});
		} else {
			actions.createPage({
				path: `/posts/${post.frontmatter.slug}`,
				component: require.resolve(
					'./src/templates/Standard/index.tsx',
				),
				context: {
					slug: post.frontmatter.slug,
				},
			});
		}
	});
};
