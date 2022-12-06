import Link from 'next/link';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

import imageList from './imageList.json';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { animationHoverImage, animationHoverImageParent } from '@/styles/mixin';

const { whiteColor } = color;

const ImageListContainer = styled(Grid)`
	padding: 8px 0;
	@media ${devices.laptop} {
		padding: 12px 0;
	}
`;

const ImageListItem = styled(Link)`
	${animationHoverImageParent};

	position: relative;
	height: 50vw;
	cursor: pointer;
	@media ${devices.mobile} {
		height: 32vw;
	}
	@media ${devices.tablet} {
		height: 18vw;
	}
`;

const StyledImage = styled(Image)`
	${animationHoverImage};
`;

const Label = styled.p`
	position: absolute;
	bottom: 0;
	font-size: 24px;
	left: 30px;
	color: ${whiteColor};
	font-weight: 700;
	@media ${devices.laptop} {
		font-size: 28px;
		left: 50px;
	}
`;

const HomeImageList: React.FC = () => {
	return (
		<ImageListContainer container spacing={{ xs: 1, sm: 1, md: 1, lg: 1.5 }}>
			{imageList.map(item => (
				<Grid item xs={12} sm={6} md={3} lg={3} key={item.label} className="relative">
					<ImageListItem href={item.href}>
						<StyledImage
							loader={imageLoader}
							src={item.imageSrc}
							alt={item.label}
							unoptimized
							layout="fill"
							objectFit="cover"
						/>
					</ImageListItem>
					<Label>{item.label}</Label>
				</Grid>
			))}
		</ImageListContainer>
	);
};

export default HomeImageList;
