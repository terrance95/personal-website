import React from 'react';
import { Box, Button, Text } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { Mail } from 'react-feather';
import FadeIn from 'react-fade-in';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const query = graphql`
	query Illustration {
		file(relativePath: { eq: "illustration-min.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 2800) {
					...GatsbyImageSharpFluid
					...GatsbyImageSharpFluidLimitPresentationSize
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const AboutPage = ({ data }) => {
	return (
		<Box sx={sx.wrapper}>
			<Header title="About Me" />
			<SEO title="About Me - Terrance Reynolds | Developer & Designer" />

			<Container sx={{ py: 4 }}>
				<FadeIn delay={200}>
					<Img
						fluid={data.file.childImageSharp.fluid}
						loading="lazy"
					/>

					<Box sx={sx.content}>
						<Box>
							<Text as="h1" sx={sx.heading}>
								“We over estimate what we can do in a day but
								under estimate what we can achieve in a decade.”
							</Text>

							<Text as="p">
								Software development and design are topics that
								continuously fascinate me. Even before my career
								began, I have always embraced a D.I.Y mentality,
								purposefully learning any skill necessary for
								whatever goal I wanted to achieve. I use this
								same philosophy to build beautiful websites and
								applications. Since I was young, I have been
								passionate about technology; what was once a
								childhood hobby transformed into a career where
								I constantly challenge myself to grow as a
								creator.
							</Text>
							<Text as="p">
								After graduating college at age 20, I started my
								first small business in Cleveland, OH,
								developing and designing websites for clients
								worldwide – from Hong Kong to New York. As a
								self-taught developer, I'm constantly learning
								new skills to enhance my craft and remain on the
								industry's bleeding edge. I understand that
								great work requires dedication, and I strive to
								bring that value to every project and team.
							</Text>

							<Text as="p">
								With my ability to bridge together the worlds of
								design and development, I can carry a project
								solo and work with designers, developers, and
								other stakeholders. I found the most significant
								challenge isn't thinking of a new product but
								finding people who can effectively communicate
								with team members of different roles and
								professional backgrounds. In the ever-changing
								industry of technology, we need people who can
								act as great collaborators and orchestrators to
								build the best products.
							</Text>

							<Text as="p">
								In 2017, I moved to Japan to broaden my
								experiences both personally and professionally.
								This shift in my life has brought new sources of
								creativity and knowledge. I spend my free time
								reading, writing, and podcasting. As I continue
								in this journey of life and tech, I search for
								the answer to the most infamous question of them
								all. What's next?
							</Text>
							<Box sx={sx.line} />

							<Box sx={{ mt: 5 }}>
								<Box sx={sx.videoContainer}>
									<iframe
										width="100%"
										height="360"
										src="https://www.youtube-nocookie.com/embed/PC4qqUSjpqA"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										loading="lazy"
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
								For all inquiries, please use the option below.
								Provide a brief introduction of who you are and
								how I can help. I will respond to you as soon as
								I can.
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
