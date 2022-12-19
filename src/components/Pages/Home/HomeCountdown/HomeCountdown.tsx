import styled from 'styled-components';

import Countdown from '@/components/Shares/Countdown';
import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor } = color;

const HomeCountdownContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/demo/countdown-bg-img.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${whiteColor};
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 100px 30px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 100px 60px;
	}
	@media ${devices.laptop} {
		flex-direction: row;
		align-items: center;
	}
`;

const TitleContainer = styled.div`
	margin-bottom: 60px;
	@media ${devices.laptop} {
		max-width: 280px;
		margin-right: 80px;
		margin-bottom: 0;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	font-size: 28px;
	margin: 0;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const HomeCountdown: React.FC = () => {
	return (
		<HomeCountdownContainer>
			<TitleContainer>
				<Subtitle>22-23 July 2023</Subtitle>
				<Title>Count Every Second Until Event</Title>
			</TitleContainer>
			<Countdown />
		</HomeCountdownContainer>
	);
};

export default HomeCountdown;
