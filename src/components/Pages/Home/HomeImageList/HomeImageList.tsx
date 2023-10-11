import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import imageList from './imageList.json';
import {
	animationHoverImage,
	animationHoverImageParent,
	sectionSubtitle,
	sectionTitle,
	tagDecoration
} from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor, whiteColor } = color;

const ImageListContainer = styled(Grid)`
	padding: 8px 0;
	@media ${devices.laptop} {
		padding: 12px 0;
	}
`;

const ImageItem = styled(Link)`
	${animationHoverImageParent()};
	cursor: pointer;
	height: 50vw;
	margin: 12px 24px;
	position: relative;
	@media ${devices.mobile} {
		height: 32vw;
	}
	@media ${devices.tablet} {
		height: 18vw;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage()};
	object-fit: cover;
`;

const Subtitle = styled.p`
	color: ${primaryColor};
	font-size: 12px;
	font-style: italic;
	letter-spacing: 0.1rem;
	${tagDecoration()};
	margin: 0;
`;

const Label = styled.div`
	bottom: 0;
	color: ${whiteColor};
	font-size: 24px;
	font-weight: 700;
	padding-left: 15px;
	position: absolute;
	text-shadow: 0 0 10px #000000;
	@media ${devices.laptop} {
		font-size: 28px;
	}
`;
const Title = styled.div`
	margin: 5px 0 20px;
`;

const HomeImageList: React.FC = () => {
	return (
		<ImageListContainer container>
			{imageList.map((item, idx) => {
				const laptopWidth = [7, 5, 5, 7];
				return (
					<Grid
						item
						mobile={12}
						tablet={6}
						laptop={laptopWidth[idx % 4]}
						largeLaptop={laptopWidth[idx % 4]}
						key={item._id}
					>
						<ImageItem href={item.href}>
							<StyledImage
								loader={imageLoader}
								src={item.imageSrc}
								alt={item.label}
								fill
								unoptimized
								loading="lazy"
							/>
							<Label>
								<Subtitle>{item.subtitle}</Subtitle>
								<Title>{item.label}</Title>
							</Label>
						</ImageItem>
					</Grid>
				);
			})}
		</ImageListContainer>
	);
};

export default HomeImageList;
