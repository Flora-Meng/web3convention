import WestIcon from '@mui/icons-material/West';
import { Button, Pagination, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ChooseLocation from './ChooseLocation';
import DateFilter from './DateFilter';
import ShowMapSection from './ShowMapSection/ShowMapSection';
import EventItem from '@/components/Shares/EventItem';
import { fetchMeetupsPagination } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

type TSweb3MeetupPagination = TSweb3Pagination<IMeetup>;

const { blackColor, primaryColor, whiteColor } = color;

const Container = styled.div`
	background-color: ${blackColor};
`;

const BackEventsButtonSection = styled.div`
	display: flex;
	margin-left: 20px;
	max-width: 1440px;
	@media ${devices.laptop} {
		margin-left: 130px;
	}
	@media ${devices.desktop} {
		margin-left: 180px;
	}
`;
const BackEventsButtonContainer = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
`;
const BackEventsArrow = styled(WestIcon)`
	color: ${primaryColor};
	padding-right: 6px;
`;
const BackEventsText = styled.p`
	color: ${primaryColor};
	font-size: 20px;
	letter-spacing: 1px;
`;

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

const PaginationContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const MuiPagination = styled(Pagination)`
	.MuiPaginationItem-root {
		color: ${whiteColor};
	}
	.Mui-selected {
		color: ${primaryColor};
	}
`;

const MuiButton = styled(Button)`
	color: ${whiteColor};
`;

const MainContents = () => {
	const [filterEvent, setFilterEvent] = useState<IMeetup[]>([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(1);
	const [hasPreviousPage, setHasPreviousPage] = useState<boolean>();
	const [hasFollowingPage, setHasFollowingPage] = useState<boolean>();

	const router = useRouter();

	const navigateToSideEvents = () => {
		router.push('/side-events');
	};

	const fetchEvents = async () => {
		const response = await fetchMeetupsPagination(currentPage, 12);
		const meetupData: TSweb3MeetupPagination = response.data;
		const { docs, totalPages, hasPrevPage, hasNextPage } = meetupData;
		setFilterEvent(docs);
		setTotalCount(totalPages || 0);
		setHasPreviousPage(hasPrevPage);
		setHasFollowingPage(hasNextPage);
	};

	useEffect(() => {
		fetchEvents();
	}, [currentPage]);

	const handleLocationChange = (location: string) => {
		setSelectedLocation(location);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const backButtonHandler = () => {
		handlePageChange(currentPage - 1);
	};

	const nextButtonHandler = () => {
		handlePageChange(currentPage + 1);
	};

	return (
		<Container>
			<BackEventsButtonSection>
				<BackEventsButtonContainer onClick={navigateToSideEvents}>
					<BackEventsArrow />
					<BackEventsText>EVENTS</BackEventsText>
				</BackEventsButtonContainer>
			</BackEventsButtonSection>
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
					<PaginationContainer>
						<Stack direction="row" spacing={2}>
							<MuiButton
								onClick={backButtonHandler}
								sx={{
									'&:disabled': {
										color: '#676767'
									}
								}}
								disabled={!hasPreviousPage}
							>
								&lt; Back
							</MuiButton>
							<MuiPagination
								count={totalCount}
								page={currentPage}
								onChange={(event, page) => handlePageChange(page)}
								hidePrevButton
								hideNextButton
							/>
							<MuiButton
								onClick={nextButtonHandler}
								sx={{
									'&:disabled': {
										color: '#676767'
									}
								}}
								disabled={!hasFollowingPage}
							>
								Next &gt;
							</MuiButton>
						</Stack>
					</PaginationContainer>
				</EventContainer>
			</MainContainer>
		</Container>
	);
};

export default MainContents;
