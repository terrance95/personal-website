/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import '../index.css';
import Footer from '../Footer';
import { Box } from 'theme-ui';

const Layout: FC = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<Box sx={sx.wrapper}>
			<Header />

			<Box as="main">{children}</Box>
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

export default Layout;
