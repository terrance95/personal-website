import React, { useEffect } from 'react';
import { Box, Button, Text, Image } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Tag from '../components/Tag';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Mail, Send } from 'react-feather';
import Img from 'gatsby-image';
import FadeIn from 'react-fade-in';

const illustration = require('../images/illustration-min.jpg');

const AboutPage = () => {
	return (
		<Box sx={sx.wrapper}>
			<Header title="About Me" />
			<SEO title="About Me | Terrance Reynolds" />

			<Container sx={{ py: 4 }}>
				<FadeIn delay={100}>
					<Box sx={sx.imageContainer}>
						<Image src={illustration} />
					</Box>

					<Box sx={sx.content}>
						{/* @ts-ignore */}

						<Box>
							<Text as="h1" sx={sx.heading}>
								“We over estimate what we can do in a day but
								under estimate what we can achieve in a decade.”
							</Text>

							<Text as="p">
								Software development and design are topics that
								continuously fascinate me. In the last six years
								of my career in software development and user
								interface design, I have equipped myself with
								the skills to open my perspective and enhance my
								craft to build exceptional applications and
								websites. As a young child, I developed a
								passion for technology, and what turned into
								experimentation projects quickly grew into an
								accelerated path of innovation.
							</Text>
							<Text as="p">
								After graduating college at age 20, I started my
								first small business in Cleveland, OH,
								developing and designing websites for clients
								all across the world, from Hong Kong to New
								York. Being a self-taught developer, I'm
								constantly perfecting my craft and sharpening my
								skills in all areas. I understand that great
								work requires dedication and I strive to bring
								that value to every project and team that I work
								on.
							</Text>

							<Text as="p">
								With my ability to bridge together both worlds
								of design and development, I’m able to not only
								communicate a thorough strategy for stakeholders
								but execute with precision and attention to
								detail. In the ever-changing field of
								technology, my passion for all areas of this
								field only increases with the amount of
								potential value and opportunity I can offer
								those I work with.
							</Text>

							<Text as="p">
								Now living in Japan to broaden my experiences
								both personally and professionally, I use this
								time wisely to push myself even further to
								perfect my craft. This field has allowed me to
								express my creativity and knowledge in ways I
								could have never imagined. As I continue my
								career, I plan to excel and push myself with
								every new project and challenge I face.
							</Text>
							<Box sx={{ mt: 5 }}>
								<Box sx={sx.videoContainer}>
									<iframe
										width="100%"
										height="360"
										src="https://www.youtube.com/embed/PC4qqUSjpqA"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</Box>
							</Box>
						</Box>

						<Box sx={sx.line} />
						<Box>
							<Text as="h2" sx={sx.contactText}>
								Contact Me
							</Text>
							<Text
								sx={{
									pb: [4, 4, 4, 4, 4, 4, 4, 4, 8],
									fontSize: [1, 1, 1, 2, 2, 2, 2, 2, 3],
									lineHeight: 1.5,
								}}
							>
								If you would like together, please choose from
								the options below. A brief introduction of who
								you are and how I can help you would be greatly
								appreciate. I contact you as soon as I can.
							</Text>
						</Box>

						<Box sx={sx.buttons}>
							<a href="mailto:hello@terrancereynolds.com">
								<Button variant="primary" sx={{ mb: 8 }}>
									<Mail />
									Send An Email
								</Button>
							</a>
							<a
								href="https://www.linkedin.com/in/terrancereynolds/"
								target="_blank"
							>
								<Button variant="ghost">
									View Work Experience
								</Button>
							</a>
						</Box>
					</Box>
				</FadeIn>
			</Container>
			<Footer />
		</Box>
	);
};

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
			mb: [4, 4, 4, 4, 4, 4, 4, 4, 6],
			fontSize: [1, 1, 1, 2, 2, 2, 2, 2, 3],
			lineHeight: 1.5,
		},
	},
	videoContainer: {
		pb: '56.25%',
		height: 0,
		position: 'relative',
		mb: 2,
		iframe: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
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
		my: [4, 4, 4, 4, 4, 4, 4],
		fontSize: [3, 3, 3, 3, 4, 4, 4, 4, 5],
		fontFamily: 'heading',
	},
	h3: {
		fontSize: 2,
		fontFamily: 'heading',
	},
	h4: {
		fontSize: 2,
		fontFamily: 'heading',
	},
	tag: {
		my: [2, 2, 2, 8],
	},
	buttons: {
		mt: [4],
		mb: 4,
		button: {
			display: 'flex',
			alignContent: 'center',
			alignItems: 'center',
			justifyContent: 'center',
			mb: 3,
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
	imageContainer: {
		display: 'grid',
		justifyContent: 'center',
		maxWidth: '100%',
		margin: '0 auto',
		width: '100%',
	},
	line: {
		display: 'flex',
		borderBottom: '1px solid #191917',
		pb: 4,
		mb: 4,
		'*': {
			mr: 4,
		},
	},
};

export default AboutPage;
