import styled from 'styled-components';

import ChooseLocation from './ChooseLocation';
import DateFilter from './DateFilter';
import { color, devices } from '@/styles/variables';

const { blackColor } = color;

const MainContainer = styled.div`
	background-color: ${blackColor};
	background-position: center;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 20px;
	@media ${devices.mobile} {
		flex-direction: row;
		padding: 1vw 9vw;
	}
`;
const FilteredContainer = styled.div`
	width: 100%;
	@media ${devices.mobile} {
		width: 420px;
	}
`;
const EventContainer = styled.div`
	background-color: #1a1a1a;
	margin-left: 0;
	width: 100%;
	@media ${devices.mobile} {
		width: 70%;
		margin-left: 4.5vw;
	}
`;
const MainContents = () => {
	return (
		<MainContainer>
			<FilteredContainer>
				<ChooseLocation />
				<DateFilter />
			</FilteredContainer>
			<EventContainer>
				<h2>this is EventContainer</h2>
			</EventContainer>
		</MainContainer>
	);
};

export default MainContents;
