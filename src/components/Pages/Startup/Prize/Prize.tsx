import styled from 'styled-components';

import ColorfulCard from '@/components/Shares/ColorfulCard';
import prize from '@/components/Shares/ColorfulCard/Prize.json';
import { animation, animationFillMode, sectionSubtitle } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	width: 100%;
`;
const ContentWrapper = styled.div`
	margin: 0 auto;
	margin-bottom: 113px;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
		padding: 0 40px;
	}
	@media ${devices.largeLaptop} {
	}
`;
const Title = styled.h2`
	color: ${color.whiteColor};
	font-size: 42px;
	font-weight: 700;
	line-height: 1.1;
	margin: 0 0 40px 0;
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '0.5s', 'ease', '0.5s', '1')};
	${animationFillMode()};
`;
const SectionSubtitle = styled.p`
	${sectionSubtitle};
`;
const Prize = () => {
	return (
		<Container>
			<ContentWrapper>
				<SectionSubtitle>AI + Web3 Convention 2024</SectionSubtitle>
				<Title>Prize</Title>
				<ColorfulCard ColorfulCardInfo={prize} />
			</ContentWrapper>
		</Container>
	);
};

export default Prize;
