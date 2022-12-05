import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

import { ENavItem } from '@/constants/nav';
import { navItemsConfig, subNavItemsConfig } from '@/layouts/Header/navBarConfig';
import SubMenu from './components/SubMenu';
import {
	ActiveNavBarTitleDecoration,
	disableMUIButtonHoverCss,
	NavBarTitleDecoration
} from '@/styles/mixin';
import { color } from '@/styles/variables';
import Link from 'next/link';

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

	const renderNavItem = (navItem: ENavItem) => (
		<NavButtonContainer active={navItem === pathKey[1]}>
			<StyledButton disableRipple>
				<ButtonCtx>{navItemsConfig[navItem].title}</ButtonCtx>
			</StyledButton>
		</NavButtonContainer>
	);

	return (
		<NavContainer>
			{Object.values(ENavItem).map(navItem => {
				const subNavItemConfig = subNavItemsConfig[navItem] || [];
				return !isEmpty(subNavItemConfig) ? (
					<CustomWidthTooltip
						title={<SubMenu subNavList={subNavItemConfig} />}
						key={navItem}
					>
						{renderNavItem(navItem)}
					</CustomWidthTooltip>
				) : (
					<Link href={navItemsConfig[navItem].path} key={navItem}>
						{renderNavItem(navItem)}
					</Link>
				);
			})}
		</NavContainer>
	);
};

export default NavMenu;
