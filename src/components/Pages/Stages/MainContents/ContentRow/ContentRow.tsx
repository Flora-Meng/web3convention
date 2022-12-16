import Image from 'next/image';
import styled from 'styled-components';

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
`;

const OddRowContainer = styled.div`
	display: grid;
	grid-template-columns: 40% 1fr;
`;

const StyledImage = styled(Image)``;

const TextContainer = styled.div`
	font-size: 30px;
`;

const ContentRow: React.FC<ContentRowProps> = props => {
	const { rowCount, text, img } = props;
	const isEven = rowCount % 2;
	return isEven ? (
		<EvenRowContainer>
			<StyledImage
				loader={imageLoader}
				src={img}
				alt="content image"
				width={900}
				height={500}
			/>
			<TextContainer>{text}</TextContainer>
		</EvenRowContainer>
	) : (
		<OddRowContainer>
			<TextContainer>{text}</TextContainer>
			<StyledImage
				loader={imageLoader}
				src={img}
				alt="content image"
				width={900}
				height={500}
			/>
		</OddRowContainer>
	);
};

export default ContentRow;
