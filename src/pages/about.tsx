import React from 'react';
import { Box, Button, Text, Image } from 'theme-ui';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Tag from '../components/Tag';

const illustration = require('../images/illustration.jpg');

type jobType = {
	company: string;
	position: string;
	date: string;
	description: string;
};

const workExperience: Array<jobType> = [
	{
		company: 'Synspective',
		position: 'Platform Engineer',
		date: 'Apr 2020 - current',
		description: `Springer Nature or Springer Nature Group is a German-British academic publishing company`,
	},
	{
		company: 'Springer Nature',
		position: 'Frontend Developer',
		date: 'Nov 2018 - Apr 2020',
		description: `Springer Nature or Springer Nature Group is a German-British academic publishing company`,
	},
	{
		company: 'Freelance',
		position: 'Web Designer',
		date: 'Nov 2015 - Apr 2018',
		description: `Software quality, scalability, and design are topics that continuously fascinate me. 
		In the last six years of my career in software development and user interface design.`,
	},
];

const AboutPage = () => {
	return (
		<Box sx={sx.wrapper}>
			<Header title="About Me" />
			<SEO title="About Me | Terrance Reynolds" />

			<Container sx={{ py: 8 }}>
				<Box sx={sx.imageContainer}>
					<Image src={illustration} sx={sx.image} />
				</Box>

				<Box sx={sx.content}>
					{/* @ts-ignore */}

					<Box>
						<Text as="h1" sx={sx.heading}>
							“We over estimate what we can do in a day but under
							estimate what we can achieve in a decade.”
						</Text>
						<Text as="p">
							Software development and design are topics that
							continuously fascinate me. In the last six years of
							my career in software development and user interface
							design, I have equipped myself with the skills to
							open my perspective and enhance my craft to build
							exceptional applications and websites. As a young
							child, I developed a passion for technology, and
							what turned into experimentation projects quickly
							grew into an accelerated path of innovation.
						</Text>
						<Text as="p">
							After graduating college at age 20, I started my
							first small business in Cleveland, OH, developing
							and designing websites for clients all across the
							world, from Hong Kong to New York. Being a
							self-taught developer, I'm constantly perfecting my
							craft and sharpening my skills in all areas. I
							understand that great work requires dedication and I
							strive to bring that value to every project and team
							that I work on.
						</Text>

						<Text as="p">
							With my ability to bridge together both worlds of
							design and development, I’m able to not only
							communicate a thorough strategy for stakeholders but
							execute with precision and attention to detail. In
							the ever-changing field of technology, my passion
							for all areas of this field only increases with the
							amount of potential value and opportunity I can
							offer those I work with.
						</Text>

						<Text as="p">
							Now living in Japan to broaden my experiences both
							personally and professionally, I use this time
							wisely to push myself even further to perfect my
							craft. This field has allowed me to express my
							creativity and knowledge in ways I could have never
							imagined. As I continue my career, I plan to excel
							and push myself with every new project and challenge
							I face.
						</Text>
					</Box>
					<Box sx={sx.line} />
					{/* <Box>
						<Text as="h2" sx={sx.h2}>
							Work Experience
						</Text>
						<Box sx={{ mt: 8 }}>
							{workExperience.map((job: jobType) => {
								return (
									<Box sx={sx.grid}>
										<Text as="h3" sx={sx.h3}>
											{job.company}
										</Text>
										<Box>
											<Box
												sx={{
													mt: [3, 3, 3, 0],
													display: 'flex',
													flexDirection: 'row',
												}}
											>
												<Text as="h3" sx={sx.h4}>
													{job.position}
												</Text>
												<Text
													sx={{
														pl: 4,
														color: '#747474',
														fontSize: 0,
													}}
												>
													{job.date}
												</Text>
											</Box>

											<Text sx={{ mt: 4 }}>
												{job.description}
											</Text>
										</Box>
									</Box>
								);
							})}
						</Box>
					</Box> */}

					<Box sx={sx.buttons}>
						<Button variant="primary">Email Me</Button>
						<Button variant="secondary">Request Full Resume</Button>
					</Box>
				</Box>
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
	h2: {
		mt: 4,
		fontSize: 3,
		fontFamily: 'heading',
	},
	h3: {
		fontSize: 2,
		fontFamily: 'heading',
	},
	h4: {
		fontSize: 1,
		fontFamily: 'heading',
	},
	tag: {
		my: [2, 2, 2, 8],
	},
	buttons: {
		mt: 4,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		columnGap: 5,
		mb: 8,
	},
	imageContainer: {
		display: 'grid',
		justifyContent: 'center',
		maxWidth: '100%',
		margin: '0 auto',
	},
	image: {},
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
