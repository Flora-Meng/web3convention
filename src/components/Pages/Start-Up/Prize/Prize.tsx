import styled from 'styled-components';

import Prizedata from './Prize.json';
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
const StyledGridContainer = styled.div`
	display: grid;
	gap: 50px;
	position: relative;
	@media ${devices.tablet} {
		column-gap: 40px;
		row-gap: 60px;
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${devices.largeLaptop} {
		column-gap: 60px;
		row-gap: 66px;
		grid-template-columns: repeat(3, 360px);
	}
`;
const StyledGridItem = styled.div`
	background-color: #131313;
	height: 346px;
	max-width: 368px;
	position: relative;
`;
const SubTitle = styled.p`
	background-color: #ecf652;
	color: ${color.blackcolor};
	font-size: 24px;
	font-weight: bold;
	height: 58px;
	margin: 0 0 24px;
	max-width: 368px;
	padding: 17px 24px;
`;
const DescriptionList = styled.ul`
	padding: 0 24px 0 36px;
`;

const DescriptionItem = styled.li`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 16px;
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
				<StyledGridContainer>
					{Prizedata.map(prize => (
						<StyledGridItem key={prize.title}>
							<SubTitle>{prize.title}</SubTitle>
							<DescriptionList>
								{prize.description.map((item, index) => (
									// eslint-disable-next-line react/no-array-index-key
									<DescriptionItem key={index}>{item}</DescriptionItem>
								))}
							</DescriptionList>
						</StyledGridItem>
					))}
				</StyledGridContainer>
			</ContentWrapper>
		</Container>
	);
};

export default Prize;
