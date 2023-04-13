import { Box, Modal, Typography } from '@mui/material';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { darkPrimaryColor, warningColor, InfoColor } = color;

interface IMessage {
	[key: string]: {
		title: string;
		description: string;
	};
}

interface ApplicationModalProps {
	message?: string;
	open: boolean;
	handleClose: () => void;
}

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

// const StyledBox = styled(Box)`
// 	background-color: 'background.paper';
// 	border: '2px solid #000';
// 	box-shadow: 24;
// 	left: '50%';
// 	position: 'absolute';
// 	top: '50%';
// 	transform: 'translate(-50%, -50%)';
// 	width: 400;
// `;

const messageType: IMessage = {
	success: {
		title: 'Thank You!',
		description: 'Your Application has been accepted!'
	},
	error: {
		title: 'Error!',
		description:
			'Sorry, there seems to be an error with your application. Please fill in all the required fields.'
	}
};
const SuccessApplication: React.FC<ApplicationModalProps> = ({ message, open, handleClose }) => {
	return message ? (
		<Modal open={open} onClose={handleClose}>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					{messageType[message].title}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{messageType[message].description}
				</Typography>
			</Box>
		</Modal>
	) : null;
};

export default SuccessApplication;
