import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import styled from 'styled-components';

import { color } from '@/styles/variables';

const { primaryColor, whiteColor } = color;

interface DropDownMenuButtonProps {
	handleClick: () => void;
}

const DrawerButton = styled(Button)({
	color: primaryColor,
	backgroundColor: whiteColor,
	minWidth: 'unset',
	height: 'fit-content',
	borderRadius: 0,
	padding: '12px',
	'&:hover': {
		backgroundColor: whiteColor,
		boxShadow: '1px 1px 8px 0 rgb(80 214 174 / 63)'
	}
});

const DropDownMenuButton: React.FC<DropDownMenuButtonProps> = ({ handleClick }) => {
	return (
		<DrawerButton disableRipple onClick={handleClick}>
			<MenuIcon fontSize="small" />
		</DrawerButton>
	);
};

export default DropDownMenuButton;
