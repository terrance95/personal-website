import { CarouselProvider, Slide, Slider, Image } from 'pure-react-carousel';
import React from 'react';
import { Box } from 'react-feather';

const gallery = [
	require('../../images/terrance-1.jpg'),

	require('../../images/terrance-3.jpg'),
	require('../../images/terrance-5.jpg'),

	// require('../../images/terrance-2.jpg'),
];

const SlideShow = () => {
	return (
		<CarouselProvider
			naturalSlideWidth={2000}
			naturalSlideHeight={2800}
			totalSlides={3}
			visibleSlides={1.5}
		>
			<Slider>
				{gallery.map((photo, key) => {
					return (
						<Slide
							index={key}
							key={key}
							onBlur={() => console.log('key', key)}
							onFocus={() => console.log('key', key)}
						>
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
	);
};

export default SlideShow;
