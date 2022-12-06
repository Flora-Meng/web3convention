import Link from 'next/link';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import { disableMUIButtonHoverCss } from '@/styles/mixin';

const { primaryColor } = color;

interface StyledButton {
	children: React.ReactNode;
	href?: string;
}

const StyledButton = styled(Button)`
	font-size: 13px;
	border-radius: 5em;
	line-height: 2em;
	letter-spacing: 0.05em;
	font-weight: 700;
	text-transform: uppercase;
	padding: 11px 33px;
	${disableMUIButtonHoverCss};
	&:hover {
		background-color: ${primaryColor};
		svg {
			visibility: visible;
			-webkit-transform: translate(0, -50%);
			-moz-transform: translate(0, -50%);
			transform: translate(0, -50%);
			opacity: 1;
			-webkit-transition: -webkit-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88),
				opacity 0.2s;
			-moz-transition: -moz-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
			transition: transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
		}
		span {
			-webkit-transform: translateX(-5px);
			-moz-transform: translateX(-5px);
			transform: translateX(-5px);
		}
	}
	@media ${devices.laptop} {
		padding: 16px 36px;
	}
`;

const ButtonContent = styled.p`
	position: relative;
	margin: 0;
	span {
		display: inline-block;
		-webkit-transition: -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		-moz-transition: -moz-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
	}
	svg {
		font-size: 12px;
		visibility: hidden;
		position: absolute;
		top: 50%;
		left: 100%;
		-webkit-transform: translate(-5px, -50%);
		-moz-transform: translate(-5px, -50%);
		transform: translate(-5px, -50%);
		opacity: 0;
		-webkit-transition: -webkit-transform 0s 0.1s, opacity 0.1s;
		-moz-transition: -moz-transform 0s 0.1s, opacity 0.1s;
		transition: transform 0s 0.1s, opacity 0.1s;
		will-change: transform, opacity;
	}
`;

const ThemeButton: React.FC<StyledButton> = ({ children, href }) => {
	const renderButton = (
		<StyledButton variant="contained" disableElevation disableRipple>
			<ButtonContent>
				<span>{children}</span>
				<ArrowForwardIosIcon />
			</ButtonContent>
		</StyledButton>
	);
	return href ? <Link href={href}>{renderButton}</Link> : renderButton;
};

export default ThemeButton;
