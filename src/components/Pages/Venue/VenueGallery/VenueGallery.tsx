import Image from 'next/image';
import styled from 'styled-components';

import Presentation from '@/assets/images/brisbane-auditorium-presentation.png';
import Gala from '@/assets/images/brisbane-event-gala-setup.png';
import Dinning from '@/assets/images/brisbane-gallery-dining-setup.png';
import Console from '@/assets/images/brisbane-stage-mixing-console.png';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	background-color: ${color.blackColor};
	padding: 24px;
	@media ${devices.largeLaptop} {
		height: 700px;
		position: relative;
		padding: 150px 6px 150px 6px;
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
		justify-content: center;
	}
`;
const StyledImage = styled(Image)`
	margin-bottom: 32px;
	@media ${devices.largeLaptop} {
		width: auto;
		height: 300px;
		margin-right: 16px;
	}
`;
const ConsoleImage = styled(StyledImage)`
	margin-bottom: 113px;
	@media ${devices.largeLaptop} {
		margin-bottom: 32px;
	}
`;
const VenueGallery = () => {
	return (
		<Container>
			<BoldText>BCEC</BoldText>
			<ImageWrapper>
				<StyledImage
					src={Dinning.src}
					alt="Presentation"
					width={327}
					height={283}
					loader={imageLoader}
				/>
				<StyledImage
					src={Presentation.src}
					alt="Presentation"
					width={327}
					height={283}
					loader={imageLoader}
				/>
				<StyledImage
					src={Gala.src}
					alt="Presentation"
					width={327}
					height={283}
					loader={imageLoader}
				/>
				<ConsoleImage
					src={Console.src}
					alt="Presentation"
					width={327}
					height={283}
					loader={imageLoader}
				/>
			</ImageWrapper>
		</Container>
	);
};

export default VenueGallery;
