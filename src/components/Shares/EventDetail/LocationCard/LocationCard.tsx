import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { cardBackgroundColor, greyColor, primaryColor } = color;

const dateIcon = '/images/icons/date.svg';
const locationIcon = '/images/icons/location.svg';

const StyledCard = styled(Card)`
	background-color: ${cardBackgroundColor};
	border-radius: 0;
	display: flex;
	flex-direction: column;
	height: 540px;
	min-width: 330px;
	width: 330px;
	@media ${devices.mobile} {
		width: 400px;
		min-width: 400px;
	}
`;
const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	gap: 24px;
	margin-top: 16px;
`;
const DateInfo = styled.span`
	color: ${greyColor};
	font-size: 16px;
	margin-left: 8px;
	&:hover {
		color: ${primaryColor};
	}
`;
const InfoContainer = styled.div`
	align-items: baseline;
	color: ${greyColor};
	display: flex;
	font-size: 16px;
	letter-spacing: 1px;
	line-height: 1.5;
	padding-left: 16px;
`;
const ImageContainer = styled.div`
	height: 14px;
	min-width: 14px;
	position: relative;
`;
interface eventDetailProps {
	eventDetail: IMeetup;
}
dayjs.extend(utc);
dayjs.extend(timezone);
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const format: string = 'dddd, MMM D, hA [GMT]Z';
const LocationCard: React.FC<eventDetailProps> = ({ eventDetail }) => {
	const { maxRSVPs, address, period, latitude, longitude } = eventDetail || {};

	const [userLocation, setUserLocation] = useState<{ latitude?: number; longitude?: number }>({});
	const [distance, setDistance] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				setUserLocation({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
			});
		}
	}, []);

	useEffect(() => {
		if (
			!isEmpty(userLocation) &&
			userLocation.latitude !== undefined &&
			userLocation.longitude !== undefined &&
			latitude !== undefined &&
			longitude !== undefined
		) {
			setDistance(
				// eslint-disable-next-line no-use-before-define
				calculateDistance(
					userLocation.latitude,
					userLocation.longitude,
					latitude,
					longitude
				)
			);
		}
	}, [userLocation, latitude, longitude]);

	const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
		const R = 6371; /* radius of earth */
		const dLat: number = ((lat2 - lat1) * Math.PI) / 180;
		const dLon: number = ((lon2 - lon1) * Math.PI) / 180;
		/* variable to calculate spherical distance */
		const a: number =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos((lat1 * Math.PI) / 180) *
				Math.cos((lat2 * Math.PI) / 180) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		return R * c;
	};

	return (
		<StyledCard>
			<StyledCardContent>
				{maxRSVPs && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={locationIcon}
								alt="address"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{maxRSVPs}+ People</DateInfo>
					</InfoContainer>
				)}
				{period?.start && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={dateIcon}
								alt="date"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<DateInfo>{dayjs(period.start).utc().local().format(format)}</DateInfo>
					</InfoContainer>
				)}
				{address && (
					<InfoContainer>
						<ImageContainer>
							<Image
								src={locationIcon}
								alt="address"
								fill
								loader={imageLoader}
								unoptimized
							/>
						</ImageContainer>
						<div>
							<DateInfo style={{ display: 'block' }}>{address}</DateInfo>
							{distance && (
								<DateInfo style={{ display: 'block' }}>
									(Distance from you {distance.toFixed(2)} km)
								</DateInfo>
							)}
						</div>
					</InfoContainer>
				)}
				<DateInfo>Here should be map POI container</DateInfo>
			</StyledCardContent>
		</StyledCard>
	);
};

export default LocationCard;
