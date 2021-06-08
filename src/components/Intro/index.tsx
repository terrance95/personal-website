import { Link } from 'gatsby';
import React, { FC } from 'react';
import { ChevronRight } from 'react-feather';
import { Box, Button, Heading, Text } from 'theme-ui';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Tag from '../Tag';
import _sx from './styles';

const Intro: FC<ExtendStyles> = ({ sx }) => {
	return (
		<Box sx={{ justifySelf: 'normal', ...sx }}>
			<Box sx={{ mb: [4, 4, 4, 4, 4, 4, 4, 4, 8], mt: [0, 5, 7, 8, 0] }}>
				<Tag>Developer / Designer / Tokyo</Tag>
			</Box>
			<Heading as="h1" sx={_sx.heading}>
				A Difference
				<br /> of Perspective
			</Heading>
			<Text sx={_sx.text}>
				A software developer with a background in design and
				understanding of business. My work balances these perspectives
				and shapes them into one product.
			</Text>

			<Box sx={{ ..._sx.row, mt: [6, 6, 6, 7, 7] }}>
				<AniLink
					to="/about"
					style={{ textDecoration: 'none' }}
					cover
					//top="entry"
					//entryOffset={80}
				>
					<Button variant="primary">Read About Me</Button>
				</AniLink>

				<Link to="/posts">
					{' '}
					<Button variant="secondary">View Writings</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default Intro;
