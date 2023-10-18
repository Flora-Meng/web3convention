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
	align-items: center;
	display: flex;
	height: 44px;
	width: 100%;
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
	&:hover {
		background-color: #f5f5f5;
	}
`;

const CustomizedButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${textColor};
	cursor: pointer;
	font-family: ArialMT;
	font-size: 16px;
	text-align: left;
	width: 100%;
`;

const ButtonCtx = styled.span`
	margin-left: 16px;
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
