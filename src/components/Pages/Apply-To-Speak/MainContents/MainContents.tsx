import { SendMessageCommand } from '@aws-sdk/client-sqs';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	Input,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import ApplicationModal from '@/components/Shares/ApplicationModal/ApplicationModal';
import ThemeButton from '@/components/Shares/ThemeButton';
import { EMAIL_SERVICE_TYPE } from '@/constants/aws';
import sqsClient from '@/services/sqs';
import { color, devices, inputColor, sizes } from '@/styles/variables';
import generateMailParams from '@/utils/generateMailParams';
import imageLoader from '@/utils/loader';

const { blackColor, darkPrimaryColor } = color;
const { placeholderColor } = inputColor;

const ApplyToSpeakContainer = styled.div`
	background-color: ${blackColor};
	color: ${placeholderColor};
	display: flex;
	justify-content: center;
	@media ${devices.miniMobile} {
		padding: 18px 24px;
	}
`;
const Wrapper = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	width: 100%;
	@media ${devices.Mobile} {
		display: flex;
		flex-direction: column;
	}
	@media ${devices.largeLaptop} {
		display: flex;
		flex-direction: row;
	}
`;

const Logo = styled(Image)`
	height: auto;
	margin-bottom: 16px;
	opacity: 0.2;

	@media ${devices.miniMobile} {
		width: 100%;
		padding-left: 0;
		margin-top: 48px;
	}
	@media ${devices.largeLaptop} {
		padding-left: 134px;
		width: 50%;
	}
`;

const FromContainer = styled.div`
	background-color: ${blackColor};
	display: grid;
	grid-template-columns: 1fr;
`;
const FromLabel = styled.span`
	margin-bottom: 5px;
	&.mobile {
		@media ${devices.tablet} {
			width: 270px;
		}
		@media ${devices.laptop} {
			width: 400px;
		}
	}
	@media ${devices.laptop} {
		font-size: 24px;
	}
`;
const MobileContainer = styled.div`
	@media ${devices.miniMobile} {
		gap: 10px;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: auto;
	}
	@media ${devices.largeLaptop} {
		gap: 32px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
	}
`;
const StyleSelect = styled(Select)`
	margin: 0 0 36px;
	padding: 7px 0;
`;

const StyledInput = styled(Input)`
	color: ${placeholderColor};
	@media ${devices.laptop} {
		font-size: 18px;
	}
	&::before {
		display: none;
	}
	&:after {
		display: none;
	}
	input {
		border: none;
		border-bottom: 1px solid ${placeholderColor};
		margin: 0 0 36px;
		padding: 7px 0;
		&:hover {
			border-color: ${darkPrimaryColor};
			transition: border-color 0.3s ease;
		}
	}
`;
const StyledCheckBox = styled(FormControlLabel)`
	@media ${devices.mobile} {
		font-size: 10px;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 48px;

	@media ${devices.largeLaptop} {
		width: 180px;
	}
`;

const MainContents: React.FC = () => {
	const [speakerData, setData] = useState<IApplyToSpeakProps>({
		date: '18 May 2024',
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '',
		mobileNumber: '',
		jobTitle: '',
		companyName: '',
		companyBio: '',
		speakerBio: '',
		speechTopic: '',
		agreeToTerms: false
	});
	const [message, setMessage] = useState('error');
	const [openModal, setOpenModal] = useState(false);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (event.target.tagName === 'INPUT') {
			if (event.target.type === 'checkbox') {
				setData({
					...speakerData,
					[event.target.name]: event.target.checked
				});
			} else {
				setData({
					...speakerData,
					[event.target.name]: event.target.value
				});
			}
		}
	};
	const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
		event.preventDefault();
		setData({
			...speakerData,
			[event.target.name]: event.target.value
		});
	};
	const handleClose = () => {
		setOpenModal(false);
		setMessage('error');
	};
	const submitHandle = async () => {
		if (
			speakerData.date === '' ||
			speakerData.firstName === '' ||
			speakerData.lastName === '' ||
			speakerData.email === '' ||
			speakerData.countryCode === '' ||
			speakerData.mobileNumber === '' ||
			speakerData.jobTitle === '' ||
			speakerData.companyName === '' ||
			speakerData.companyBio === '' ||
			speakerData.speakerBio === '' ||
			!speakerData.agreeToTerms
		) {
			setMessage('error');
			setOpenModal(true);
		} else {
			setMessage('success');
			setOpenModal(true);
			// Send Email
			const mailParams = generateMailParams({
				templateValue: EMAIL_SERVICE_TYPE.WEB3_CONVENTION_SPEAKER_APPLICATION,
				toValue: speakerData.email,
				htmlValue: 'Web3 Convention Speakers Team',
				message:
					'Thank you for proposing a speaker for Web Summit 2023. We will review your application and get back in touch if we find a good fit.'
			});
			await sqsClient.send(new SendMessageCommand(mailParams));
		}
	};
	return (
		<ApplyToSpeakContainer>
			<Wrapper>
				<FromContainer>
					<FormControl>
						<FromLabel>Date:</FromLabel>
						<StyleSelect value={speakerData.date} onChange={handleSelectChange}>
							<MenuItem value="18 May 2024">18 May 2024</MenuItem>
							<MenuItem value="19 May 2024">19 May 2024</MenuItem>
						</StyleSelect>
					</FormControl>
					<MobileContainer>
						<FormControl fullWidth>
							<FromLabel>First Name:</FromLabel>
							<StyledInput
								type="text"
								value={speakerData.firstName}
								name="firstName"
								onChange={handleInputChange}
								required
							/>
						</FormControl>
						<FormControl fullWidth>
							<FromLabel>Last Name:</FromLabel>
							<StyledInput
								type="text"
								value={speakerData.lastName}
								name="lastName"
								onChange={handleInputChange}
								required
							/>
						</FormControl>
					</MobileContainer>
					<FormControl>
						<FromLabel>Email:</FromLabel>
						<StyledInput
							type="email"
							value={speakerData.email}
							name="email"
							onChange={handleInputChange}
							required
						/>
					</FormControl>
					<MobileContainer>
						<FormControl fullWidth>
							<FromLabel className="country-code">Country Code:</FromLabel>
							<StyledInput
								type="tel"
								placeholder="+61"
								value={speakerData.countryCode}
								name="countryCode"
								onChange={handleInputChange}
								required
							/>
						</FormControl>
						<FormControl fullWidth>
							<FromLabel className="mobile">Mobile Number:</FromLabel>
							<StyledInput
								type="tel"
								value={speakerData.mobileNumber}
								name="mobileNumber"
								onChange={handleInputChange}
								required
							/>
						</FormControl>
					</MobileContainer>
					<FormControl>
						<FromLabel>Job Title:</FromLabel>
						<StyledInput
							type="text"
							value={speakerData.jobTitle}
							name="jobTitle"
							onChange={handleInputChange}
							required
						/>
					</FormControl>
					<FormControl>
						<FromLabel>Company Name:</FromLabel>
						<StyledInput
							type="text"
							value={speakerData.companyName}
							name="companyName"
							onChange={handleInputChange}
							required
						/>
					</FormControl>
					<FormControl>
						<FromLabel>Company Bio:</FromLabel>
						<StyledInput
							value={speakerData.companyBio}
							name="companyBio"
							onChange={handleInputChange}
							required
						/>
					</FormControl>
					<FormControl>
						<FromLabel>Speaker Bio:</FromLabel>
						<StyledInput
							value={speakerData.speakerBio}
							name="speakerBio"
							onChange={handleInputChange}
							required
						/>
					</FormControl>
					<FormControl>
						<FromLabel>Speech Topic:</FromLabel>
						<StyledInput
							type="text"
							value={speakerData.speechTopic}
							name="speechTopic"
							onChange={handleInputChange}
						/>
					</FormControl>
					<FormControl>
						<StyledCheckBox
							control={
								<Checkbox
									checked={speakerData.agreeToTerms}
									name="agreeToTerms"
									onChange={handleInputChange}
									required
								/>
							}
							label="I have read and agree to abide with the Terms and conditions."
						/>
					</FormControl>
					<ButtonContainer>
						<ThemeButton onClick={submitHandle} width="100%">
							Submit
						</ThemeButton>
					</ButtonContainer>
				</FromContainer>
				<Logo
					loader={imageLoader}
					unoptimized
					src="/web3-logo-white.svg"
					alt="logo"
					width={140}
					height={40}
					priority
				/>
			</Wrapper>
			<ApplicationModal open={openModal} handleClose={handleClose} message={message} />
		</ApplyToSpeakContainer>
	);
};

export default MainContents;
