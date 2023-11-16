import React from 'react';
import styled from 'styled-components';

import MoreEvents from '@/components/Pages/General-Events/MoreEvents';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/generalEventsCoverText.json';
import ShowOnMapModal from '@/components/Shares/ShowOnMapModal';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/generalEventsHeaderBG.png');
	background-position: center;
	background-size: cover;
	font-family: Arial;
	height: 478px;
	letter-spacing: 0.78px;
	@media ${devices.mobile} {
		background-image: url('/images/background/generalEventsHeaderBG.png');
		height: 360px;
		background-size: auto;
	}
`;

const GeneralEventsPage = () => {
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
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<MoreEvents />
			<Footer />

			<h1>this is GeneralEventsPage</h1>
		</>
	);
};

export default GeneralEventsPage;
