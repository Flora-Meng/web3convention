import { css } from 'styled-components';

import { color } from '@/styles/variables';
const { primaryColor } = color;

/* Nav item line-through decoration and animation */

export const NavBarTitleDecoration = (
	width: string,
	top = 'calc(50% - 2px)',
	left = '0px',
	decorationColor = primaryColor
) => css`
	position: relative;
	z-index: 1;
	&::before {
		content: '';
		position: absolute;
		top: ${top};
		left: ${left};
		height: 4px;
		width: ${width};
		background-color: ${decorationColor};
		z-index: -1;
		-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		-moz-transition: -moz-transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		-webkit-transform: scaleX(0) translateZ(0);
		-moz-transform: scaleX(0) translateZ(0);
		transform: scaleX(0) translateZ(0);
		-webkit-transform-origin: 100% 50%;
		-moz-transform-origin: 100% 50%;
		transform-origin: 100% 50%;
	}
`;

export const ActiveNavBarTitleDecoration = () => css`
	-webkit-transform: scaleX(1) translateZ(0);
	-moz-transform: scaleX(1) translateZ(0);
	transform: scaleX(1) translateZ(0);
	-webkit-transform-origin: 0 50%;
	-moz-transform-origin: 0 50%;
	transform-origin: 0 50%;
`;

/* button */

export const disableMUIButtonHoverCss = () => css`
	&:hover {
		background-color: unset;
		border-color: unset;
		box-shadow: none;
	}
`;

export const tagDecoration = () => css`
	&::before {
		content: '< ';
		position: relative;
		display: inline-block;
		font-size: 0.8em;
	}
	&::after {
		content: ' />';
		position: relative;
		display: inline-block;
		font-size: 0.8em;
	}
`;
