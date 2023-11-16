import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ClockPin from './EventModalLogo/clock-pin.svg';
import LocationPin from './EventModalLogo/location-pin.svg';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor, greyColor } = color;

const Container = styled.div`
	align-items: center;
	background-color: #1a1a1a;
	border: 4px solid transparent;
	border-image: linear-gradient(to bottom, #52f6c6 0%, #529bf6) 1 / 0 4px 0 0;
	border-image-slice: 1;
	display: flex;
	height: 148px;
	margin-bottom: 16px;
	max-width: 717px;
	padding: 16px; ;
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

interface EventCardProps {
	event: IMeetup;
}

const ShowOnMapModal: React.FC<EventCardProps> = ({ event }) => {
	const { _id, descriptionImage, title, location, city, period } = event;
	const cityNames = city ? city.map(detail => detail.name).join(', ') : '';

	const formattedDate = dayjs(period.start).utc().local().format('ddd, MMM D, YYYY, hA [GMT]Z');
	return (
		<Link href={`/event/${_id}`}>
			<Container>
				<ImageWrapper>
					<StyledImage
						src={descriptionImage.url}
						alt="Event Photo"
						width={245}
						height={116}
						loader={imageLoader}
						unoptimized
						priority
					/>
				</ImageWrapper>
				<InfoContainer>
					<EventTitle>{title}</EventTitle>
					<TimeAndLocationContainer>
						<ClockPin />
						<Description>{formattedDate}</Description>
					</TimeAndLocationContainer>
					<TimeAndLocationContainer>
						<LocationPin />
						<Description>
							{location}, {cityNames}
						</Description>
					</TimeAndLocationContainer>
				</InfoContainer>
			</Container>
		</Link>
	);
};

export default ShowOnMapModal;
