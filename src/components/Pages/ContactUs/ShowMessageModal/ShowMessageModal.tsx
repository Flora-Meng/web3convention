import { Box, Modal } from '@mui/material';
import Image from 'next/image';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor } = color;

interface ShowMessageModalProps {
	children: React.ReactNode;
	open: boolean;
	handleClose: () => void;
}

const mobilePaddingLeft = '24px';

const StyledBox = styled(Box)`
	background-color: ${whiteColor};
	border: solid 1px #969696;
	box-shadow: 24px;
	display: flex;
	height: fit-content;
	left: 50%;
	padding: 16px;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	@media ${devices.mobile} {
		width: calc(100vw - 115px);
		border: solid 1px #969696;
	}

	@media ${devices.laptop} {
		width: 424px;
		border: solid 1px #969696;
		height: 90px;
	}
`;

// const StyledButton = styled.div`
// 	bottom: -60px;
// 	cursor: pointer;
// 	height: 44px;
// 	left: calc(50% - ${mobilePaddingLeft});
// 	position: absolute;
// 	width: 44px;
// 	@media${devices.mobile} {
// 		right: -22px;
// 		top: -22px;
// 		left: unset;
// 		bottom: unset;
// 	}
// `;

const ShowMessageModal: React.FC<ShowMessageModalProps> = ({ children, open, handleClose }) => {
	return (
		<Modal open={open}>
			<StyledBox>
				{children}
				{/* <StyledButton onClick={handleClose}>
					<Image
						src="/images/icons/modal-button.svg"
						alt="button"
						loader={imageLoader}
						unoptimized
						fill
					/>
				</StyledButton> */}
			</StyledBox>
		</Modal>
	);
};

export default ShowMessageModal;
