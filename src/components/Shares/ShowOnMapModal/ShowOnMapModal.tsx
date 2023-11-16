import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import styled from 'styled-components';

import ClockPin from './EventModalLogo/clock-pin.svg';
import LocationPin from './EventModalLogo/location-pin.svg';
import { EventProps } from '@/interfaces/event';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor, greyColor } = color;

const Container = styled.div`
	align-items: center;
	background-color: #1a1a1a;
	display: flex;
	flex-direction: row;
	height: 148px;
	margin-bottom: 16px;
	max-width: 717px;
	padding: 16px;
`;
const ImageWrapper = styled.div`
	height: auto;
	overflow: hidden;
	width: 245px;
`;
const StyledImage = styled(Image)`
	width: 100%;
`;
const InfoContainer = styled.div`
	color: ${greyColor};
	display: flex;
	flex-direction: column;
	font-size: 16px;
	height: 100%;
	justify-content: space-between;
	letter-spacing: 1px;
	line-height: 1.5;
	padding: 0 27px;
`;
const EventTitle = styled.span`
	color: ${whiteColor};
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.25;
`;
const TimeAndLocationContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const Description = styled.span`
	margin-left: 9px;
`;

const ShowOnMapModal: React.FC<EventProps> = ({ event }) => {
	dayjs.extend(utc);

	const formattedDate = dayjs(event.period.start)
		.utc()
		.local()
		.format('ddd, MMM D, YYYY, hA [GMT]Z');
	return (
		<Container>
			<ImageWrapper>
				<StyledImage
					src={event.descriptionImage.url}
					alt="Event Photo"
					width={245}
					height={116}
					loader={imageLoader}
					unoptimized
					priority
				/>
			</ImageWrapper>
			<InfoContainer>
				<EventTitle>{event.title}</EventTitle>
				<TimeAndLocationContainer>
					<ClockPin />
					<Description>{formattedDate}</Description>
				</TimeAndLocationContainer>
				<TimeAndLocationContainer>
					<LocationPin />
					<Description>
						{event.location}, {event.cityDetails[0].name}
					</Description>
				</TimeAndLocationContainer>
			</InfoContainer>
		</Container>
	);
};

export default ShowOnMapModal;
