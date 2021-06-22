module.exports = {
	siteMetadata: {
		title: `Terrance Reynolds Website`,
		description: `Personal Website`,
		author: `Terrance Reynolds`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-theme-ui',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve(
						`${__dirname}/src/components/Layout/index.tsx`,
					),
				},
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `post`,
				path: `src/posts`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-transition-link`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Terrance Reynolds`,
				short_name: `Terrance Reynolds`,
				start_url: `/`,
				background_color: `#0B0B0B`,
				theme_color: `#0B0B0B`,
				display: `minimal-ui`,
				icons: [
					{
						src: '/icon-512.png',
						size: `512x512`,
						type: 'image/png',
					},
					{
						src: '/icon-192.png',
						size: `192x192`,
						type: 'image/png',
					},
				], // This path is relative to the root of the site.
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
