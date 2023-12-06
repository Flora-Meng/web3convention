import Image from 'next/image';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

import ShowOnMapModal1 from './ShowOnMapModal';
import ShowOnMapModal2 from '@/components/Shares/ShowOnMapModal';
import {color, devices} from '@/styles/variables';
import imageLoader from '@/utils/loader';
import ChooseLocation from "@/components/Pages/FilteredEvents/ChooseLocation";
import fetchMeetups from '@/services/meetup';

const { primaryColor } = color;
const { blackColor } = color;

const Container = styled.div`
	margin-bottom: 60px;
`;

const MapContainer = styled.div`
	background-image: url('/images/smallMapBackground.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 200px;
	position: relative;
`;

const InfoContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 24px;
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
	background-color: rgba(82, 246, 198, 0.1);
	border: solid 1px ${primaryColor};
	border-radius: 30px;
	color: ${primaryColor};
	cursor: pointer;
	font-weight: 700;
	height: 44px;
	width: 170px;
`;
const EventContainer = styled.div`
	background-color: ${blackColor};
	margin-left: 0;
	width: 100%;
	height: 650px;
	overflow-y: auto;
	padding-right: 8px; // Add space for moving the scrollbar
	box-sizing: border-box; // Include padding in the width calculation
	&::-webkit-scrollbar {
		width: 8px; // Adjust scrollbar width
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: grey;
		border-radius: 4px;
		margin-right: -8px;
	}
`;
const SingleEventContainer = styled.div`
	margin-bottom: 16px;
`;
const FilteredContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 770px;
	padding: 0 8px 0 8px;
	@media ${devices.mobile} {
		padding: 0 8px 0 24px;
	}
`;
const LocationAndNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1vw 1vw;
	width:310px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 24px 22px 40px 0px;
		gap: 40px;
		width: 100%;
	}
`;
const NameContainer = styled.div`
	width: 100%;
	text-align:center;
	align-items: center;
`;

const ShowMapSection = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
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
		<Container>
			<MapContainer>
				<InfoContainer>
					<Image
						src="images/icons/locationPinIcon.png"
						alt="pin"
						width={39}
						height={48}
						loader={imageLoader}
					/>
					<StyledButton onClick={handleOpen}>Show on the map</StyledButton>
				</InfoContainer>
				<ShowOnMapModal1 open={open} handleClose={handleClose}>
					<FilteredContainer>
						<LocationAndNameContainer>
							<NameContainer>
								Name Container
							</NameContainer>
							<ChooseLocation onLocationChange={handleLocationChange} />
						</LocationAndNameContainer>
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
											<ShowOnMapModal2 event={eventInfo} />
										</SingleEventContainer>
									))
							) : (
								<div>No results found</div>
							)}
						</EventContainer>
					</FilteredContainer>
				</ShowOnMapModal1>
			</MapContainer>
		</Container>
	);
};

export default ShowMapSection;
