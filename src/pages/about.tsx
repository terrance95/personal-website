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
		description: `Software quality, scalability, and design are topics that continuously fascinate me. 
		In the last six years of my career in software development and user interface design.`,
	},
	{
		company: 'Springer Nature',
		position: 'Frontend Developer',
		date: 'Nov 2018 - Apr 2020',
		description: `Software quality, scalability, and design are topics that continuously fascinate me. 
		In the last six years of my career in software development and user interface design.`,
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
				<Box sx={sx.content}>
					{/* @ts-ignore */}
					<Tag sx={sx.tag}>A Piece of My Life Story</Tag>
					<Image src={illustration} sx={sx.image} />
					<Box>
						<Text as="h1" sx={sx.heading}>
							“We over estimate what we can do in a day but under
							estimate what we can achieve in a decade.”
						</Text>
						<Text as="p">
							Software quality, scalability, and design are topics
							that continuously fascinate me. In the last six
							years of my career in software development and user
							interface design, I have equipped myself with the
							skills to open my perspective and enhance my craft
							to build exceptional applications and websites. As a
							young child, I developed a passion for technology,
							and what turned into experimentation projects
							quickly grew into an accelerated path of innovation.
						</Text>
						<Text as="p">
							After graduating college at age 20, I devoted my
							time and talents to my first small business based in
							Cleveland, OH, where I assisted with various digital
							needs and continued to expand my learning within the
							field. Being a self-taught developer, I consciously
							crave new information that can help in sharpening my
							skills in all facets. In building different
							products, I have remained curious about the future
							of technology and how I can better understand the
							business needs within the category.
						</Text>
						<Text as="p">
							As I’ve become more and more involved in the
							building process of various websites and software
							development, I’ve come to note that this line of
							work surpasses far beyond the finished product of
							design. With correlation to marketing, business,
							experience, and overall development, I’ve been able
							to adjust my thought process to encompass all
							factors for the best possible results.
						</Text>
						<Text as="p">
							With my ability to bridge together both worlds of
							design and development, I’m able to not only
							communicate a thorough incentive for various digital
							projects but execute accordingly in a way that
							limits concern of navigation or effectiveness. In
							the ever-changing field of technology, my passion
							for development only increases with the amount of
							potential growth and opportunity I can offer a
							company or small business.
						</Text>

						<Text as="p">
							Now living in Japan to broaden my experiences both
							personally and professionally, I use this time
							wisely to push myself even further to perfect my
							craft. This field has allowed me to express my
							creativity and knowledge in ways that alter the
							perspective of digital experiences.
						</Text>
					</Box>
					<Box sx={sx.line} />
					<Box>
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
													mt: [4, 4, 4, 0],
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
					</Box>

					<Box sx={sx.buttons}>
						<Button variant="primary">Contact Me</Button>
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
		maxWidth: 'lg',
		margin: '0 auto',
		p: {
			mb: 5,
			fontSize: [1, 1, 1, 2],
			lineHeight: 1.5,
		},
	},
	heading: {
		fontFamily: 'heading',
		fontSize: [2, 2, 3, 3],
		lineHeight: 1.15,
		py: [2, 2, 4, 4],
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
		mt: [1, 1, 1, 8],
		mb: [6, 6, 6, 8],
	},
	buttons: {
		mt: 4,

		mb: 8,
	},
	image: {
		pb: [0, 0, 0, 2],
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
