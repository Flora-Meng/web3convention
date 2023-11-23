import React from 'react';
import styled from 'styled-components';

import FeaturedEvents from '@/components/Pages/Side-Event/FeaturedEvents';
import MoreEvents from '@/components/Pages/Side-Event/MoreEvents';
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
const PageCoverTitleAdjuster = styled.div`
	padding-top: 20px; // Increase this value to move the title higher on mobile
	transform: translateY(-100%);
	@media ${devices.mobile} {
		padding-top: 20px; // Increase this value to move the title higher on mobile
		transform: translateY(158%);// This moves the title up by its own height on mobile
	}
`;
const SideEventPage = () => {
	const meta = {
		description:
			'Web3 Hackathon is Australia most premier annual hackathon event catered to a global audience to support the next generation of Web3 innovation and products.',
		keywords:
			'University Hackathon, Web3 Hackathon, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Hackathon, AI + Web3 Convention 2024 | April, 2024 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<PageCoverTitleAdjuster>
					<PageCoverTitle coverText={coverText} />
				</PageCoverTitleAdjuster>
			</Cover>
			<FeaturedEvents />
			<MoreEvents />
			<Footer />
		</>
	);
};

export default SideEventPage;
