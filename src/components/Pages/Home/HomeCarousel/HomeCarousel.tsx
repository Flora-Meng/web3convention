import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';

import carouselList from './carouselList.json';
import CarouseItem from './components/CarouseItem';
import { carouselHeight, color, devices, headerHeight } from '@/styles/variables';

const { primaryColor } = color;

const CarouselContainer = styled.div`
	height: ${carouselHeight.tablet};
	@media ${devices.laptop} {
		margin-top: ${`-${headerHeight}`};
		height: ${carouselHeight.laptop};
	}
`;

const HomeCarousel: React.FC = () => {
	return (
		<CarouselContainer>
			<Carousel
				indicatorIconButtonProps={{
					style: {
						bottom: '160px',
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
				{carouselList.map(carouselInfo => (
					<CarouseItem carouselInfo={carouselInfo} key={carouselInfo._id} />
				))}
			</Carousel>
		</CarouselContainer>
	);
};

export default HomeCarousel;
