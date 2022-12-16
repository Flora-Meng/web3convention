import styled from 'styled-components';

import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color } from '@/styles/variables';

const { primaryColor } = color;

const BannerContainer = styled.div`
	background-color: ${primaryColor};
`;

const TextSection = styled.div`
	margin: auto;
	max-width: 1600px;
	padding: 40px 0;
`;

const Title = styled.h1`
	color: black;
	font-family: 'Montserrat', sans-serif;
	font-weight: 800;
`;

const Text = styled.h3`
	color: black;
	font-family: 'Neue Haas Grotesk', sans-serif;
`;
const StageBanner = () => {
	return (
		<BannerContainer>
			<TextSection>
				<Title>{banner.title}</Title>
				<Text>{banner.text}</Text>
			</TextSection>
		</BannerContainer>
	);
};

export default StageBanner;
