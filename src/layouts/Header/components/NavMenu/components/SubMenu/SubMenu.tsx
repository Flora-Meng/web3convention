import styled from 'styled-components';

import NavBarButton from '../NavBarButton';

import { INavItem } from '@/interfaces/nav';

interface SubMenuProps {
	subNavList: INavItem[];
}

const SubMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 230px;
	padding: 16px;
`;

const SubMenu: React.FC<SubMenuProps> = ({ subNavList }) => {
	return (
		<SubMenuContainer>
			{subNavList.map(subNavItem => (
				<NavBarButton
					buttonCtx={subNavItem.title}
					key={subNavItem.title}
					linkHref={subNavItem.path}
				/>
			))}
		</SubMenuContainer>
	);
};

export default SubMenu;
