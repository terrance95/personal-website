import React from 'react';
import { Box, Text, Button } from 'theme-ui';
import Container from '../components/Container';
import Header from '../components/Header';
import SEO from '../components/SEO';
//@ts-expect-error
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NotFoundPage = () => (
	<Box sx={sx.wrapper}>
		<Header />
		<SEO title="404: Not found" />

		<Container
			sx={{ maxWidth: 'xlg', display: 'grid', placeItems: 'center' }}
		>
			<Box>
				<Box>
					<Text as="h2" sx={sx.contactText}>
						404: Webpage Not Found
					</Text>
					<Text
						sx={{
							pb: [4, 4, 4, 4, 4, 4, 4, 4, 8],
							fontSize: [1, 1, 1, 2, 2, 2, 2, 2, 3],
							lineHeight: 1.5,
						}}
					>
						Looks like you visited a webpage that doesn't exist or
						the content has been moved. Sorry for the inconvenience.
						Please use the button below to go to the homepage.
					</Text>
				</Box>

				<Box sx={sx.buttons}>
					<AniLink to="/" style={{ textDecoration: 'none' }} fade>
						<Button variant="primary" sx={{ mb: 8 }}>
							Go To HomePage
						</Button>
					</AniLink>
				</Box>
			</Box>
		</Container>
	</Box>
);

const sx: StyleTypes = {
	wrapper: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		margin: [0],
		minHeight: ['auto', '100vh'],
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 2fr'],
		mb: 8,
	},
	content: {
		display: 'grid',
		justifyContent: 'center',
		maxWidth: ['xlg', 'xlg', 'lg', 'lg', 'lg', 'lg', 'lg', 'lg', 'xxlg'],
		margin: '0 auto',
		p: {
			mb: [4, 4, 4, 4, 4, 4, 4, 4, 7],
			fontSize: [1, 1, 1, 2, 2, 2, 2, 2, 3],
			lineHeight: 1.5,
		},
	},
	heading: {
		fontFamily: 'heading',
		fontSize: [2, 2, '1.4rem', 5, 5, 5, 5, 5, 6],
		lineHeight: 1.1,
		py: [3, 3, 5, 6, 6, 6, 6, 6, 8],
		px: [3, 3, 3, 4],
	},
	contactText: {
		my: [4, 4, 4, 4, 4, 4, 4, 5, 6],
		fontSize: [3, 3, 3, 3, 4, 4, 4, 4, 5],
		fontFamily: 'heading',
	},

	buttons: {
		mt: [4],

		button: {
			display: 'flex',
			alignContent: 'center',
			alignItems: 'center',
			justifyContent: 'center',
			mb: 4,
		},
		a: {
			textDecoration: 'none',
			margin: '0 auto',
		},
		svg: {
			width: '1rem',
			mr: 2,
		},
	},
};

export default NotFoundPage;
