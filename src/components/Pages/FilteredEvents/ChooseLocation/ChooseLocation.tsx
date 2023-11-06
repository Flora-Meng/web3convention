import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { color } from '@/styles/variables';

const { whiteColor, darkPrimaryColor, primaryColor } = color;
const MainContainer = styled.div`
	font-family: Arial;
	width: 100%;
`;
const StyledInput = styled.input`
	align-items: center;
	background-color: transparent;
	border: none;
	color: #858585;
	cursor: pointer;
	display: flex;
	font-size: 20px;
	height: 7vh;
	justify-content: space-between;
	letter-spacing: 1px;
	outline: none;
	padding: 10px 15px;
	width: 100%;
`;
const LocationIcon = styled.img`
	margin-right: 10px;
`;
const SearchHistory = styled.img`
	color: ${primaryColor};
	font-size: 1.4em;
	margin-right: 10px;
`;
const UseCurrentLocation = styled.img`
	color: ${primaryColor};
	font-size: 1.4em;
	margin-right: 10px;
`;
const TextAndIconContainer = styled.div`
	align-items: center;
	border-bottom: 1px solid white;
	display: flex;
	&:hover {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
	min-width: 100%;
	padding: 5px 0;
`;
const DropdownContent = styled.div`
	background-color: #121212;
	border: 1px solid #3c3c3c;
	border-radius: 5px;
	margin-top: 10px;
`;
const DropdownOption = styled.button`
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${whiteColor};
	cursor: pointer;
	display: flex;
	padding: 10px 15px;
	text-align: left;
	width: 100%;
`;
const CurrentLocation = styled(DropdownOption)`
	background-color: #1f1f1f !important;
`;
const CurrentLocationContainer = styled(DropdownOption)`
	display: flex;
	padding: 10px 0;
	position: relative;
	&::after {
		border-bottom: solid 1px #3c3c3c;
		bottom: 0;
		content: '';
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		width: 95%;
	}
`;
const ErrorMessage = styled.div`
	color: red;
	font-size: 12px;
`;
const LocationText = styled.div`
	display: grid;
	gap: 3px;
`;
const LocationLabel = styled.div`
	color: #858585;
	font-size: 12px;
`;

const ChooseLocation = () => {
	// searching history list, will be replaced.
	const [searchedLocations, setSearchedLocations] = useState<string[]>(['Sydney', 'Melbourne']);
	const [isExpanded, setIsExpanded] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleClickAway = () => {
		setIsExpanded(false);
	};
	const [inputError, setInputError] = useState('');
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value.toLowerCase();
		setInputError('');

		if (/[^a-z0-9\s]/gi.test(value)) {
			setInputError('Special characters are not allowed.');
			value = value.replace(/[^a-z0-9\s]/gi, '');
		}
		if (value.length > 50) {
			setInputError('The maximum length is 50 characters.');
			value = value.slice(0, 50);
		}
		setInputValue(value);
	};
	const handleOptionClick = (location: string) => {
		setInputValue(location);
		setIsExpanded(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<MainContainer>
				<TextAndIconContainer>
					<LocationIcon src="/images/icons/location.png" alt="location icon" />
					<StyledInput
						placeholder="Choose a location"
						value={inputValue}
						onChange={handleInputChange}
						onFocus={() => setIsExpanded(true)}
					/>
					<KeyboardArrowDownIcon
						onClick={() => setIsExpanded(!isExpanded)}
						style={{
							color: '#fff',
							transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
						}}
					/>
				</TextAndIconContainer>
				{inputError && <ErrorMessage>{inputError}</ErrorMessage>}

				{isExpanded && (
					<DropdownContent>
						<CurrentLocationContainer>
							<CurrentLocation>
								<UseCurrentLocation
									src="/images/icons/current-location.svg"
									alt="current location"
								/>
								Use my current location
							</CurrentLocation>
						</CurrentLocationContainer>
						{searchedLocations.map(location => (
							<DropdownOption
								key={location}
								onClick={() => handleOptionClick(location)}
							>
								<SearchHistory
									src="/images/icons/search-history.svg"
									alt="search history"
								/>
								<LocationText>
									{location}
									<LocationLabel>NEW, Australia</LocationLabel>
								</LocationText>
							</DropdownOption>
						))}
					</DropdownContent>
				)}
			</MainContainer>
		</ClickAwayListener>
	);
};

export default ChooseLocation;
