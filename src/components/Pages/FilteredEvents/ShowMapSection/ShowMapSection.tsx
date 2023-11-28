import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import ShowOnMapModal from './ShowOnMapModal';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;

const Container = styled.div`
	margin-bottom: 60px;
`;

const MapContainer = styled.div`
	background-image: url('/images/smallMapBackground.png');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 200px;
	position: relative;
`;

const InfoContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	gap: 24px;
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
	background-color: rgba(82, 246, 198, 0.1);
	border: solid 1px ${primaryColor};
	border-radius: 30px;
	color: ${primaryColor};
	cursor: pointer;
	font-weight: 700;
	height: 44px;
	width: 170px;
`;

const ShowMapSection = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Container>
			<MapContainer>
				<InfoContainer>
					<Image
						src="images/icons/locationPinIcon.png"
						alt="pin"
						width={39}
						height={48}
						loader={imageLoader}
					/>
					<StyledButton onClick={handleOpen}>Show on the map</StyledButton>
				</InfoContainer>
				<ShowOnMapModal open={open} handleClose={handleClose}>
					<div>This is Show On The Map Modal</div>
				</ShowOnMapModal>
			</MapContainer>
		</Container>
	);
};

export default ShowMapSection;
