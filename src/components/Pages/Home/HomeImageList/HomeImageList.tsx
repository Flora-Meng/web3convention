import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import imageList from './imageList.json';
import { animationHoverImage, animationHoverImageParent } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor } = color;

const ImageListContainer = styled(Grid)`
	padding: 8px 0;
	@media ${devices.laptop} {
		padding: 12px 0;
	}
`;

const ImageListItem = styled(Link)`
	${animationHoverImageParent()};
	cursor: pointer;
	height: 50vw;
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

const Label = styled.p`
	bottom: 0;
	color: ${whiteColor};
	font-size: 24px;
	font-weight: 700;
	left: 30px;
	position: absolute;
	@media ${devices.laptop} {
		font-size: 28px;
		left: 50px;
	}
`;

const HomeImageList: React.FC = () => {
	return (
		<ImageListContainer
			container
			spacing={{ mobile: 1, tablet: 1, laptop: 1, largeLaptop: 1.5 }}
		>
			{imageList.map(item => (
				<Grid
					item
					mobile={12}
					tablet={6}
					laptop={3}
					largeLaptop={3}
					key={item.label}
					className="relative"
				>
					<ImageListItem href={item.href}>
						<StyledImage
							loader={imageLoader}
							src={item.imageSrc}
							alt={item.label}
							fill
						/>
					</ImageListItem>
					<Label>{item.label}</Label>
				</Grid>
			))}
		</ImageListContainer>
	);
};

export default HomeImageList;
