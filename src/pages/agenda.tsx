import styled from 'styled-components';

import AgendaContent from '@/components/Pages/Agenda/AgendaContent';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/agendaCoverText.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/demo/venuePage/coverMobile.jpg');
	background-position: center;
	background-size: cover;
	height: 478px;
	position: relative;
	@media ${devices.mobile} {
		background-image: url('/images/demo/venuePage/newCover.jpg');
		height: 360px;
		background-size: auto;
	}
`;

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 2;
`;

const AgendaPage = () => {
	const meta = {
		description:
			"AI + Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, Brisbane Convention and Exhibition Centre (BCEC), Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'AI + Web3 Convention 2024 | Agenda'
	};

	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<HeaderContainer>
					<Header />
				</HeaderContainer>
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<AgendaContent />
			<Footer />
		</>
	);
};

export default AgendaPage;
