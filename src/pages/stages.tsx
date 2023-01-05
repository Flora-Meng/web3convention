import styled from 'styled-components';

import StageCoverTitle from '@/components/Pages/Stages/CoverTitle/StageCoverTitle';
import MainContents from '@/components/Pages/Stages/MainContents';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/mainstage.jpeg');
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	@media ${devices.miniMobile} {
		height: 85vh;
	}
	@media ${devices.tablet} {
		height: 50vh;
	}
`;
const StagePage = () => {
	const meta = {
		description:
			"Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2023 | July 22-23, 2023 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<MainContents />
			<Footer />
		</>
	);
};

export default StagePage;
