import styled from 'styled-components';

import Agenda from '@/components/Pages/Hackathon/Agenda';
import StageCoverTitle from '@/components/Pages/Hackathon/CoverTitle/HackathonCoverTitle';
import JudgeCriteria from '@/components/Pages/Hackathon/JudgeCriteria';
import JudgeTeam from '@/components/Pages/Hackathon/JudgeTeam';
import WhyHackathon from '@/components/Pages/Hackathon/WhyHackathon';
import PageBanner from '@/components/Shares/PageBanner';
import uniHackathon from '@/components/Shares/PageBanner/uniHackathon.json';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/hackathon-bg.jpeg');
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

const HackathonPage = () => {
	const meta = {
		description:
			"Web3 Convention is an event to explore the future of Web 2.0 and Web 3.0 and will host in the best convention centre in Australia.  The convention aims to bridge the gap between Web2 and Web3 communities.Hosted in Australia's premier convention centre, attendees can take part in events focused on blockchain, Data & AI, cloud computing, startup pitching, digital transformation, venture capital.",
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Hackathon, Web3 Convention 2024 | April, 2024 | Stages'
	};
	const buttonConfig = {
		text: 'Apply to hack',
		url: '#',
		extra: 'Interested in partnering? business@web3convention.com'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<PageBanner bannerInfo={uniHackathon} buttonConfig={buttonConfig} />
			<Agenda />
			<WhyHackathon />
			<JudgeTeam />
			<JudgeCriteria />
			<Footer />
		</>
	);
};

export default HackathonPage;
