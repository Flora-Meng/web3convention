import styled from 'styled-components';

import TicketIntroCards from '@/components/Pages/Get-Tickets/TicketIntroCards';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/ticketCoverText.json';
import PageParallax from '@/components/Shares/PageParallax';
import PageTicket from '@/components/Shares/PageTicket';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

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
	return (
		<>
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
