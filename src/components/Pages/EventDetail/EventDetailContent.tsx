import styled from 'styled-components';

import EventDescription from '@/components/Pages/EventDetail/EventDescription';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;
const MainContainer = styled.div`
	background-color: ${blackColor};
	background-position: center;
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 100%;
`;
const DescriptionAndLocation = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	@media ${devices.mobile} {
		flex-direction: row;
	}
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	width: 100%;
`;
const Title = styled.h1`
	color: ${color.whiteColor};
	letter-spacing: 1px;
	line-height: 1.25;
	margin: 20px 0 32px 0;
`;
const EventDetailContent = () => {
	return (
		<MainContainer>
			<ContentWrapper>
				<Title>The First Gathering of Web3Relation.</Title>
				<DescriptionAndLocation>
					<EventDescription />
				</DescriptionAndLocation>
			</ContentWrapper>
		</MainContainer>
	);
};

export default EventDetailContent;
