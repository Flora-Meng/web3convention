import { SetStateAction } from 'react';
import { useRouter } from 'next/router';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import subNavItemsConfig, { NAV_ITEM_TITLE } from '@/layouts/Header/navBarConfig';
import { ENavItem } from '@/constants/nav';
import { ActiveNavBarTitleDecoration, NavBarTitleDecoration } from '@/styles/mixin';
import { devices } from '@/styles/variables';

import styled from 'styled-components';

interface MenuProps {
	navItem: ENavItem;
	openKey: ENavItem | undefined;
	setOpenKey: React.Dispatch<SetStateAction<ENavItem | undefined>>;
}

interface NavItemProps {
	isActive: boolean;
}

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))`
	margin: 0 20px;
	@media ${devices.mobile} {
		margin: 0 60px;
	}
	@media ${devices.tablet} {
		margin: 0 100px;
	}
	&::before {
		display: none;
	}
`;

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))`
	font-size: 13px;
	font-weight: 600;
	padding: 0 4px;
	border-bottom: 1px solid #edeff2;
	text-transform: uppercase;
	.Mui-expanded {
		min-height: unset;
	}
	.MuiAccordionSummary-content {
		margin: 0;
		p {
			${NavBarTitleDecoration('calc(100% + 8px)', '50%', '-4px')}
		}
		&:hover p::before {
			${ActiveNavBarTitleDecoration()}
		}
	}
	.MuiAccordionSummary-expandIconWrapper {
		transform: rotate(-90deg);
	}
	.MuiAccordionSummary-expandIconWrapper.Mui-expanded {
		transform: rotate(0);
	}
`;

const AccordionDetails = styled(MuiAccordionDetails)`
	padding: 0;
	margin-left: 10px;
`;

const NavItem = styled.div<NavItemProps>`
	${NavBarTitleDecoration('calc(100% + 8px)', '50%', '-4px')};
	&:before {
		${({ isActive }) => (isActive ? ActiveNavBarTitleDecoration() : null)}
	}
`;

const SubNavItem = styled.div<NavItemProps>`
	font-size: 13px;
	font-weight: 600;
	border-bottom: 1px solid #edeff2;
	p {
		padding: 0;
		width: fit-content;
		margin-block-start: 12px;
		margin-block-end: 12px;
		${NavBarTitleDecoration('calc(100% + 8px)', '50%', '-4px')};
		&:before {
			${({ isActive }) => (isActive ? ActiveNavBarTitleDecoration() : null)}
		}
	}
	&:hover p::before {
		${ActiveNavBarTitleDecoration()}
	}
`;

const Menu: React.FC<MenuProps> = ({ navItem, openKey, setOpenKey }) => {
	const router = useRouter();
	const expanded = openKey === navItem;

	return (
		<Accordion
			expanded={expanded}
			onChange={() => setOpenKey(expanded ? undefined : navItem)}
			key={navItem}
		>
			<AccordionSummary
				aria-controls={navItem}
				id={navItem}
				expandIcon={<ExpandMoreIcon fontSize="small" />}
			>
				<NavItem
					isActive={subNavItemsConfig[navItem].some(
						subNavItem => subNavItem.path === router.pathname
					)}
				>
					{NAV_ITEM_TITLE[navItem]}
				</NavItem>
			</AccordionSummary>
			<AccordionDetails>
				{subNavItemsConfig[navItem].map(subNavItem => (
					<SubNavItem
						isActive={router.pathname === subNavItem.path}
						className="cursor-pointer"
						key={subNavItem.title}
						onClick={() => router.push(subNavItem.path)}
					>
						<p>{subNavItem.title}</p>
					</SubNavItem>
				))}
			</AccordionDetails>
		</Accordion>
	);
};

export default Menu;
