import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import TestimonialItem from './components/TestimonialItem';
import testimonialList from './testimonialList.json';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';

const { primaryColor } = color;

const HomeTestimonialContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomeTestimonial: React.FC = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const checkMobile = () => {
		if (window.innerWidth < sizes.tablet) {
			setIsMobile(true);
		}
	};

	const handleResize = () => {
		checkMobile();
		if (window.innerWidth > sizes.tablet) {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		checkMobile();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<HomeTestimonialContainer>
			<Subtitle>event_testimonials</Subtitle>
			<Title>What Members Are Saying</Title>
			<Carousel
				animation="slide"
				duration={1000}
				indicatorIconButtonProps={{
					style: {
						bottom: 0,
						zIndex: 2,
						margin: '6px'
					}
				}}
				activeIndicatorIconButtonProps={{
					style: {
						color: primaryColor
					}
				}}
			>
				{isMobile
					? testimonialList.map(testimonial => (
							<Grid
								item
								tablet={6}
								className="flex justify-center"
								key={`${testimonial._id}`}
							>
								<TestimonialItem testimonial={testimonial} />
							</Grid>
					  ))
					: testimonialList
							.filter((_, index) => index % 2 === 0)
							.map((testimonial, index) => (
								<Grid
									container
									key={`${testimonial._id}`}
									className="flex justify-between"
								>
									<Grid item tablet={6} className="flex justify-center">
										<TestimonialItem testimonial={testimonialList[index * 2]} />
									</Grid>
									<Grid item tablet={6} className="flex justify-center">
										{testimonialList[index * 2 + 1] && (
											<TestimonialItem
												testimonial={testimonialList[index * 2 + 1]}
											/>
										)}
									</Grid>
								</Grid>
							))}
			</Carousel>
		</HomeTestimonialContainer>
	);
};

export default HomeTestimonial;
