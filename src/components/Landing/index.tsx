import { Link } from 'gatsby';
import React, { FC } from 'react';
import { ChevronRight, Minus } from 'react-feather';
import { Box, Button, Heading, Text } from 'theme-ui';
import _sx from './styles';

const Landing: FC<ExtendStyles> = ({ sx }) => {
	return (
		<Box sx={{ justifySelf: 'normal', ...sx }}>
			<Box sx={{ ..._sx.row, mb: 6 }}>
				<Minus />
				<Text sx={_sx.label} as="span">
					Developer / Designer / Tokyo
				</Text>
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

			<Box sx={{ ..._sx.row, mt: 9 }}>
				<Button variant="primary">Contact Me</Button>
				<Box sx={_sx.link}>
					<Link to="/">View My Writing</Link>
					<ChevronRight />
				</Box>
			</Box>
		</Box>
	);
};

export default Landing;
