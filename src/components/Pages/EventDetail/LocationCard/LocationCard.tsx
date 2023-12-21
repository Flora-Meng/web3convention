import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { cardBackgroundColor, greyColor } = color;

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

dayjs.extend(utc);
dayjs.extend(timezone);
const format = 'dddd, MMM D, hA [GMT]Z';
interface UserLocation {
	latitude: number | null;
	longitude: number | null;
}

interface QueryParams {
	maxRSVPs?: string;
	address?: string;
	periodStart?: string;
	latitude?: string;
	longitude?: string;
}
const LocationCard = () => {
	const { query } = useRouter();
	const queryParams: QueryParams = query as QueryParams;
	const { maxRSVPs, address } = queryParams;
	const periodStart = Array.isArray(queryParams.periodStart)
		? queryParams.periodStart[0]
		: queryParams.periodStart;
	const latitude =
		typeof queryParams.latitude === 'string' ? parseFloat(queryParams.latitude) : null;
	const longitude =
		typeof queryParams.longitude === 'string' ? parseFloat(queryParams.longitude) : null;
	const [userLocation, setUserLocation]: [
		UserLocation,
		React.Dispatch<React.SetStateAction<UserLocation>>
	] = useState<UserLocation>({ latitude: null, longitude: null });
	const [distance, setDistance]: [
		number | null,
		React.Dispatch<React.SetStateAction<number | null>>
	] = useState<number | null>(null);

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
			userLocation.latitude &&
			userLocation.longitude &&
			latitude !== null &&
			longitude !== null
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
		const R = 6371;
		const dLat = ((lat2 - lat1) * Math.PI) / 180;
		const dLon = ((lon2 - lon1) * Math.PI) / 180;
		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos((lat1 * Math.PI) / 180) *
				Math.cos((lat2 * Math.PI) / 180) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
				{periodStart && (
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
						<DateInfo>{dayjs(periodStart).utc().local().format(format)}</DateInfo>
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
