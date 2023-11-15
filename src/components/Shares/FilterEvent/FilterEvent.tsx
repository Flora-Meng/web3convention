import Card from '@mui/material/Card';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const dateIcon = '/images/icons/date.svg';
const locationIcon = '/images/icons/location.svg';
const exhibitorIcon = '/images/icons/exhibitor.svg';
const logoBackground = '/images/exhibition/invalid-name.png';
const { primaryColor, InfoColor } = color;

interface EventCardProps {
	eventInfo: IMeetup;
}

const StyledCard = styled(Card)`
	background-color: #1a1a1a;
	border-radius: 0;
	cursor: pointer;
	display: flex;
	height: 216px;
	width: 1081px;
	&:hover {
		transform: translateY(-10px);
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-grow: 1;
	padding: 16px;
`;
const CardImage = styled.div`
	height: 184px;
	position: relative;
	width: 388px;
`;
const EventInfoContainer = styled.div`
	display: flex;
	flex-direction: column;

	gap: 16px;
	padding: 8px 0 8px 32px;
`;
const StyledTitle = styled.div`
	color: white;
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 1px;
	line-height: 1.25;
	opacity: 0.9;
	text-overflow: ellipsis;
`;
const InfoContainer = styled.div`
	align-items: baseline;
	color: #b2b2b2;
	display: flex;
	font-size: 16px;
	height: 24px;
	letter-spacing: 1px;
	line-height: 1.5;
`;
const ImageContainer = styled.div`
	height: 14px;
	position: relative;
	width: 14px;
`;
const DateInfo = styled.span`
	font-size: 16px;
	margin-left: 8px;
`;
const CompanyAvatar = styled.div`
	background-image: url(${logoBackground});
	background-repeat: no-repeat;
	background-size: cover;
	height: 46px;
	position: relative;
	width: 39px;
	img.company {
		border-radius: 50%;
		height: 35px;
		margin: 9px 2px 2px 2px;
		position: absolute;
		transform: none;
		width: 35px;
	}
`;

const CompanyInfo = styled.div`
	align-items: center;
	display: flex;
	gap: 10px;
	height: 46px;
	margin-top: 3px;
`;

const CompanyName = styled.span`
	color: white;
	font-size: 16px;
	height: 24px;
	letter-spacing: 1px;
	line-height: 1.5;
`;

const ExhibitorIconWrapper = styled.div`
	display: block;
	height: 20px;
	width: 90px;
`;
const ExhibitorIconPlaceholder = styled.div`
	width: 90px;
`;
const StyledLink = styled(Link)`
	align-items: center;
	display: flex;
	gap: 6px;
`;
const CardFooter = styled.div`
	background: linear-gradient(${primaryColor}, ${InfoColor});
	height: 100%;
	width: 4px;
`;

dayjs.extend(utc);
dayjs.extend(timezone);
const format = 'dddd, MMM D, hA';

const FilterEvent: React.FC<EventCardProps> = ({ eventInfo }) => {
	const { _id, bannersUploader, address, exhibitors, period, title } = eventInfo;
	const company = exhibitors?.[0] || {};
	return (
		<Link href={`/events/${_id}`}>
			<StyledCard>
				<CardContainer>
					{bannersUploader?.url && (
						<CardImage>
							<Image
								src={bannersUploader.url}
								alt={title}
								loader={imageLoader}
								unoptimized
								fill
							/>
						</CardImage>
					)}
					<EventInfoContainer>
						<StyledTitle>{title}</StyledTitle>
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
								<DateInfo>
									{' '}
									{`${dayjs(period.start)
										.tz('Australia/Sydney')
										.format(format)} GMT+8`}
								</DateInfo>
							</InfoContainer>
						)}
						{address && (
							<InfoContainer>
								<ImageContainer>
									<Image
										src={locationIcon}
										alt="location"
										fill
										loader={imageLoader}
										unoptimized
									/>
								</ImageContainer>
								<DateInfo>{address}</DateInfo>
							</InfoContainer>
						)}
						<CompanyInfo>
							<StyledLink href={`/company/${company._id}`}>
								<CompanyAvatar>
									<img
										src={company.logo?.url}
										alt={company.name}
										className="company"
									/>
								</CompanyAvatar>
								<CompanyName>{company.name}</CompanyName>
							</StyledLink>
							{exhibitors.length !== 0 ? (
								<ExhibitorIconWrapper>
									<img
										className="exhibitorIcon"
										src={exhibitorIcon}
										alt="Exhibitor icon"
									/>
								</ExhibitorIconWrapper>
							) : (
								<ExhibitorIconPlaceholder />
							)}
						</CompanyInfo>
					</EventInfoContainer>
				</CardContainer>
				<CardFooter />
			</StyledCard>
		</Link>
	);
};
export default FilterEvent;
