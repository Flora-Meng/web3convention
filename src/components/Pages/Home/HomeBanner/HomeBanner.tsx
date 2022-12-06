import styled from 'styled-components';

import bannerInfo from './bannerInfo.json';
import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';
import { tagDecoration } from '@/styles/mixin';

const { primaryColor, whiteColor } = color;

interface LeftGridProps {
	imageSrc: string;
}

const GridItem = styled.div<LeftGridProps>`
	background-image: url(${({ imageSrc }) => imageSrc});
	height: 745px;
	background-position: 50% 50%;
	background-size: cover;
`;

const LeftGrid = styled(GridItem)`
	width: 0;
	@media ${devices.tablet} {
		width: 50vw;
	}
`;

const RightGrid = styled(GridItem)`
	width: 100vw;
	color: ${whiteColor};
	padding-left: 20px;
	@media ${devices.tablet} {
		padding-left: 50px;
		width: 50vw;
	}
`;

const InfoContainer = styled.div`
	margin-left: 30px;
	height: inherit;
	margin-right: 50px;
	@media ${devices.tablet} {
		width: 300px;
		margin-left: 60px;
		margin-right: 0;
	}
	@media ${devices.laptop} {
		margin-left: 80px;
		width: 400px;
	}
	@media ${devices.desktop} {
		margin-left: 120px;
	}
`;

const Title = styled.h2`
	font-size: 42px;
	font-weight: 700;
	margin: 0;
	line-height: 1.1;
	margin-bottom: 24px;
`;

const Subtitle = styled.p`
	font-style: italic;
	font-size: 18px;
	margin: 0;
	color: ${primaryColor};
	${tagDecoration()};
`;

const Description = styled.p`
	padding-right: 20px;
	font-size: 15px;
	margin: 0;
	margin-bottom: 40px;
	line-height: 1.8;
`;

const HomeBanner: React.FC = () => {
	return (
		<div className="flex">
			<LeftGrid imageSrc={bannerInfo.imageSrc} />
			<RightGrid imageSrc="/images/demo/main-home-banner-bg.jpg">
				<InfoContainer className="flex flex-col justify-center">
					<Subtitle>{bannerInfo.subtitle}</Subtitle>
					<Title>{bannerInfo.title}</Title>
					<Description>{bannerInfo.description}</Description>
					<ThemeButton href="/comingSoon">registration</ThemeButton>
				</InfoContainer>
			</RightGrid>
		</div>
	);
};

export default HomeBanner;
