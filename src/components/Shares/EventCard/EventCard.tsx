import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const dateIcon = '/images/icons/date.svg';
const locationIcon = '/images/icons/location.svg';
const exhibitorIcon = '/images/icons/exhibitor.svg';
const logoBackground = '/images/exhibition/invalid-name.png';

const { primaryColor, InfoColor, cardBackgroundColor } = color;
interface EventCardProps {
	title: string;
	date?: string;
	location?: string;
	description?: string;
	exhibitionSrc?: string;
	companySrc?: string;
	companyName?: string;
	isExhibitor?: boolean;
}
const StyledCard = styled(Card)`
	background-color: ${cardBackgroundColor};
	display: flex;
	flex-direction: column;
	height: 410px;
	transition: transform 0.3s ease;
	width: 350px;
	&:hover {
		transform: translateY(-10px);
	}
`;
const StyledTypography = styled.span`
	color: white;
	font-size: 20px;
	font-weight: bold;
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

const CardMediaLink = styled(Link)`
	height: 154px;
	position: relative;
	width: 100%;
`;

const StyledCardContent = styled(CardContent)`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-left: 16px;
	margin-top: 32px;
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
	gap: 15px;
	height: 39px;
	margin: 60px 0 16px 9px;
`;

const CompanyName = styled.span`
	color: white;
	font-size: 16px;
	height: 24px;
	letter-spacing: 1px;
	line-height: 1.5;
`;

const ExhibitorIconWrapper = styled.div`
	cursor: pointer;
	display: block;
	height: 20px;
	width: 90px;
	img {
		height: 20px;
		width: 96px;
	}
`;
const ExhibitorIconPlaceholder = styled.div`
	width: 90px;
`;
const CardFooter = styled.div`
	background: linear-gradient(to right, ${primaryColor}, ${InfoColor});
	height: 4px;
	width: 100%;
`;
const StyledLink = styled(Link)`
	align-items: center;
	display: flex;
	gap: 6px;
`;
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: cardBackgroundColor,
		borderRadius: '1px',
		position: 'relative',
		padding: '17px 12px 12px 12px',
		border: 'solid 1px #494949',
		width: '314px',
		height: 'fit-content',
		fontSize: '12px',
		lineHeight: '1.67',
		'&::before': {
			border: 'solid 1px'
		}
	}
});

const EventCard: React.FC<EventCardProps> = ({
	title,
	date,
	location,
	description,
	exhibitionSrc,
	companySrc,
	companyName,
	isExhibitor
}) => {
	return (
		<StyledCard>
			{exhibitionSrc && (
				<CardMediaLink href="/events/eventId">
					<Image src={exhibitionSrc} alt={title} loader={imageLoader} unoptimized fill />
				</CardMediaLink>
			)}
			<StyledCardContent>
				<Link href="/events/eventId">
					<StyledTypography>{title}</StyledTypography>
				</Link>
				{date && (
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
						<DateInfo>{date}</DateInfo>
					</InfoContainer>
				)}
				{location && (
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
						<DateInfo>{location}</DateInfo>
					</InfoContainer>
				)}
			</StyledCardContent>
			<CompanyInfo>
				<StyledLink href="/company/companyId">
					<CompanyAvatar>
						<img src={companySrc} alt={companyName} className="company" />
					</CompanyAvatar>
					<CompanyName>{companyName}</CompanyName>
				</StyledLink>
				{isExhibitor ? (
					<ExhibitorIconWrapper>
						<StyledTooltip title={description} arrow>
							<img
								className="exhibitorIcon"
								src={exhibitorIcon}
								alt="Exhibitor icon"
							/>
						</StyledTooltip>
					</ExhibitorIconWrapper>
				) : (
					<ExhibitorIconPlaceholder />
				)}
			</CompanyInfo>
			<CardFooter />
		</StyledCard>
	);
};
export default EventCard;
