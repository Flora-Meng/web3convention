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
const EventDetailContent = () => {
	return (
		<MainContainer>
			<ContentWrapper>
				<div>This is Title Container</div>
				<DescriptionAndLocation>
					<EventDescription />
				</DescriptionAndLocation>
			</ContentWrapper>
		</MainContainer>
	);
};

export default EventDetailContent;
