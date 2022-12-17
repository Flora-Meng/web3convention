import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const BannerContainer = styled.div`
	height: 100%;
`;

const TextSection = styled.div`
	color: ${whiteColor};
	height: 300px;
	margin: auto;
	max-width: 1600px;
	padding: 24vh 0;
`;

const BannerSubtitle = styled(Subtitle)`
	color: ${primaryColor};
`;

const BannerTitle = styled(Title)`
	margin-bottom: 120px;
`;

const BannerDescription = styled(Description)`
	font-size: 20px;
	max-width: 600px;
`;
const StageBanner = () => {
	return (
		<BannerContainer>
			<TextSection>
				<BannerSubtitle isCurrent>{banner.subtitle}</BannerSubtitle>
				<BannerTitle isCurrent>{banner.title}</BannerTitle>
				<BannerDescription isCurrent>{banner.text}</BannerDescription>
			</TextSection>
		</BannerContainer>
	);
};

export default StageBanner;
