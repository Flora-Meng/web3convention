import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styled from 'styled-components';

import NavDrawer from './components/NavDrawer';
import { color } from '@/styles/variables';
import { disableMUIButtonHoverCss } from '@/styles/mixin';

const { primaryColor, whiteColor } = color;

const NavIconButton = styled(Button)`
	color: ${whiteColor};
	min-width: unset;
	&:hover {
		${disableMUIButtonHoverCss()};
		color: ${primaryColor};
	}
`;

const StyledBadge = styled(Badge)({
	'& .MuiBadge-badge': {
		borderRadius: '7px',
		fontSize: '10px',
		minWidth: '14px',
		height: '14px',
		fontWeight: 600
	}
});

const NavRightSection: React.FC = () => {
	return (
		<>
			<NavIconButton disableRipple>
				<SearchIcon fontSize="small" />
			</NavIconButton>
			<NavIconButton disableRipple>
				<ConfirmationNumberOutlinedIcon fontSize="small" />
			</NavIconButton>
			<NavIconButton disableRipple>
				<StyledBadge badgeContent={0} color="primary" showZero>
					<ShoppingBagOutlinedIcon fontSize="small" />
				</StyledBadge>
			</NavIconButton>
			<NavDrawer />
		</>
	);
};

export default NavRightSection;
