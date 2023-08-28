import React, { FC } from 'react';
import { Box, Button, Heading, Text } from 'theme-ui';
import FadeIn from 'react-fade-in';
//@ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Tag from '../Tag';
import _sx from './styles';

const Intro: FC<ExtendStyles> = ({ sx }) => {
	return (
		<Box sx={{ justifySelf: 'normal', ...sx }}>
			<FadeIn delay={200}>
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

				<Box
					sx={{ ..._sx.row, mt: [5, 5, 6, 7, 7] }}
					className="homepage-buttons"
				>
					<AniLink
						fade
						to="/about"
						style={{ textDecoration: 'none' }}
					>
						<Button variant="primary">Read About Me</Button>
					</AniLink>
					<AniLink
						fade
						to="/advice"
						style={{ textDecoration: 'none' }}
					>
						<Button variant="secondary">Get Advice</Button>
					</AniLink>
				</Box>
			</FadeIn>
		</Box>
	);
};

export default Intro;
