import NavBarButton from '../NavBarButton';
import { ISubNavItem } from '@/interfaces/nav';
import styled from 'styled-components';

interface SubMenuProps {
	subNavList: ISubNavItem[];
}

const SubMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	min-width: 230px;
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
