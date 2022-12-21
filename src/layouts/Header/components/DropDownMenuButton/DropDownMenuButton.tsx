import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

import { color } from '@/styles/variables';

const { primaryColor, textColor, whiteColor } = color;

interface DropDownMenuButtonProps {
	handleClick: () => void;
}

const DrawerButton = styled.button`
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	background-color: ${whiteColor};
	border: none;
	border-radius: 0;
	color: ${textColor};
	cursor: pointer;
	height: fit-content;
	min-width: unset;
	padding: 12px;
	transition: all 0.5s;
	&:hover {
		box-shadow: 1px 1px 8px 0 rgb(80 214 174 / 63);
		color: ${primaryColor};
	}
`;

const DropDownMenuButton: React.FC<DropDownMenuButtonProps> = ({ handleClick }) => {
	return (
		<DrawerButton onClick={handleClick}>
			<MenuIcon fontSize="small" />
		</DrawerButton>
	);
};

export default DropDownMenuButton;
