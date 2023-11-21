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

enum DateButtonType {
	TODAY = 'today',
	TOMORROW = 'tomorrow',
	THIS_WEEK = 'thisWeek',
	THIS_MONTH = 'thisMonth',
	NEXT_MONTH = 'nextMonth',
	CUSTOM = 'custom'
}

interface ButtonConfig {
	id: DateButtonType;
	text: string;
}
const BUTTONS: ButtonConfig[] = [
	{ id: DateButtonType.TODAY, text: 'Today' },
	{ id: DateButtonType.TOMORROW, text: 'Tomorrow' },
	{ id: DateButtonType.THIS_WEEK, text: 'This week' },
	{ id: DateButtonType.THIS_MONTH, text: 'This month' },
	{ id: DateButtonType.NEXT_MONTH, text: 'Next month' },
	{ id: DateButtonType.CUSTOM, text: 'Custom' }
];

const DateFilter = () => {
	const [showDatePicker, setShowDatePicker] = useState(false);
	const [activeButton, setActiveButton] = useState<DateButtonType | undefined>();
	return (
		<MainContainer>
			<StyledTypography>Date</StyledTypography>
			<ButtonGroup>
				{BUTTONS.map(button => (
					<Button
						key={button.id}
						isActive={activeButton === button.id}
						onClick={() => {
							setActiveButton(button.id);
							if (button.id === DateButtonType.CUSTOM) {
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

export default DateFilter;
