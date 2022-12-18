import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Stages/Banner/banner.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const BannerContainer = styled.div`
	position: relative;
	top: 50%;
	transform: translate(0, calc(-50% - 120px));
`;

const TextSection = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1440px;
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
	@media ${devices.largeLaptop} {
	}
	@media ${devices.desktop} {
		width: 80vw;
	}
`;

const BannerSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.laptop} {
		font-size: 13px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 16px;
	}
`;

const BannerTitle = styled(Title)`
	margin-bottom: 120px;
	@media ${devices.laptop} {
		font-size: 40px;
	}
	@media ${devices.largeLaptop} {
		font-size: 48px;
	}
	@media ${devices.desktop} {
		font-size: 54px;
	}
`;

const BannerDescription = styled(Description)`
	max-width: 70%;
	@media ${devices.laptop} {
		font-size: 13px;
	}
	@media ${devices.largeLaptop} {
		font-size: 18px;
	}
	@media ${devices.desktop} {
		font-size: 20px;
	}
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
