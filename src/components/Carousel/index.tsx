import React, { FC } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box } from 'theme-ui';

const gallery = [
	require('../../images/terrance-1-min.jpg'),
	require('../../images/terrance-3-min.jpg'),
	require('../../images/terrance-5-min.jpg'),
	require('../../images/terrance-4.jpg'),
];

const Carousel: FC<ExtendStyles> = ({ sx }) => {
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
			>
				<Slider>
					{gallery.map((photo, key) => {
						return (
							<Slide index={key} key={key}>
								<Image
									src={photo}
									hasMasterSpinner
									style={{
										height: '98%',
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
