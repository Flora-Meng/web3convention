import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

interface CardCategory {
	title: string;
	description: string[];
	color: string;
	format: string;
}

interface ColorfulCardProps {
	ColorfulCardInfo: CardCategory[]; // Array of PrizeCategory
}
const ContentWrapper = styled.div`
	margin: 0 auto;
	margin-bottom: 113px;
	max-width: 1440px;
	width: 100%;
	@media ${devices.tablet} {
	}
	@media ${devices.largeLaptop} {
	}
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
	background-color: ${(props: { color: string }) => props.color};
	color: ${color.blackcolor};
	font-size: 24px;
	font-weight: bold;
	height: 58px;
	margin: 0 0 24px;
	max-width: 368px;
	padding: 17px 24px;
`;
const DescriptionList = styled.ul`
	padding: 0 24px;
`;

const LiParagraph = styled.li`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin: 0 0 16px 12px;
`;
const Paragraph = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 16px;
`;
const getStyledComponentForFormat = (format: string) => {
	switch (format) {
		case 'li':
			return LiParagraph;
		case 'p':
			return Paragraph;
		default:
			return Paragraph;
	}
};
const ColorfulCard: React.FC<ColorfulCardProps> = ({ ColorfulCardInfo }) => {
	return (
		<ContentWrapper>
			<StyledGridContainer>
				{ColorfulCardInfo.map(prize => (
					<StyledGridItem key={prize.title}>
						<SubTitle color={prize.color}>{prize.title}</SubTitle>
						<DescriptionList>
							{prize.description.map(item => {
								const descriptionItem = getStyledComponentForFormat(prize.format);
								const DescriptionItem = descriptionItem as React.ElementType;
								return <DescriptionItem key={item}>{item}</DescriptionItem>;
							})}
						</DescriptionList>
					</StyledGridItem>
				))}
			</StyledGridContainer>
		</ContentWrapper>
	);
};

export default ColorfulCard;
