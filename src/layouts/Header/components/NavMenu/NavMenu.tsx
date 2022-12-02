import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';

import { ENavItem } from '@/constants/nav';
import subNavItemsConfig, { NAV_ITEM_TITLE } from '@/layouts/Header/navBarConfig';
import SubMenu from './components/SubMenu';
import {
	ActiveNavBarTitleDecoration,
	disableMUIButtonHoverCss,
	NavBarTitleDecoration
} from '@/styles/mixin';
import { color } from '@/styles/variables';

const { whiteColor } = color;

interface INavButtonContainerProps {
	active: boolean;
}
const NavContainer = styled.nav``;

const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: whiteColor,
		borderRadius: 0
	}
});

const StyledButton = styled(Button)`
	height: 100px;
	padding: 0 20px;
	color: ${whiteColor};
	font-size: 14px;
	font-weight: 600;
	${disableMUIButtonHoverCss()}
`;

const NavButtonContainer = styled.div<INavButtonContainerProps>`
	display: inline-block;
	span:before {
		${({ active }) => (active ? ActiveNavBarTitleDecoration() : null)}
	}
	&:hover span:before {
		${ActiveNavBarTitleDecoration()}
	}
`;

const ButtonCtx = styled.span`
	color: ${whiteColor};
	text-transform: uppercase;
	${NavBarTitleDecoration('calc(100% + 8px)', 'calc(50% - 2px)', '-4px')};
`;

const NavMenu: React.FC = () => {
	const router = useRouter();
	const pathKey = router.pathname.split('/');
	return (
		<NavContainer>
			{Object.values(ENavItem).map(navItem => (
				<CustomWidthTooltip
					title={<SubMenu subNavList={subNavItemsConfig[navItem]} />}
					key={navItem}
				>
					<NavButtonContainer active={navItem === pathKey[1]}>
						<StyledButton disableRipple>
							<ButtonCtx>{NAV_ITEM_TITLE[navItem]}</ButtonCtx>
						</StyledButton>
					</NavButtonContainer>
				</CustomWidthTooltip>
			))}
		</NavContainer>
	);
};

export default NavMenu;
