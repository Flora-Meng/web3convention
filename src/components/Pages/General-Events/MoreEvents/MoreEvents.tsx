import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import EventCard from '@/components/Shares/EventCard';
import { fetchMeetups } from '@/services/meetup';
import { color, devices } from '@/styles/variables';

const { blackColor, primaryColor } = color;

const MoreEventContainer = styled.div`
	background-color: ${blackColor};
	background-image: url('/images/modal-background.png');
	background-position: center left;
	background-repeat: no-repeat;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1200px;
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
const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	margin-top: 75px;
`;
const StyledButton = styled.button`
width:200px;
height:52px;
border-radius: 30px;
color: ${primaryColor};
border: solid 1px ${primaryColor};
background-color: rgba(82, 246, 198, 0.1);
}
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
				<StyledGrid container rowSpacing={9.375} columnSpacing={9.375}>
					{moreEvents.map(eventInfo => (
						<Grid item key={eventInfo._id} mobile={12} tablet={4} laptop={4}>
							<EventCard eventInfo={eventInfo} />
						</Grid>
					))}
				</StyledGrid>
			</Container>
			<StyledLink href="/filtered-event">
				<StyledButton type="button">SEE MORE</StyledButton>
			</StyledLink>
		</MoreEventContainer>
	);
};

export default MoreEvents;
