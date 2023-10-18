// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import AgendaTable from './components/AgendaTable';
// import EventFilter from './components/EventFilter';
// import { ALL_EVENTS, EEventType } from '@/constants/event';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const HomeEventContainer = styled.div`
	@media ${devices.miniMobile} {
		margin: 0 24px;
	}
	@media ${devices.desktop} {
		margin: 0 340px;
	}

	overflow: hidden;
	position: relative;
`;

const MaskContainer = styled.div`
	/* margin-left: 20px; */
	position: absolute;
	/* top: 0; */
	@media ${devices.mobile} {
		margin-top: 40px;
	}
	@media ${devices.desktop} {
		margin-top: 20px;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	font-size: 23vw;
	left: 0;
	/* top: -3vw; */
	@media ${devices.tablet} {
		left: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 320px;
	}
	@media ${devices.miniMobile} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 230px;
		left: 0;
	}
`;

const ContentContainer = styled.div`
	/* margin: 122px 0 90px; */
	@media ${devices.miniMobile} {
		margin: 134px 0 40px;
	}
	@media ${devices.desktop} {
		margin: 122px 0 90px;
	}
`;

const Title = styled.h2`
	${sectionTitle};

	@media ${devices.desktop} {
		margin-bottom: 50px;
	}
	@media ${devices.miniMobile} {
		margin-bottom: 39px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	/* margin-bottom: 50px; */
`;

const HomeEvent: React.FC = () => {
	// const router = useRouter();
	// const { isMobile } = useResize(sizes.laptop);
	// const [currentFilterType, setCurrentFilterType] = useState<EEventType | undefined>();

	useEffect(() => {
		// const { filterType } = router.query;
		// setCurrentFilterType(filterType === ALL_EVENTS ? undefined : (filterType as EEventType));
	}, []);

	return (
		<HomeEventContainer>
			<MaskContainer>
				<Backdrop>Events</Backdrop>
			</MaskContainer>
			<ContentContainer>
				<Subtitle>Web3 Convention 2024</Subtitle>
				<Title>Convention Agenda</Title>
				{/* <EventFilter
					currentFilterType={currentFilterType}
					setCurrentFilterType={setCurrentFilterType}
				/> */}
				{/* {isMobile ? (
					<EventAccordion
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				) : (
					<EventTable
						list={eventList as IEvent[]}
						currentFilterType={currentFilterType}
					/>
				)} */}
				<AgendaTable />
			</ContentContainer>
		</HomeEventContainer>
	);
};

export default HomeEvent;
