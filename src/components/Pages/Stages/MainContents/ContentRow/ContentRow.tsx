import Image from 'next/image';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import imageLoader from '@/utils/loader';

interface ContentRowProps {
	rowCount: number;
	title: string;
	subTitle: string;
	text: string;
	img: string;
}

const EvenRowContainer = styled.div`
	display: grid;
	grid-template-columns: 80% 1fr;
	margin: 100px 0;
	min-height: 700px;
`;

const OddRowContainer = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr;
	margin: 100px 0;
	min-height: 700px;
`;

const EvenRowImgContainer = styled.div`
	margin-right: 50px;
	max-height: 700px;
	position: relative;
`;

const OddRowImgContainer = styled.div`
	margin-left: 50px;
	max-height: 700px;
	position: relative;
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const TextContainer = styled.div`
	font-size: 17px;
	font-weight: 400;
	line-height: 2;
`;

const ContentRow: React.FC<ContentRowProps> = props => {
	const { rowCount, title, subTitle, text, img } = props;
	const isEven = rowCount % 2;
	return isEven ? (
		<EvenRowContainer>
			<EvenRowImgContainer>
				<Image loader={imageLoader} src={img} alt="content image" fill unoptimized />
			</EvenRowImgContainer>
			<section>
				<Subtitle>{subTitle}</Subtitle>
				<Title>{title}</Title>
				<TextContainer>{text}</TextContainer>
			</section>
		</EvenRowContainer>
	) : (
		<OddRowContainer>
			<section>
				<Subtitle>{subTitle}</Subtitle>
				<Title>{title}</Title>
				<TextContainer>{text}</TextContainer>
			</section>
			<OddRowImgContainer>
				<Image loader={imageLoader} src={img} alt="content image" fill unoptimized />
			</OddRowImgContainer>
		</OddRowContainer>
	);
};

export default ContentRow;
