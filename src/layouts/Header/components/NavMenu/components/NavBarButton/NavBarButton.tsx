import Button from '@mui/material/Button';
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

const CustomizedButton = styled(Button)({
	justifyContent: 'flex-start',
	color: textColor,
	position: 'relative',
	fontSize: '14px',
	fontWeight: 600,
	lineHeight: 1.4,
	'&:hover': {
		backgroundColor: 'unset',
		borderColor: 'unset',
		boxShadow: 'none'
	}
});

const ButtonCtx = styled.span`
	${navBarTitleDecoration('calc(100% + 4px)')};
`;

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonCtx, linkHref }) => {
	const router = useRouter();

	return (
		<NavButtonContainer>
			<CustomizedButton disableRipple onClick={() => router.push(linkHref)}>
				<ButtonCtx>{buttonCtx}</ButtonCtx>
			</CustomizedButton>
		</NavButtonContainer>
	);
};

export default NavBarButton;
