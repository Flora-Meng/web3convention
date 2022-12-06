import Fade from '@mui/material/Fade';
import { useState } from 'react';
import styled from 'styled-components';

import Menu from './components/Menu';
import ENavItem from '@/constants/nav';
import { color, devices } from '@/styles/variables';

const { whiteColor } = color;

interface DropDownMenuProps {
	showMenu: boolean;
}

const MenuContainer = styled.div`
	background-color: ${whiteColor};
	left: 0;
	max-height: 50vh;
	overflow-y: scroll;
	position: absolute;
	top: 64px;
	width: 100vw;
	z-index: 1;
	@media ${devices.laptop} {
		display: none;
	}
`;

const StyledFade = styled(Fade)`
	::-webkit-scrollbar {
		width: 0 !important;
	}
`;

const DropDownMenu: React.FC<DropDownMenuProps> = ({ showMenu }) => {
	const [openKey, setOpenKey] = useState<ENavItem | undefined>();

	return (
		<StyledFade in={showMenu}>
			<MenuContainer>
				{Object.values(ENavItem).map(navItem => (
					<Menu
						navItem={navItem}
						openKey={openKey}
						setOpenKey={setOpenKey}
						key={navItem}
					/>
				))}
			</MenuContainer>
		</StyledFade>
	);
};

export default DropDownMenu;
