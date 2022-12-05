import { useState } from 'react';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';

import { ENavItem } from '@/constants/nav';
import { color, devices } from '@/styles/variables';
import Menu from './components/Menu';

const { whiteColor } = color;

interface DropDownMenuProps {
	showMenu: boolean;
}

const MenuContainer = styled.div`
	position: absolute;
	background-color: ${whiteColor};
	width: 100vw;
	left: 0;
	top: 64px;
	max-height: 50vh;
	overflow-y: scroll;
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
