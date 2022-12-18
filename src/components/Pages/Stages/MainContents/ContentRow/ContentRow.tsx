import Image from 'next/image';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

interface ContentRowProps {
	rowCount: number;
	title: string;
	subTitle: string;
	text: string;
	imageSrc: string;
}

const EvenRowContainer = styled.div`
	display: grid;
	grid-template-columns: 80% 1fr;
	@media ${devices.laptop} {
		margin: 80px 0;
		min-height: 40vw;
	}
	@media ${devices.largeLaptop} {
		margin: 120px 0;
	}
	@media ${devices.desktop} {
		margin: 140px 0;
		min-height: 640px;
	}
`;

const OddRowContainer = styled.div`
	display: grid;
	grid-template-columns: 20% 1fr;
	@media ${devices.laptop} {
		margin: 80px 0;
		min-height: 40vw;
	}
	@media ${devices.largeLaptop} {
		margin: 120px 0;
	}
	@media ${devices.desktop} {
		margin: 140px 0;
		min-height: 640px;
	}
`;

const EvenRowImgContainer = styled.div`
	aspect-ratio: 3/2;
	position: relative;
	@media ${devices.laptop} {
		margin-right: 30px;
	}
	@media ${devices.largeLaptop} {
		margin-right: 40px;
	}
	@media ${devices.desktop} {
		margin-right: 60px;
	}
`;

const OddRowImgContainer = styled.div`
	aspect-ratio: 3/2;
	position: relative;
	@media ${devices.laptop} {
		margin-left: 30px;
	}
	@media ${devices.largeLaptop} {
		margin-left: 40px;
	}
	@media ${devices.desktop} {
		margin-left: 60px;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	@media ${devices.laptop} {
		font-size: 25px;
		margin-bottom: 35px;
	}
	@media ${devices.largeLaptop} {
		font-size: 35px;
		margin-bottom: 45px;
	}
	@media ${devices.desktop} {
		font-size: 40px;
		margin-bottom: 50px;
	}
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	@media ${devices.laptop} {
		font-size: 10px;
	}
	@media ${devices.largeLaptop} {
		font-size: 13px;
	}
	@media ${devices.desktop} {
		font-size: 14px;
	}
`;

const TextContainer = styled.div`
	font-weight: 400;
	line-height: 1.5;
	@media ${devices.laptop} {
		font-size: 12px;
	}
	@media ${devices.largeLaptop} {
		font-size: 15px;
	}
	@media ${devices.desktop} {
		font-size: 17px;
	}
`;

const ContentRow: React.FC<ContentRowProps> = props => {
	const { rowCount, title, subTitle, text, imageSrc } = props;
	const isEven = rowCount % 2;
	return isEven ? (
		<EvenRowContainer>
			<EvenRowImgContainer>
				<Image loader={imageLoader} src={imageSrc} alt="content image" fill unoptimized />
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
				<Image loader={imageLoader} src={imageSrc} alt="content image" fill unoptimized />
			</OddRowImgContainer>
		</OddRowContainer>
	);
};

export default ContentRow;
