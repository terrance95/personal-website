import { Link } from 'gatsby';
import React, { FC } from 'react';
import { ChevronRight } from 'react-feather';
import { Box, Button, Heading, Text } from 'theme-ui';
import FadeIn from 'react-fade-in';

import Tag from '../Tag';
import _sx from './styles';

const Intro: FC<ExtendStyles> = ({ sx }) => {
	return (
		<Box sx={{ justifySelf: 'normal', ...sx }}>
			<FadeIn delay={100}>
				<Box
					sx={{
						mb: [4, 4, 4, 4, 4, 4, 4, 4, 8],
						mt: [0, 5, 7, 8, 0],
					}}
				>
					<Tag>Developer / Designer / Tokyo</Tag>
				</Box>
				<Heading as="h1" sx={_sx.heading}>
					A Difference
					<br /> of Perspective
				</Heading>
				<Text sx={_sx.text} as="p">
					With over six years of design and development experience, my
					work focuses on creating well-crafted UI's for the web.
				</Text>

				<Box sx={{ ..._sx.row, mt: [6, 6, 6, 7, 7] }}>
					<Link to="/about" style={{ textDecoration: 'none' }}>
						<Button variant="primary">Read About Me</Button>
					</Link>

					<Link to="/posts">
						<Button variant="secondary">My Writings</Button>
					</Link>
				</Box>
			</FadeIn>
		</Box>
	);
};

export default Intro;
