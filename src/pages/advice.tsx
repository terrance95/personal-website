import * as React from 'react';
import { Box, Button, Heading, Message, Text } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import FadeIn from 'react-fade-in';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Tag from '../components/Tag';
import { useState } from 'react';

export const query = graphql`
	query Illustration {
		file(relativePath: { eq: "jp-1-9-min.jpg" }) {
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

const DeveloperGuidePage = ({ data }: any) => {
	const [copied, setCopied] = useState(false);

	const handleCopiedUrl = () => {
		setCopied(true);
		const url = document.location.href;
		navigator.clipboard.writeText(url);

		setTimeout(() => {
			setCopied(false);
		}, 4000);
	};

	return (
		<Box sx={sx.wrapper}>
			<Header title="Free Game" />
			<SEO title="Finding Your Path As A Software Engineer in Japan - Terrance Reynolds | Developer & Designer" />
			<Container sx={{ pb: 6 }}>
				<Box sx={sx.hero}>
					<Tag sx={sx.tag}>My Personal Guide</Tag>
					<Heading as="h1" sx={sx.heroHeading}>
						Finding Your Path As A Software Engineer in Japan
					</Heading>
					<Text as="p" sx={sx.excerpt}>
						This guide is a detailed approach to how I learned to
						program and navigated the early days of my career as a
						Software Engineer in Japan. I hope this guide serves as
						a blueprint for people just like me.
					</Text>
					<Box sx={sx.line} />

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Box>
							<Text
								sx={{
									textTransform: 'uppercase',
									fontSize: '.75rem',
									color: 'primary',
								}}
							>
								Terrance Reynolds
							</Text>
							<Text
								sx={{
									textTransform: 'uppercase',
									fontSize: '.625rem',
									letterSpacing: '.1rem',
									mt: 0,
									display: 'block',
								}}
							>
								Last Updated May 21st, 2023
							</Text>
						</Box>
						<Box sx={{ position: 'relative' }}>
							<Box sx={{ display: 'flex' }}>
								<a
									href="https://youtube.com/@TerranceReynolds"
									target="_blank"
								>
									<Button variant="reset" sx={sx.shareIcons}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1rem"
											height="1rem"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
											<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
										</svg>
									</Button>
								</a>
								<a
									href="https://www.linkedin.com/in/terrancereynolds/"
									target="_blank"
								>
									<Button variant="reset" sx={sx.shareIcons}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1rem"
											height="1rem"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
											<rect
												x="2"
												y="9"
												width="4"
												height="12"
											/>
											<circle cx="4" cy="4" r="2" />
										</svg>
									</Button>
								</a>
								<a
									href="https://www.instagram.com/terrance95_/"
									target="_blank"
								>
									<Button variant="reset" sx={sx.shareIcons}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1rem"
											height="1rem"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<rect
												x="2"
												y="2"
												width="20"
												height="20"
												rx="5"
												ry="5"
											/>
											<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
											<line
												x1="17.5"
												y1="6.5"
												x2="17.51"
												y2="6.5"
											/>
										</svg>
									</Button>
								</a>

								<Button
									variant="reset"
									sx={sx.shareIcons}
									onClick={handleCopiedUrl}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1rem"
										height="1rem"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
										<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
									</svg>
								</Button>
							</Box>
							{copied && (
								<Text
									sx={{
										textTransform: 'uppercase',
										fontSize: '.625rem',
										letterSpacing: '.1rem',
										mt: 0,
										textAlign: 'right',
										position: 'absolute',
										right: 0,
									}}
								>
									Copied
								</Text>
							)}
						</Box>
					</Box>
				</Box>

				<Box sx={{ ...sx.content, mt: 0 }}>
					{/* <Message sx={sx.messages}>
						This is just a message for someone to read
					</Message> */}
					<Box sx={sx.videoContainer}>
						<iframe
							width="100%"
							height="360"
							src="https://www.youtube.com/embed/nsTaXAPTBKc"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							loading="lazy"
						/>
					</Box>
					<Heading as="h3" sx={sx.h3}>
						1: Intro
					</Heading>
					<Box sx={sx.line} />

					<Text as="p">
						My origin story isn’t one of a typical software engineer
						who moved to this country. I never majored in computer
						science, went to a boot camp, or even learned Japanese,
						for that matter. Instead, a few years ago, I used to
						teach English in a small town, and I was desperately
						looking for a way out. Surprisingly, within a few short
						years, I developed a relatively successful career here
						as a software engineer.
					</Text>

					<Heading as="h3" sx={sx.h3}>
						2: Context
					</Heading>
					<Box sx={sx.line} />

					<Text as="p">
						My guide will not apply to every situation or person.
						However, I captured my approach and mindset as
						authentically as possible. Some things will go against
						the conventional wisdom of doing things the “Japanese
						way” you may find on Reddit posts, blogs, and videos
						discussing becoming a software engineer in Japan.
					</Text>

					<Text as="p">
						I decided not to follow much of that advice because I
						found it too generic and didn't fit within my desires
						and goals. Instead, my approach was doing things my way
						for better or worse. I encourage you to develop your
						principles and success plans if you're reading this.
						Then, use my guide and others as inspiration to design a
						unique path for yourself.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						3: Establish A Clear Goal
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						In the beginning, my goal was to become a Frontend
						Developer. Since I'm writing primarily from my
						experience, most of the guide will also be centered
						around this. If you don't know what interest you, I
						encourage you to search YouTube, "what it's like to work
						in X role," or day in the life videos. Regardless, I
						encourage you to read on even if you're not interested
						in Frontend Development because much of this information
						is universal.
					</Text>

					<Text as="p">
						Once you have a clear idea of what role you would like
						to have, I want you to narrow it down even further. Find
						companies you would like to ideally work for and
						specifically create goals to learn what you see in their
						job description. This is often found in their
						"requirement" section. However, please remember that
						some of those "requirements" are "nice to haves" at
						best, and many of these companies will be willing to
						compromise with you if you know their core technologies.
					</Text>
					<Text as="p">
						Suppose you're searching for jobs on LinkedIn. In that
						case, sign up for LinkedIn Premium, search for the job
						poster or someone who has a similar role you're applying
						for at the company, and ask them directly what are the
						most used technologies for this role. Most people will
						be happy to answer if you ask them politely enough.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						4: Find A Learning Platform
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						Once you have a clear goal in mind, find a learning
						platform. In my early days, I mostly used{' '}
						<a href="https://teamtreehouse.com/">Team Treehouse</a>.
						This website isn't the "end all, be all." I just found
						the instructors there to be less dry and dull than other
						platforms. Also, it wasn't that expensive for me.
					</Text>
					<Text as="p">
						Other websites I recommend include{' '}
						<a href="https://edx.org/">Edx</a>,{' '}
						<a href="https://freecodecamp.com/">Free Code Camp</a>,{' '}
						<a href="https://www.khanacademy.org/">Khan Academy</a>,
						and{' '}
						<a href="https://www.codecademy.com/">Code Academy</a>.
						Just find one that suits your learning style. It's okay
						to try multiple at first. Once you're ready, try to
						narrow it down to one or two.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						5: Learning On Your Own
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						Many of these learning platforms have "tracks" or
						"learning paths" to study whatever skills or role you're
						trying to learn. Follow them and complete the courses as
						you see fit with your original goals. Then, set aside
						time to practice every day for 2 - 3 hours. The studying
						should be a mixture of reading, solo practice, and
						following the video instructions.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						6: Create Projects Independently From Your Coursework
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						This is where true learning begins. Courses are like
						training wheels, and it's easy to develop a false sense
						of confidence when following an instructor. So after
						each course, build a small or mid-size app applying
						whatever you learn.
					</Text>

					<Text as="p">
						During this stage, allow yourself to make mistakes and
						thoroughly explore the concept. Being frustrated, stuck,
						and desperately googling for solutions is all a part of
						the process. This is what your first few years as a
						developer on the job will feel like anyway. So it's best
						to learn how to embrace this part.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						7: Build A Portfolio
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						Build a more serious project once you're comfortable
						with the programming language and its accompanying tech
						stack. I suggest a small app that centers around solving
						a problem about something you're passionate about,
						offering to build a website or app for your friend or
						family member's business for free, or using a resource
						like{' '}
						<a href="https://www.frontendmentor.io/">
							Frontend Mentors.
						</a>
					</Text>
					<Text as="p">
						What's important here is that you can show off and
						discuss several high-quality projects during your
						interviews. This is why it's imperative to be thoughtful
						here and pick potential portfolio pieces to be proud of.
						Suppose you choose a project that's easy or you're
						dispassionate towards. In that case, it will come across
						that way during the interview process, and you'll be
						less likely to be hired.
					</Text>
					<Heading as="h3" sx={sx.h3}>
						8: Finding Job In Japan
					</Heading>
					<Box sx={sx.line} />
					<Text as="p">
						If you do not speak Japanese, I recommend using{' '}
						<a href="https://www.linkedin.com/">LinkedIn</a> for
						your job search. I've had the most success here with
						this platform. Once you find a job you're interested in,
						apply. It doesn't matter if you don't meet all of the
						requirements. Even if you meet 33%, I suggest applying.
					</Text>
					<Text as="p">
						The first job I landed was looking for at least 3+ years
						of experience, and I got hired anyway. Job Descriptions
						aren't checklists; they're wish lists for the employer.
						So apply.
					</Text>

					<Heading as="h3" sx={sx.h3}>
						9: Further Inspiration
					</Heading>
					<Box sx={sx.line} />
					<Box sx={sx.videoContainer}>
						<iframe
							width="100%"
							height="360"
							src="https://www.youtube.com/embed/hU-_Z9fLi2g"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							loading="lazy"
						/>
					</Box>
					<Box sx={{ mt: 5 }}>
						<Box sx={sx.videoContainer}>
							<iframe
								width="100%"
								height="360"
								src="https://www.youtube.com/embed/A1vFVaCFjTg"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
							/>
						</Box>
					</Box>
					<Box sx={{ mt: 5 }}>
						<Box sx={sx.videoContainer}>
							<iframe
								width="100%"
								height="360"
								src="https://www.youtube.com/embed/4MPIBCEJdVA"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
							/>
						</Box>
						<Text as="p">
							You can read the transcript{' '}
							<a href="https://www.eightvalues.com/podcast/how-to-stand-out-as-a-developer-in-japan">
								here
							</a>{' '}
						</Text>
					</Box>
				</Box>
			</Container>
			<Footer />
		</Box>
	);
};

const sx: StyleTypes = {
	wrapper: {
		bg: 'background',
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
		bg: 'background',
		display: 'grid',
		justifyContent: 'center',
		maxWidth: [
			'spacing07',
			'spacing07',
			'spacing06',
			'spacing06',
			'spacing06',
			'spacing06',
			'spacing06',
			'spacing06',
			'spacing08',
		],
		margin: '0 auto',
		p: {
			mb: [4, 4, 4, 4, 4, 4, 4, 4, 6],
			lineHeight: 1.5,
			fontSize: 1,
		},
		my: 5,
		a: {
			color: 'primary',
			textDecoration: 'none',
			borderBottom: '2px solid',
		},
	},
	messages: {
		background: 'hsl(0 0% 10% / 1)',
		// px: '1.5rem',
		borderLeftWidth: '4px',
	},
	videoContainer: {
		pb: '56.25%',
		height: 0,
		position: 'relative',
		mt: 2,
		mb: 3,
		iframe: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
		},
	},

	contactText: {
		my: [4, 4, 4, 4, 4, 4, 4],
		fontSize: [3, 3, 3, 3, 4, 4, 4, 4, 5],
		fontFamily: 'heading',
	},
	h3: {
		fontSize: 3,
		fontFamily: 'heading',
		mt: 3,
	},
	h4: {
		fontSize: 2,
		fontFamily: 'heading',
	},
	tag: {
		mb: 2,
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

	hero: {
		bg: 'background',
		display: 'grid',
		justifyContent: 'center',
		maxWidth: 'spacing04',
		margin: '0 auto',
		mt: 10,
		mb: 8,
	},
	heroHeading: {
		// textDecoration: 'underline',
		// textDecorationThickness: '2px',
		// textDecorationColor: 'primary',
		fontFamily: 'heading',
		fontSize: [2, 3, 5, 6, 6],
		lineHeight: 1.1,
		maxWidth: 'spacing06',
		mt: [4],
		mb: [2],
	},
	excerpt: { fontSize: [1, 1, 2], lineHeight: 1.5, pb: 3 },

	line: {
		display: 'flex',
		borderBottom: '1px solid #191917',
		pb: 4,
		mb: 4,
		'*': {
			mr: 4,
		},
	},

	shareIcons: {
		ml: 4,
		color: 'primary',
		height: '1rem',
		position: 'relative',
		':hover': {
			cursor: 'pointer',
		},
		svg: {
			color: 'primary',
		},
	},
};

export default DeveloperGuidePage;
