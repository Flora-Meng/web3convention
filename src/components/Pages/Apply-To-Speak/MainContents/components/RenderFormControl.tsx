import { FormControl, Input } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { color, devices, inputColor } from '@/styles/variables';

const { darkPrimaryColor } = color;
const { placeholderColor } = inputColor;

const FromLabel = styled.span`
	margin-bottom: 5px;
	&.mobile {
		@media ${devices.tablet} {
			width: 270px;
		}
		@media ${devices.laptop} {
			width: 400px;
		}
	}
	@media ${devices.laptop} {
		font-size: 24px;
	}
`;

const StyledInput = styled(Input)`
	color: ${placeholderColor};
	@media ${devices.laptop} {
		font-size: 18px;
	}
	&::before {
		display: none;
	}
	&:after {
		display: none;
	}
	input {
		border: none;
		border-bottom: 1px solid ${placeholderColor};
		margin: 0 0 36px;
		padding: 7px 0;
		&:hover {
			border-color: ${darkPrimaryColor};
			transition: border-color 0.3s ease;
		}
	}
`;

const renderFormControl = (control: IFormControlData) => (
	<FormControl key={control.name}>
		<FromLabel>{control.labelText}</FromLabel>
		<StyledInput
			type={control.type}
			name={control.name}
			required={control.required}
			placeholder={control.placeholder ? control.placeholder : undefined}
		/>
	</FormControl>
);

export default renderFormControl;
