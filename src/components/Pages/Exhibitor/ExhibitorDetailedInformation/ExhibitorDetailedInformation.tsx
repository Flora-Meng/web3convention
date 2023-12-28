import Image from 'next/image';
import styled from 'styled-components';

import { IExhibitor } from '@/interfaces/exhibitor';
import { color } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const Container = styled.div`
	background-color: #1a1a1a;
	height: 636px;
	max-width: 400px;
	padding: 24px 33px 0;
`;
const InfoContainer = styled.div``;
const DetailContainer = styled.div`
	margin-bottom: 24px;
`;

const StyleIcon = styled(Image)`
	margin-right: 9px;
`;

const Detail = styled.span`
	color: ${color.greyColor};
	letter-spacing: 1px;
	line-height: 1.5;
`;

const ExhibitorDetailedInformation: React.FC<{ exhibitorInfo: IExhibitor }> = ({
	exhibitorInfo
}) => {
	const roundUpToNearestHundred = (num: number) => {
		return Math.floor(num / 100) * 100;
	};
	const roundedStaffAmount = roundUpToNearestHundred(exhibitorInfo.staffAmount);
	return (
		<Container>
			<InfoContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/people.svg"
						width={16}
						height={16}
					/>
					<Detail>{roundedStaffAmount}+ employees</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/internet.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.website}</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/email.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.email}</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/industry.svg"
						width={16}
						height={16}
					/>
					<Detail>{exhibitorInfo.industry} Industry</Detail>
				</DetailContainer>
				<DetailContainer>
					<StyleIcon
						loader={imageLoader}
						alt="location icon"
						src="/icons/location-icon.svg"
						width={16}
						height={16}
					/>
					<Detail>
						{exhibitorInfo.officeAddress} <br /> (Distance from you 23km)
					</Detail>
				</DetailContainer>
			</InfoContainer>
		</Container>
	);
};

export default ExhibitorDetailedInformation;
