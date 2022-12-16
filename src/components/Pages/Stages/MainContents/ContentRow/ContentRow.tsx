import Image from 'next/image';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import imageLoader from '@/utils/loader';

interface ContentRowProps {
	rowCount: number;
	text: string;
	img: string;
}

const EvenRowContainer = styled.div`
	display: grid;
	grid-template-columns: 60% 1fr;
	margin: 100px 0;
	min-height: 500px;
`;

const OddRowContainer = styled.div`
	display: grid;
	grid-template-columns: 40% 1fr;
	margin: 100px 0;
	min-height: 500px;
`;

const EvenRowImgContainer = styled.div`
	margin-right: 50px;
	position: relative;
`;

const OddRowImgContainer = styled.div`
	margin-left: 50px;
	position: relative;
`;

const StyledImage = styled(Image)``;

const TextContainer = styled.div`
	font-size: 30px;
`;

const Title = styled.h2`
	${sectionTitle};
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const ContentRow: React.FC<ContentRowProps> = props => {
	const { rowCount, text, img } = props;
	const isEven = rowCount % 2;
	return isEven ? (
		<EvenRowContainer>
			<EvenRowImgContainer>
				<StyledImage loader={imageLoader} src={img} alt="content image" fill />
			</EvenRowImgContainer>
			<div>
				<Subtitle>SubTitle</Subtitle>
				<Title>Title</Title>
				<TextContainer>{text}</TextContainer>
			</div>
		</EvenRowContainer>
	) : (
		<OddRowContainer>
			<div>
				<Subtitle>SubTitle</Subtitle>
				<Title>Title</Title>
				<TextContainer>{text}</TextContainer>
			</div>
			<OddRowImgContainer>
				<StyledImage loader={imageLoader} src={img} alt="content image" fill />
			</OddRowImgContainer>
		</OddRowContainer>
	);
};

export default ContentRow;
