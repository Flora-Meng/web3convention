import styled from 'styled-components';

import {
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import banner from '@/components/Pages/Venue/Banner/venuePageBanner.json';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const BannerContainer = styled.div`
	position: relative;
	top: 50%;
	transform: translate(0, -100%);
`;

const TextContainer = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	@media ${devices.miniMobile} {
		width: calc(100vw - 100px);
	}
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
`;

const BannerSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		font-size: 13px;
	}
	@media ${devices.largeLaptop} {
		font-size: 16px;
	}
	@media ${devices.desktop} {
		font-size: 18px;
	}
`;

const BannerTitle = styled(Title)`
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		//margin-bottom: 60px;
		font-size: 40px;
	}
	@media ${devices.tablet} {
		//margin-bottom: 120px;
		font-size: 60px;
	}
	@media ${devices.largeLaptop} {
		font-size: 70px;
	}
	@media ${devices.desktop} {
		font-size: 90px;
	}
`;

const StageBanner = () => {
	return (
		<BannerContainer>
			<TextContainer>
				<BannerSubtitle isCurrent>{banner.subtitle}</BannerSubtitle>
				<BannerTitle isCurrent>{banner.title}</BannerTitle>
			</TextContainer>
		</BannerContainer>
	);
};

export default StageBanner;
