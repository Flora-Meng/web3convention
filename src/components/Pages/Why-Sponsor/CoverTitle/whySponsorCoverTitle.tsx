import styled from 'styled-components';

import {
	Description,
	Subtitle,
	Title
} from '@/components/Pages/Home/HomeCarousel/components/CarouseItem/CarouseItem';
import coverText from '@/components/Pages/Why-Sponsor/CoverTitle/whySponsorCoverText.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';

const { whiteColor, primaryColor } = color;

const Container = styled.div`
	color: ${whiteColor};
	margin: 0 auto;
	max-width: 1600px;
	position: relative;
	top: 50%;
	@media ${devices.miniMobile} {
		transform: translate(0, calc(-50% - 40px));
		width: calc(100vw - 100px);
	}
	@media ${devices.tablet} {
		transform: translate(0, calc(-50% - 30px));
	}
	@media ${devices.laptop} {
		transform: translate(0, calc(-50% - 70px));
		width: calc(100vw - 200px);
	}
	@media ${devices.desktop} {
		transform: translate(0, calc(-50% - 90px));
	}
`;

const CoverSubtitle = styled(Subtitle)`
	color: ${primaryColor};
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		font-size: 12px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 17px;
	}
`;

const CoverTitle = styled(Title)`
	white-space: pre-wrap;
	@media ${devices.miniMobile} {
		margin-bottom: 20px;
		font-size: 30px;
	}
	@media ${devices.tablet} {
		font-size: 36px;
	}
	@media ${devices.laptop} {
		font-size: 50px;
		margin-bottom: 24px;
	}
	@media ${devices.desktop} {
		font-size: 75px;
	}
`;

const CoverDescription = styled(Description)`
	@media ${devices.miniMobile} {
		font-size: 14px;
	}
	@media ${devices.tablet} {
		max-width: 85%;
		font-size: 16px;
	}
	@media ${devices.laptop} {
		max-width: 70%;
	}
	@media ${devices.desktop} {
		font-size: 17px;
	}
`;

const CoverAdditionalDescription = styled(Description)`
	color: ${primaryColor};
	line-height: 1;
	margin-top: 5px;
	@media ${devices.miniMobile} {
		font-size: 10px;
	}
	@media ${devices.tablet} {
		max-width: 85%;
		font-size: 12px;
		line-height: 1.33;
	}
	@media ${devices.desktop} {
		font-size: 14px;
	}
`;

const ButtonWrapper = styled.div`
	margin-top: 20px;
`;

const sponsorButtonConfig = {
	text: 'BECOME A SPONSOR NOW',
	url: 'https://w3con.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Fweb3convention%2Fsponsorship'
};

const StageCoverTitle = () => {
	return (
		<Container>
			<CoverSubtitle isCurrent>{coverText.subtitle}</CoverSubtitle>
			<CoverTitle isCurrent>{coverText.title}</CoverTitle>
			<CoverDescription isCurrent>{coverText.text}</CoverDescription>
			<ButtonWrapper>
				<ThemeButton href={sponsorButtonConfig.url}>{sponsorButtonConfig.text}</ThemeButton>
			</ButtonWrapper>
			<CoverAdditionalDescription isCurrent>
				{coverText.additionalText}
			</CoverAdditionalDescription>
		</Container>
	);
};

export default StageCoverTitle;
