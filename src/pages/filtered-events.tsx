import styled from 'styled-components';

import MainContents from '@/components/Pages/FilteredEvents/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-color: #000;
	@media ${devices.miniMobile} {
		height: 25vh;
	}
	@media ${devices.tablet} {
		height: 20vh;
	}
`;
const FilteredEventsPage = () => {
	const meta = {
		description:
			"AI + Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, Brisbane Convention and Exhibition Centre (BCEC), Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'AI + Web3 Convention 2024 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};

export default FilteredEventsPage;
