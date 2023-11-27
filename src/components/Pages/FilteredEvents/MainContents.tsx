import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ChooseLocation from './ChooseLocation';
import DateFilter from './DateFilter';
import ShowMapSection from './ShowMapSection/ShowMapSection';
import EventItem from '@/components/Shares/EventItem';
import { fetchMeetups } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;

const MainContainer = styled.div`
	background-color: ${blackColor};
	background-position: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 20px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 1vw 9vw;
	}
`;
const FilteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media ${devices.mobile} {
		width: 420px;
	}
`;
const EventContainer = styled.div`
	background-color: ${blackColor};
	margin-left: 0;
	width: 100%;
	@media ${devices.mobile} {
		width: 70%;
		margin-left: 4.5vw;
	}
`;
const SingleEventContainer = styled.div`
	margin-bottom: 40px;
`;
const MainContents = () => {
	const [filterEvent, setFilterEvent] = useState<IMeetup[]>([]);
	const [selectedLocation, setSelectedLocation] = useState('');

	const fetchEvent = async () => {
		const response = await fetchMeetups();
		setFilterEvent(response.data);
	};

	useEffect(() => {
		fetchEvent();
	}, []);

	const handleLocationChange = (location: string) => {
		setSelectedLocation(location);
	};
	return (
		<MainContainer>
			<FilteredContainer>
				<ShowMapSection />
				<ChooseLocation onLocationChange={handleLocationChange} />
				<DateFilter />
			</FilteredContainer>
			<EventContainer>
				{filterEvent.filter(
					event =>
						!selectedLocation ||
						(event.city &&
							event.city.length > 0 &&
							event.city[0].name === selectedLocation)
				).length > 0 ? (
					filterEvent
						.filter(
							event =>
								!selectedLocation ||
								(event.city &&
									event.city.length > 0 &&
									event.city[0].name === selectedLocation)
						)
						.map(eventInfo => (
							<SingleEventContainer key={eventInfo._id}>
								<EventItem eventInfo={eventInfo} />
							</SingleEventContainer>
						))
				) : (
					<div>No results found</div>
				)}
			</EventContainer>
		</MainContainer>
	);
};

export default MainContents;
