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
			'Web3 Convention is crypto’s most iconic event, bringing together  all sides of blockchain, Web3 and the metaverse. Brush shoulders with entrepreneurs, executives, Web3 creators, asset managers, individual investors, NFT collectors, brand and marketing professionals, government officials blockchain developers, cloud computing providers, and more.',
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
