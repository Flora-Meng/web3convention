import Image from 'next/image';
import styled from 'styled-components';

import Lobby from '@/assets/images/brisbane-busy-lobby.jpg';
import ConcertLight from '@/assets/images/brisbane-concert-lights.jpg';
import Building from '@/assets/images/brisbane-modern-building.jpg';
import TradeShow from '@/assets/images/brisbane-trade-show.jpg';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	@media ${devices.largeLaptop} {
		height: 700px;
		position: relative;
		padding: 150px 16px;
	}
`;
const BoldText = styled.p`
	color: ${color.whiteColor};
	font-size: 70px;
	font-weight: bold;
	margin-bottom: 16px;
	margin-top: 0;
	opacity: 0.11;
	@media ${devices.largeLaptop} {
		position: absolute;
		top: 456px;
		right: 80px;
		font-size: 230px;
	}
`;
const ImageWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	@media ${devices.largeLaptop} {
		flex-direction: row;
		justify-content: space-evenly;
		width: 100%;
	}
`;
const StyledImage = styled(Image)`
	margin-bottom: 32px;
	@media ${devices.largeLaptop} {
		width: 345px;
		height: 300px;
		margin-right: 16px;
	}
	@media ${devices.desktop} {
		width: 460px;
		height: 350px;
	}
`;
const LobbyImage = styled(StyledImage)`
	margin-bottom: 113px;
	@media ${devices.largeLaptop} {
		margin-right: 0;
		margin-bottom: 32px;
	}
`;
const VenueGallery = () => {
	return (
		<Container>
			<BoldText>BCEC</BoldText>
			<ImageWrapper>
				<StyledImage
					src={ConcertLight.src}
					alt="Dinner"
					width={327}
					height={283}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<StyledImage
					src={TradeShow.src}
					alt="Presentation"
					width={327}
					height={283}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<StyledImage
					src={Building.src}
					alt="Gala Setup"
					width={327}
					height={283}
					loader={imageLoader}
					unoptimized
					priority
				/>
				<LobbyImage
					src={Lobby.src}
					alt="Mixing Console"
					width={327}
					height={283}
					loader={imageLoader}
					unoptimized
					priority
				/>
			</ImageWrapper>
		</Container>
	);
};

export default VenueGallery;
