import styled from 'styled-components';

import Interaction from './Interaction';
import EventDescription from '@/components/Pages/EventDetail/EventDescription';
import LocationCard from '@/components/Pages/EventDetail/LocationCard';
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
	gap: 20px;
	min-height: 100vh;
	@media ${devices.mobile} {
		flex-direction: row;
	}
	@media ${devices.largeLaptop} {
		gap: 110px;
	}
`;
const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
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
					<LocationCard />
				</DescriptionAndLocation>
			</ContentWrapper>
			<Interaction />
		</MainContainer>
	);
};

export default EventDetailContent;
