import styled from 'styled-components';

import intro from './IntroCard/intro.json';
import IntroCard from '@/components/Pages/Venue/VenuIntro/IntroCard';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 120px auto;
	position: relative;
	width: 80%;
`;
const VenueIntro: React.FC = () => {
	return (
		<Container>
			{intro.map(cardContent => (
				<IntroCard
					key={cardContent._id}
					imageSrc={cardContent.imageSrc}
					title={cardContent.title}
					description={cardContent.text}
				/>
			))}
		</Container>
	);
};

export default VenueIntro;
