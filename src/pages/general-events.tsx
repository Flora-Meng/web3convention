import React from 'react';
import styled from 'styled-components';

import eventInfo from '../components/Shares/EventCard/eventInfo.json';

import EventCard from '@/components/Shares/EventCard';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/generalEventsCoverText.json';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const Cover = styled.div`
	background-image: url('/images/background/generalEventsHeaderBG.png');
	background-position: center;
	background-size: cover;
	@media ${devices.miniMobile} {
		height: 478px;
	}
	@media ${devices.largerLaptop} {
		height: 360px;
	}
`;

const PageCoverTitleContainer = styled.div`
	font-family: Arial;
	letter-spacing: 0.78px;
	margin-top: 104px;
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
				<PageCoverTitleContainer>
					<PageCoverTitle coverText={coverText} />
				</PageCoverTitleContainer>
			</Cover>
			<h1>this is GeneralEventsPage</h1>
			<EventCard {...eventInfo[0]} />
		</>
	);
};

export default GeneralEventsPage;
