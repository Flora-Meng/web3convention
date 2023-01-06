// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import AgendaTable from '@/components/Shares/AgendaTable';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';

const HomeEventContainer = styled.div`
	position: relative;
`;

const MaskContainer = styled.div`
	margin-left: 20px;
	position: absolute;
	top: 0;
`;

const Backdrop = styled.div`
	${backdrop};
	font-size: 23vw;
	left: 0;
	top: -3vw;
	@media ${devices.tablet} {
		left: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 320px;
	}
`;

const ContentContainer = styled.div`
	padding: 100px 30px 160px;
	@media ${devices.mobile} {
		padding: 100px 100px 160px;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	margin-bottom: 20px;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const headConfig: {
	title: string;
	subtitle: string;
}[] = [
	{
		title: 'Kickoff',
		subtitle: '15 April'
	},
	{
		title: 'Peroid',
		subtitle: '15 April to 16 June'
	},
	{
		title: 'Prizes',
		subtitle: '16 June to 22 June'
	}
];

const agendaConfig = [
	{
		_id: '1-1',
		title: 'Deadline to Apply',
		columns: 1,
		offset: 0
	},
	{
		_id: '1-1',
		title: 'Idea Brainstorming & Team Formation Session',
		columns: 1,
		offset: 0
	},
	{
		_id: '2-2',
		title: 'Project Feedback Session',
		columns: 1,
		offset: 0
	},
	{
		_id: '2-2',
		title: 'Project Submissions Due!',
		columns: 1,
		offset: 0
	},
	{
		_id: '3-3',
		title: 'Pitches',
		columns: 1,
		offset: 0
	},
	{
		_id: '2-1',
		title: 'Uni Hackathon Kickoff',
		columns: 1,
		offset: 0
	},
	{
		_id: '2-1',
		title: 'Opening Ceremonies',
		columns: 1,
		offset: 0
	},
	{
		_id: '3-23',
		title: 'Project Judging',
		columns: 1,
		offset: 2
	},
	{
		_id: '11-23',
		title: 'Results',
		columns: 1,
		offset: 2
	},
	{
		_id: '4-23',
		title: 'Closing Ceremonies',
		columns: 1,
		offset: 2
	},
	{
		_id: '4-23',
		title: 'Web 3 Hackathon Kickoff',
		columns: 1,
		offset: 2
	}
];
const Agenda: React.FC = () => {
	useEffect(() => {
		// const { filterType } = router.query;
		// setCurrentFilterType(filterType === ALL_EVENTS ? undefined : (filterType as EEventType));
	}, []);

	return (
		<HomeEventContainer>
			<MaskContainer>
				<Backdrop>Schedule</Backdrop>
			</MaskContainer>
			<ContentContainer>
				<Subtitle>Web3 Hackathon 2023</Subtitle>
				<Title>Uni Hackathon Agenda</Title>
				<AgendaTable headConfig={headConfig} agendaConfig={agendaConfig} />
			</ContentContainer>
		</HomeEventContainer>
	);
};

export default Agenda;
