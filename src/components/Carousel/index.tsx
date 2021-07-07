import React, { FC } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import FadeIn from 'react-fade-in';

const Carousel: FC<ExtendStyles & { data: any }> = ({
	sx,
	data: {
		allImageSharp: { edges },
	},
}) => {
	return (
		<Box
			sx={{
				'.carousel__inner-slide': {
					width: 'calc(100% - 1rem)',
					height: 'calc(100% - 1rem)',
					right: '.5rem',
					top: '.5rem',
				},
				...sx,
			}}
		>
			<FadeIn delay={200}>
				<CarouselProvider
					naturalSlideWidth={2000}
					naturalSlideHeight={2800}
					totalSlides={4}
					visibleSlides={1.5}
					isPlaying
					infinite
				>
					<Slider aria-label="slider">
						{edges.map((photo: any, key: number) => {
							return (
								<Slide index={key} key={key}>
									<Img
										fluid={photo.node.fluid}
										//hasMasterSpinner
										style={{
											height: '100%',
											objectFit: 'cover',
											objectPosition: 'center center',
										}}
									/>
								</Slide>
							);
						})}
					</Slider>
				</CarouselProvider>
			</FadeIn>
		</Box>
	);
};

export default Carousel;
