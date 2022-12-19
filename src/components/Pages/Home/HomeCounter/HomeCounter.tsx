import styled from 'styled-components';

import FeatureCounter from './components/FeatureCounter';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const HomeCountdownContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/demo/countdown-bg-img.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Content = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 40px 140px;
	position: relative;
	@media ${devices.mobile} {
		padding: 100px 100px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const TitleContainer = styled.div`
	color: ${whiteColor};
	margin-bottom: 60px;
	@media ${devices.laptop} {
		margin-right: 80px;
		margin-bottom: 0;
		max-width: ${`${sizes.largeLaptop}px`};
	}
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: unset;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomeCounter: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<Content>
				<TitleContainer>
					<Subtitle>Together for a positive future</Subtitle>
					<Title>Why Web3 Convention</Title>
				</TitleContainer>
				<FeatureCounter />
			</Content>
		</HomeCountdownContainer>
	);
};

export default HomeCounter;
