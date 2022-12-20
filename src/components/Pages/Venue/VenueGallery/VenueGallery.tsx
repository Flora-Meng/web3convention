import Image from 'next/image';
import styled from 'styled-components';

import gallery from './gallery.json';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	display: flex;
	height: 50vw;
	justify-content: space-between;
`;
const MainLeftSection = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	width: 50%;
`;
const TopSection = styled.div`
	margin: 1% 0.5% 0.5% 0;
	position: relative;
`;
const BottomSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0.5% 0.5% 1% 0;
	position: relative;
`;
const LeftImgContainer = styled.div`
	position: relative;
	width: 49.5%;
`;
const MainRightSection = styled.div`
	display: flex;
	height: 100%;
	justify-content: end;
	width: 50%;
`;
const LeftSection = styled.div`
	margin: 1% 0.5% 1% 0.5%;
	position: relative;
	width: 50%;
`;
const RightSection = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	width: 50%;
`;
const TopRightImgContainer = styled.div`
	margin: 2% 0 1% 1%;
	position: relative;
`;
const BottomRightImgContainer = styled.div`
	margin: 1% 0 2% 1%;
	position: relative;
`;
const VenueGallery = () => {
	return (
		<Container>
			<MainLeftSection>
				<TopSection>
					<Image
						src={gallery[0].imageSrc}
						fill
						unoptimized
						loader={imageLoader}
						alt="gallery image"
					/>
				</TopSection>
				<BottomSection>
					<LeftImgContainer>
						<Image
							src={gallery[1].imageSrc}
							fill
							unoptimized
							loader={imageLoader}
							alt="gallery image"
						/>
					</LeftImgContainer>
					<LeftImgContainer>
						<Image
							src={gallery[2].imageSrc}
							fill
							unoptimized
							loader={imageLoader}
							alt="gallery image"
						/>
					</LeftImgContainer>
				</BottomSection>
			</MainLeftSection>
			<MainRightSection>
				<LeftSection>
					<Image
						src={gallery[3].imageSrc}
						fill
						unoptimized
						loader={imageLoader}
						alt="gallery image"
					/>
				</LeftSection>
				<RightSection>
					<TopRightImgContainer>
						<Image
							src={gallery[4].imageSrc}
							fill
							unoptimized
							loader={imageLoader}
							alt="gallery image"
						/>
					</TopRightImgContainer>
					<BottomRightImgContainer>
						<Image
							src={gallery[5].imageSrc}
							fill
							unoptimized
							loader={imageLoader}
							alt="gallery image"
						/>
					</BottomRightImgContainer>
				</RightSection>
			</MainRightSection>
		</Container>
	);
};

export default VenueGallery;
