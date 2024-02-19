import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { animation, animationFillMode, sectionSubtitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface PageBannerProps {
	venueInfo: {
		name: string;
		description: string;
		imageSrc: string;
		venue: string;
		address: string;
		position: {
			lat: number;
			lng: number;
		};
	};
	buttonConfig?: {
		text: string;
		url: string;
		extra?: string;
	};
}

interface LeftGridProps {
	imageSrc: string;
}

const GridItem = styled.div<LeftGridProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	background-position: 50% 50%;
	background-size: cover;
	height: auto;
`;

const LeftGrid = styled(GridItem)`
	width: 0;
	@media ${devices.tablet} {
		width: 50vw;
	}
`;

const RightGrid = styled(GridItem)`
	color: ${whiteColor};
	height: auto;
	padding: 30px 0 30px 20px;
	width: 100vw;
	@media ${devices.tablet} {
		padding-left: 50px;
		width: 50vw;
	}
`;

const InfoContainer = styled.div`
	height: inherit;
	margin-left: 30px;
	margin-right: 50px;
	@media ${devices.tablet} {
		width: 300px;
		margin-left: 60px;
		margin-right: 0;
	}
	@media ${devices.laptop} {
		margin-left: 80px;
		margin-right: 80px;
		width: auto;
		max-width: 545px;
	}
	@media ${devices.desktop} {
		margin-left: 120px;
	}
`;

const Title = styled.h2`
	font-size: 42px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0 0 24px 0;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '0.5s', 'ease', '0.5s', '1')};
	${animationFillMode()};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 15px;
	line-height: 1.8;
	margin: 0 0 40px 0;
	opacity: 0;
	padding-right: 20px;
	white-space: pre-wrap;
	${animation('fade-in-opacity-transform-to-up', '0.5s', 'ease', '0.7s', '1')};
	${animationFillMode()};
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-bottom: 50px;
	@media ${devices.tablet} {
		display: flex;
		flex-direction: row;
		margin-bottom: 100px;
	}
`;

const partnerButtonConfig = {
	text: 'PARTNER WITH US',
	url: '/partners'
};

const PageBanner: React.FC<PageBannerProps> = props => {
	const { venueInfo, buttonConfig } = props;
	return (
		<div className="flex">
			<LeftGrid imageSrc={venueInfo.imageSrc} />
			<RightGrid imageSrc="/images/demo/main-home-banner-bg.jpg">
				<InfoContainer className="flex flex-col justify-center">
					{venueInfo && (
						<>
							<Subtitle>Venue: {venueInfo.venue}</Subtitle>
							<Subtitle>Address: {venueInfo.address}</Subtitle>
						</>
					)}
					<Title>{venueInfo.name}</Title>
					<Description>{venueInfo.description}</Description>

					<ButtonContainer>
						{buttonConfig && (
							<ThemeButton href="/get-tickets">{buttonConfig.text}</ThemeButton>
						)}
						<ThemeButton href={partnerButtonConfig.url}>
							{partnerButtonConfig.text}
						</ThemeButton>
					</ButtonContainer>
				</InfoContainer>
			</RightGrid>
		</div>
	);
};

export default PageBanner;
