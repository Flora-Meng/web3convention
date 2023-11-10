import dayjs from 'dayjs';
import Image from 'next/image';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { whiteColor, greyColor } = color;

const Container = styled.div`
	background-color: #1a1a1a;
	display: flex;
	margin-bottom: 16px;
	padding: 16px;
	width: 717px;
`;
const ImageContainer = styled.div``;
const ImageWrapper = styled.div`
	height: 116px;
	max-width: 245px;
	overflow: hidden;
`;
const StyledImage = styled(Image)`
	height: auto;
	width: 100%;
`;
const InfoContainer = styled.div`
	color: ${greyColor};
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1.5;
`;
const EventTitle = styled.p`
	color: ${whiteColor};
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.25;
`;
const EventTime = styled.p``;
const EventLocation = styled.p``;

const ShowOnMapModal = ({ event }) => {
	dayjs.extend(utc);
	dayjs.extend(timezone);

	const date = dayjs(event.period.start).utc().tz.setDefault();
	return (
		<Container>
			<ImageContainer>
				<ImageWrapper>
					<StyledImage
						src={event.descriptionImage.url}
						alt="Gold Coast Beach 1"
						width={245}
						height={116}
						loader={imageLoader}
						unoptimized
						priority
					/>
				</ImageWrapper>
			</ImageContainer>
			<InfoContainer>
				<EventTitle>{event.title}</EventTitle>
				<EventTime>{event.period.start}</EventTime>
				<EventLocation>
					{event.location},{event.city}
				</EventLocation>
			</InfoContainer>
		</Container>
	);
};

export default ShowOnMapModal;
