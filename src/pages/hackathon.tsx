import styled from 'styled-components';

import Agenda from '@/components/Pages/Hackathon/Agenda';
import Benefits from '@/components/Pages/Hackathon/Benefits';
import Challenge from '@/components/Pages/Hackathon/Challenge';
import StageCoverTitle from '@/components/Pages/Hackathon/CoverTitle/HackathonCoverTitle';
import JudgeCriteria from '@/components/Pages/Hackathon/JudgeCriteria';
import JudgeTeam from '@/components/Pages/Hackathon/JudgeTeam';
import Prizes from '@/components/Pages/Hackathon/Prizes';
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
			'Web3 Hackathon is Australia most premier annual hackathon event catered to a global audience to support the next generation of Web3 innovation and products.',
		keywords:
			'University Hackathon, Web3 Hackathon, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Hackathon, Web3 Convention 2024 | April, 2024 | Stages'
	};

	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<StageCoverTitle />
			</Cover>
			<Challenge />
			<PageBanner bannerInfo={uniHackathon} />
			<Agenda />
			<WhyHackathon />
			<Prizes />
			<Benefits />
			<JudgeTeam />
			<JudgeCriteria />
			<Footer />
		</>
	);
};

export default HackathonPage;
