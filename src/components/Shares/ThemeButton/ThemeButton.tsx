import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styled from 'styled-components';

import { disableMUIButtonHoverCss } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { primaryColor } = color;

interface StyledButton {
	children: React.ReactNode;
	href?: string;
}

const StyledButton = styled(Button)`
	border-radius: 5em;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.05em;
	line-height: 2em;
	padding: 11px 33px;
	text-transform: uppercase;
	${disableMUIButtonHoverCss};
	&:hover {
		background-color: ${primaryColor};
		svg {
			-moz-transform: translate(0, -50%);
			-moz-transition: -moz-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
			-webkit-transform: translate(0, -50%);
			-webkit-transition: -webkit-transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88),
				opacity 0.2s;
			opacity: 1;
			transform: translate(0, -50%);
			transition: transform 0.2s cubic-bezier(0.19, 0.5, 0.46, 0.88), opacity 0.2s;
			visibility: visible;
		}
		span {
			-moz-transform: translateX(-5px);
			-webkit-transform: translateX(-5px);
			transform: translateX(-5px);
		}
	}
	@media ${devices.laptop} {
		padding: 14px 34px;
	}
`;

const ButtonContent = styled.p`
	margin: 0;
	position: relative;
	span {
		-moz-transition: -moz-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transition: -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
		display: inline-block;
		transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
	}
	svg {
		-moz-transform: translate(-5px, -50%);
		-moz-transition: -moz-transform 0s 0.1s, opacity 0.1s;
		-webkit-transform: translate(-5px, -50%);
		-webkit-transition: -webkit-transform 0s 0.1s, opacity 0.1s;
		font-size: 12px;
		left: 100%;
		opacity: 0;
		position: absolute;
		top: 50%;
		transform: translate(-5px, -50%);
		transition: transform 0s 0.1s, opacity 0.1s;
		visibility: hidden;
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
