import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

import { color } from '@/styles/variables';

const { whiteColor, primaryColor, buttonBackgroundColor, inputTextColor } = color;
const MainContainer = styled.div`
	margin-top: 60px;
	width: 100%;
`;

const StyledTypography = styled(Typography)`
	color: ${whiteColor};
	font-size: 18px;
	font-weight: bold;
`;

interface ButtonProps {
	isActive: boolean;
}
const Button = styled.button<ButtonProps>`
	background-color: ${buttonBackgroundColor};
	border: solid 1px ${({ isActive }) => (isActive ? primaryColor : 'transparent')};
	border-radius: 18px;
	color: ${({ isActive }) => (isActive ? primaryColor : whiteColor)};
	cursor: pointer;
	font-size: 16px;
	height: 36px;
	margin-bottom: 16px;
	margin-right: 16px;
	padding: 6px 20px;
`;

const ButtonGroup = styled.div`
	margin-top: 16px;
`;

const DatePickerContainer = styled.div`
	align-items: center;
	background-color: ${buttonBackgroundColor};
	border-radius: 18px;
	display: flex;
	height: 36px;
	padding: 6px 12px;
`;

const DateInput = styled.input`
	background-color: transparent;
	border: none;
	color: ${inputTextColor};
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1.5;
	text-align: center;
	width: 100%;
	&:focus {
		outline: none;
	}
`;

const StyledCalendarTodayIcon = styled(CalendarTodayIcon)`
	color: ${inputTextColor};
	font-size: 16px;
	margin-left: 7px;
`;

const StyledRemoveIcon = styled(RemoveIcon)`
	color: ${whiteColor};
	font-size: 8px;
`;

const Date = () => {
	const [active, setActive] = useState('');
	const [showDatePicker, setShowDatePicker] = useState(false);
	const buttons = [
		{ id: 'today', text: 'Today' },
		{ id: 'tomorrow', text: 'Tomorrow' },
		{ id: 'thisWeek', text: 'This week' },
		{ id: 'thisMonth', text: 'This month' },
		{ id: 'nextMonth', text: 'Next month' },
		{ id: 'custom', text: 'custom' }
	];
	return (
		<MainContainer>
			<StyledTypography>Date</StyledTypography>
			<ButtonGroup>
				{buttons.map(button => (
					<Button
						key={button.id}
						isActive={active === button.id}
						onClick={() => {
							setActive(button.id);
							if (button.id === 'custom') {
								setShowDatePicker(!showDatePicker);
							} else {
								setShowDatePicker(false);
							}
						}}
					>
						{button.text}
					</Button>
				))}
			</ButtonGroup>
			{showDatePicker && (
				<DatePickerContainer>
					<StyledCalendarTodayIcon />
					<DateInput type="text" name="start-date" placeholder="Start Date" />
					<StyledRemoveIcon />
					<DateInput type="text" name="end-date" placeholder="End Date" />
				</DatePickerContainer>
			)}
		</MainContainer>
	);
};

export default Date;
