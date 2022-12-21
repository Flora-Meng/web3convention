import { useRouter } from 'next/router';
import styled from 'styled-components';

import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';
import { color } from '@/styles/variables';

const { textColor } = color;

interface NavBarButtonProps {
	buttonCtx: string;
	linkHref: string;
}

const NavButtonContainer = styled.div`
	display: inline-block;
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;

const CustomizedButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${textColor};
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	padding: 8px 0;
	text-align: left;
	width: 100%;
`;

const ButtonCtx = styled.span`
	${navBarTitleDecoration('calc(100% + 4px)')};
`;

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonCtx, linkHref }) => {
	const router = useRouter();

	return (
		<NavButtonContainer>
			<CustomizedButton onClick={() => router.push(linkHref)}>
				<ButtonCtx>{buttonCtx}</ButtonCtx>
			</CustomizedButton>
		</NavButtonContainer>
	);
};

export default NavBarButton;
