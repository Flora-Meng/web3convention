import { SendMessageCommand } from '@aws-sdk/client-sqs';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField
} from '@mui/material';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import renderFormControl from './components/RenderFormControl';
import formControlsData from './form-controls-data';
import ApplicationModal from '@/components/Shares/ApplicationModal/ApplicationModal';
import ThemeButton from '@/components/Shares/ThemeButton';
import { DATE_OPTIONS } from '@/constants/apply-to-speak-dates';
import { EMAIL_SERVICE_TYPE } from '@/constants/aws';
import sqsClient from '@/services/sqs';
import { color, devices, inputColor, sizes } from '@/styles/variables';
import generateMailParams from '@/utils/generateMailParams';
import imageLoader from '@/utils/loader';

const { blackColor, darkPrimaryColor, lightTextColor } = color;
const { placeholderColor } = inputColor;

type TextFieldProps = MuiTextFieldProps & {
	customColor?: string;
};

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
	@media ${devices.largeLaptop} {
		display: grid;
		gap: 32px;
		grid-auto-rows: auto;
		grid-template-columns: repeat(2, 1fr);
		> *:nth-child(1),
		> *:nth-child(4),
		> *:nth-child(7),
		> *:nth-child(8),
		> *:nth-child(9),
		> *:nth-child(10),
		> *:nth-child(11),
		> *:nth-child(12),
		> *:nth-child(13) {
			grid-column: span 2;
		}
	}

	@media ${devices.miniMobile} {
		display: grid;
		gap: 15px;
		grid-auto-rows: auto;
	}
`;
const FormLabel = styled.span`
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

const StyleSelect = styled(TextField)<TextFieldProps>`
	color: ${placeholderColor};
	margin: 0 0 36px;
	padding: 7px 0;

	& .MuiInputBase-input {
		color: ${placeholderColor};
	}
	.MuiInput-underline:after {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
	& .MuiInput-underline:before {
		border-bottom-color: ${placeholderColor};
	}
	&:hover .MuiInput-underline:not(.Mui-disabled):before {
		border-bottom: 1px solid ${darkPrimaryColor};
	}
`;
const StyleMenu = styled(MenuItem)`
	color: ${placeholderColor};
`;

const StyledCheckBox = styled(FormControlLabel)`
	@media ${devices.mobile} {
		font-size: 10px;
	}
`;

const ButtonContainer = styled.div`
	margin-left: 0;
	/* margin-top: 48px; */

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
	const handleSelectChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
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
	const hasEmptyValues = (object: IApplyToSpeakProps): boolean => {
		return Object.values(object).some(value => value === '' || value === undefined);
	};
	const submitHandle = async () => {
		if (hasEmptyValues(speakerData) || !speakerData.agreeToTerms) {
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
						<FormLabel>Date:</FormLabel>
						<StyleSelect
							name="date"
							value={speakerData.date}
							onChange={handleSelectChange}
							select
							variant="standard"
							// focused
						>
							{DATE_OPTIONS.map(option => (
								<StyleMenu key={option.value} value={option.value}>
									{option.label}
								</StyleMenu>
							))}
						</StyleSelect>
					</FormControl>

					{formControlsData.map(renderFormControl)}

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
