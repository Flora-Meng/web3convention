import styled from 'styled-components';

import TicketIntroCards from '@/components/Pages/Get-Tickets/TicketIntroCards';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/ticketCoverText.json';
import PageParallax from '@/components/Shares/PageParallax';
import PageTicket from '@/components/Shares/PageTicket';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import PageHead from '@/layouts/PageHead';

const Cover = styled.div`
	background-image: url('/images/demo/ticketPage/ticketPageCover.jpeg');
	background-position: center;
	background-size: cover;
	height: 50vh;
`;

const BackgroundBanner = styled.div`
	background-color: #f8f6f6;
	display: grid;
	max-height: 100%;
`;

const GetTicketsPage = () => {
	const meta = {
		description:
			'Web3 Convention is crypto’s most iconic event, bringing together  all sides of blockchain, Web3 and the metaverse. Brush shoulders with entrepreneurs, executives, Web3 creators, asset managers, individual investors, NFT collectors, brand and marketing professionals, government officials blockchain developers, cloud computing providers, and more.',
		keywords:
			'Web3Convention, ICC Sydney, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Convention 2023 | July 22-23, 2023 | Tickets'
	};
	return (
		<>
			<PageHead meta={meta} />
			<BackgroundBanner>
				<Cover>
					<Header />
					<PageCoverTitle coverText={coverText} />
				</Cover>
				<TicketIntroCards />
			</BackgroundBanner>
			<PageTicket />
			<PageParallax />
			<Footer />
		</>
	);
};

export default GetTicketsPage;
