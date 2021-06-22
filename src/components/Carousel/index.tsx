import React, { FC, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Carousel: FC<ExtendStyles & { data: any }> = ({
	sx,
	data: {
		allImageSharp: { edges },
	},
}) => {
	useEffect(() => {
		console.log(edges);
	});
	return (
		<Box
			sx={{
				'.carousel__inner-slide': {
					width: 'calc(100% - 1rem)',
					height: 'calc(100% - 1rem)',
					left: '.5rem',
					top: '.5rem',
				},
				...sx,
			}}
		>
			<CarouselProvider
				naturalSlideWidth={2000}
				naturalSlideHeight={2800}
				totalSlides={4}
				visibleSlides={1.5}
				isPlaying
				infinite
			>
				<Slider>
					{edges.map((photo: any, key: number) => {
						console.log(photo);
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
		</Box>
	);
};

export default Carousel;
