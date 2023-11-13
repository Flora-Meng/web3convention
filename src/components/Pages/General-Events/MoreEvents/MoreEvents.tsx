import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventCard from '@/components/Shares/EventCard';
import { fetchMeetups } from '@/services/meetups';
import { color, devices } from '@/styles/variables';

const { primaryColor } = color;

const MoreEventContainer = styled.div`
	background-color: black;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 360px;
`;
const WebConvention = styled.span`
	color: ${primaryColor};
	font-size: 14px;
	font-style: italic;
	height: 16px;
	letter-spacing: 1px;
`;
const SectionTitle = styled.span`
	color: #fff;
	font-size: 40px;
	font-weight: bold;
	height: 44px;
	letter-spacing: 1px;
	margin-top: 8px;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const StyledGrid = styled(Grid)`
	margin-top: 50px;
`;
const MoreEvents: React.FC = () => {
	const [moreEvents, setMoreEvents] = useState<IMeetup[]>([]);

	const fetchData = async () => {
		const response = await fetchMeetups();
		setMoreEvents(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<MoreEventContainer>
			<Container>
				<WebConvention>WEB3.Convention</WebConvention>
				<SectionTitle>MoreEvents</SectionTitle>
				<StyledGrid container spacing={9.375} rowSpacing={1} columnSpacing={1}>
					{moreEvents.map(eventInfo => (
						<Grid item key={eventInfo._id} mobile={12} tablet={4} laptop={4}>
							<EventCard eventInfo={eventInfo} />
						</Grid>
					))}
				</StyledGrid>
			</Container>
		</MoreEventContainer>
	);
};

export default MoreEvents;
