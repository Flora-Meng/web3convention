import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const ContentWrapper = styled.div`
	max-width: 680px;
`;
const EventImage = styled.div`
	height: 23vw;
	position: relative;
	width: 100%;
	@media ${devices.largeLaptop} {
		height: 340px;
	}
`;
const Description = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	line-height: 1.5;
	margin: 0;
	padding: 32px 0 0 0;
	white-space: pre-wrap;
`;
const Agenda = styled.p`
	color: ${color.whiteColor};
	font-size: 16px;
	font-weight: bold;
	line-height: 1.5;
	margin: 0;
	padding: 48px 0;
	white-space: pre-wrap;
`;
interface eventDetailProps {
	eventDetail: IMeetup;
}
const EventDescription: React.FC<eventDetailProps> = ({ eventDetail }) => {
	const { descriptionImage, description, agenda } = eventDetail || {};

	return (
		<ContentWrapper>
			<EventImage>
				{descriptionImage && (
					<Image
						src={descriptionImage.url}
						alt="Description"
						unoptimized
						fill
						loader={imageLoader}
					/>
				)}
			</EventImage>
			<Description>{description}</Description>
			<Agenda>{agenda}</Agenda>
		</ContentWrapper>
	);
};

export default EventDescription;
