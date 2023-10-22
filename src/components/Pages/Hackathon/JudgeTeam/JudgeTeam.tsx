import Grid from '@mui/material/Grid';
import Image from 'next/image';
import backgroundGreen from 'public/images/background/not-speaker-background.png';
import backgroundBlue from 'public/images/background/speaker-background.png';
import styled from 'styled-components';

import teamMemberList from './teamMemberList.json';
import { backdrop, sectionSubtitle, sectionTitle } from '@/styles/mixin';
import { color, devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { blackColor, whiteColor } = color;

const speakerIcon = '/images/icons/speaker-icon.svg';
const speakerArrow = '/images/icons/speaker-arrow.svg';

enum ESocialMedia {
	LINKED_IN = 'linkedIn',
	TWITTER = 'twitter',
	FACEBOOK = 'facebook'
}

const HomeTeamContainer = styled(Grid)`
	background-color: black;
`;

const SpeakerArrowIconWrapper = styled.div`
	display: none;
	height: 20px;
	img {
		height: 100%;
		width: auto;
	}
`;

const GridItemContainer = styled.div<{ isSpeaker: boolean }>`
	background-image: ${props =>
		props.isSpeaker ? `url(${backgroundBlue.src})` : `url(${backgroundGreen.src})`};
	border: solid 0.5px #383333;
	display: flex;
	flex-direction: column;
	height: 300px;
	position: relative;
	width: 235px;
	@media ${devices.miniMobile} {
		width: 100%;
		background-size: cover;
		background-position: center;
		padding: 0 40px;
	}
	@media ${devices.tablet} {
		padding: 0 18px;
	}
	@media ${devices.laptop} {
		transition: transform 0.3s ease-in-out;
		&:hover {
			transform: translateY(-8px);
			${SpeakerArrowIconWrapper} {
				display: block;
			}
		}
	}
`;

const SectionSubtitle = styled.p`
	${sectionSubtitle};
	margin-top: 50px;
`;

const SectionTitle = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	margin-bottom: 32px;
	span {
		display: block;
	}
	@media ${devices.tablet} {
		span {
			display: inline;
		}
		margin-bottom: 97px;
	}
`;

const ExpectedSpeakerContainer = styled.div`
	background-color: ${blackColor};
	padding: 50px 40px 60px;
	position: relative;
	@media ${devices.miniMobile} {
		padding: 50px 24px 60px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Backdrop = styled.div`
	${backdrop};
	color: ${whiteColor};
	&::after {
		background-image: none;
	}
	@media ${devices.miniMobile} {
		font-size: 70px;
		transform: translateX(-35px);
	}
	@media ${devices.laptop} {
		left: 176px;
		font-size: 230px;
		display: inline-block;
	}
`;

const LogoWrapper = styled.div`
	align-items: center;
	background-color: white;
	border-radius: 25px;
	display: flex;
	height: 33px;
	justify-content: center;
	margin-top: 8px;
	overflow: hidden;
	padding: 5px 15px;
	position: absolute;
	top: 0px;
	width: 110px;
	@media ${devices.miniMobile} {
		right: -30px;
	}
	@media ${devices.tablet} {
		right: -10px;
	}
	img.logo {
		height: auto;
		transform: none;
		width: 100%;
	}
`;

const LogoSection = styled.div`
	display: flex;
	height: 50px;
	justify-content: end;
	position: relative;
	width: 100%;
`;

const InfoSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-top: 10px;
`;
const AvatarContainer = styled.div`
	background-color: black;
	border-radius: 50%;
	height: 103px;
	overflow: hidden;
	position: relative;
	width: 103px;
`;
const AvatarImage = styled(Image)`
	display: block;
	height: auto;
	object-fit: cover;
	object-position: top;
	position: absolute;
	width: 100%;
`;
const NameContainer = styled.div`
	color: ${whiteColor};
	font-family: Arial-BoldMT;
	font-size: 24px;
	padding: 16px 0 8px;
`;
const JobTitleContainer = styled.div`
	color: #aaaaaa;
	font-family: ArialMT;
	font-size: 14px;
	margin-right: 10px;
`;

const IconSection = styled.div`
	align-items: center;
	bottom: 16px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	width: 80%;
`;
const SpeakerIconWrapper = styled.div`
	display: block;
	height: 20px;
	width: 90px;
	img {
		height: auto;
		width: 100%;
	}
`;
const SpeakerIconPlaceholder = styled.div`
	width: 90px;
`;

const JudgeTeam: React.FC = () => {
	return (
		<ExpectedSpeakerContainer>
			<SectionSubtitle>Web3 Hackathon</SectionSubtitle>
			<SectionTitle>
				<span>Judges, </span>
				<span>Speakers & </span>
				<span>Mentors</span>
			</SectionTitle>
			<Backdrop>Judges</Backdrop>
			<HomeTeamContainer container spacing={2}>
				{teamMemberList.map(teamMember => {
					return (
						<Grid
							item
							mobile={12}
							tablet={6}
							laptop={4}
							largeLaptop={2.4}
							key={teamMember._id}
							className="relative"
						>
							<GridItemContainer isSpeaker={teamMember.isSpeaker === true}>
								<LogoSection>
									{teamMember.companySrc && (
										<LogoWrapper>
											<img
												className="logo"
												src={teamMember.companySrc}
												alt={teamMember.name}
											/>
										</LogoWrapper>
									)}
								</LogoSection>
								<InfoSection>
									<AvatarContainer>
										<AvatarImage
											loader={imageLoader}
											className="avatar"
											src={teamMember.avatarSrc}
											alt={teamMember.name}
											fill
											unoptimized
										/>
									</AvatarContainer>
									<NameContainer>{teamMember.name}</NameContainer>
									<JobTitleContainer>{teamMember.jobTitle}</JobTitleContainer>
								</InfoSection>
								<IconSection>
									{teamMember.isSpeaker ? (
										<SpeakerIconWrapper>
											<img
												className="speakerIcon"
												src={speakerIcon}
												alt="Speaker icon"
											/>
										</SpeakerIconWrapper>
									) : (
										<SpeakerIconPlaceholder />
									)}
									<SpeakerArrowIconWrapper>
										<img
											className="speakerArrow"
											src={speakerArrow}
											alt="Speaker more info"
										/>
									</SpeakerArrowIconWrapper>
								</IconSection>
							</GridItemContainer>
						</Grid>
					);
				})}
			</HomeTeamContainer>
		</ExpectedSpeakerContainer>
	);
};

export default JudgeTeam;
