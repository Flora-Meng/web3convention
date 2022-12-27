import styled from 'styled-components';

import intro from './TicketIntroCard/intro.json';
import TicketIntroCard from '@/components/Pages/Get-Tickets/TicketIntroCards/TicketIntroCard';
import { devices } from '@/styles/variables';

const Container = styled.div`
	max-width: 1800px;
	position: relative;
	@media ${devices.miniMobile} {
		display: grid;
		row-gap: 30px;
		margin: 0 0 30px 0;
	}
	@media ${devices.mobile} {
		margin: 30px auto;
		padding: 0 50px;
		width: 100%;
	}
	@media ${devices.tablet} {
		display: flex;
		justify-content: space-between;
		margin: 50px auto;
	}
	@media ${devices.laptop} {
		padding: 0 100px;
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
