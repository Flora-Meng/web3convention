import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const ContentWrapper = styled.div`
	max-width: 680px;
`;
const EventImage = styled.div`
	height: 40vw;
	position: relative;
	width: 100%;
	@media ${devices.tablet} {
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
const EventDescription = () => {
	const router = useRouter();
	const { query } = useRouter();
	const { description } = query;
	const { agenda } = query;
	const { descriptionImage } = query;
	const imageSrc = Array.isArray(descriptionImage)
		? descriptionImage[0]
		: (descriptionImage as string);

	return (
		<ContentWrapper>
			<EventImage>
				<Image src={imageSrc} alt="Description" unoptimized fill loader={imageLoader} />
			</EventImage>
			<Description>{description}</Description>
			<Agenda>{agenda}</Agenda>
		</ContentWrapper>
	);
};

export default EventDescription;
