import Link from 'next/link';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';
import { color } from '@/styles/variables';
import { useRouter } from 'next/router';
import { activeNavBarTitleDecoration, navBarTitleDecoration } from '@/styles/mixin';

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
