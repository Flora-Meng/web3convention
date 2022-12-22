import styled from 'styled-components';

import intro from './TicketIntroCard/intro.json';
import TicketIntroCard from '@/components/Pages/Get-Tickets/TicketIntroCards/TicketIntroCard';
import { devices } from '@/styles/variables';

const Container = styled.div`
	max-width: 1600px;
	position: relative;
	@media ${devices.miniMobile} {
		display: grid;
		row-gap: 30px;
		width: 100vw;
		margin: 20px auto;
	}
	@media ${devices.mobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		width: calc(100vw - 100px);
		margin: 50px auto;
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
		margin: 70px auto;
	}
	@media ${devices.desktop} {
		margin: 90px auto;
	}
`;
const TicketIntroCards: React.FC = () => {
	return (
		<Container>
			{intro.map(cardContent => (
				<TicketIntroCard
					key={cardContent._id}
					imageSrc={cardContent.imageSrc}
					title={cardContent.title}
					description={cardContent.text}
				/>
			))}
		</Container>
	);
};

export default TicketIntroCards;
