import styled from 'styled-components';

import { color } from '@/styles/variables';

interface CardCategory {
	cardInfo: {
		title: string;
		subtitle?: string;
		description: string[];
		color: string;
	};
	format: string;
}
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
const CardTitle = styled.p`
	color: ${color.whiteColor};
	font-size: 20px;
	font-weight: bold;
	margin: 0 24px 16px;
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
const ColorfulCard: React.FC<CardCategory> = ({ cardInfo, format }) => {
	return (
		<StyledGridItem key={cardInfo.title}>
			<SubTitle color={cardInfo.color}>{cardInfo.title}</SubTitle>
			{cardInfo.subtitle && <CardTitle>{cardInfo.subtitle}</CardTitle>}
			<DescriptionList>
				{cardInfo.description.map(item => {
					const DescriptionItem = (
						format === 'li' ? LiParagraph : Paragraph
					) as React.ElementType;
					return <DescriptionItem key={item}>{item}</DescriptionItem>;
				})}
			</DescriptionList>
		</StyledGridItem>
	);
};

export default ColorfulCard;
