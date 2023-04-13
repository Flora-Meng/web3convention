import {
	Checkbox,
	FormControl,
	FormControlLabel,
	Input,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

import ApplicationModal from '@/components/Shares/ApplicationModal/ApplicationModal';
import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';

const { blackColor, darkPrimaryColor, textColor, whiteColor, warningColor } = color;

const ApplyToSpeakContainer = styled.div`
	background: linear-gradient(180deg, ${blackColor}, ${whiteColor});
	color: ${textColor};
	padding: 100px 30px 50px;
	@media ${devices.mobile} {
		padding: 100px 100px 50px;
	}
`;
const FromContainer = styled.div`
	background-color: ${whiteColor};
	box-shadow: 0 5px 21px 0 rgba(83, 246, 198, 0.37);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 100px 118px 114px;
	@media ${devices.mobile} {
		padding: 40px;
	}
	@media ${devices.laptop} {
	}
`;
const StyleSelect = styled(Select)`
	margin: 0 0 36px;
	padding: 7px 0;
`;

const StyledInput = styled(Input)`
	color: ${textColor};
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
		border-bottom: 1px solid ${blackColor};
		margin: 0 0 36px;
		padding: 7px 0;
		&:hover {
			border-color: ${darkPrimaryColor};
			transition: border-color 0.3s ease;
		}
	}
`;
const StyledCheckBox = styled(FormControlLabel)`
	display: flex;
	justify-content: center;
`;
const MainContents: React.FC = () => {
	const [data, setData] = useState<IApplyToSpeakProps>({
		date: '20 April 2024',
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
					...data,
					[event.target.name]: event.target.checked
				});
			} else {
				setData({
					...data,
					[event.target.name]: event.target.value
				});
			}
		}
	};
	const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
		event.preventDefault();
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleClose = () => {
		setOpenModal(false);
		setMessage('error');
	};
	const submitHandle = async () => {
		if (
			data.date === '' ||
			data.firstName === '' ||
			data.lastName === '' ||
			data.email === '' ||
			data.countryCode === '' ||
			data.mobileNumber === '' ||
			data.jobTitle === '' ||
			data.companyName === '' ||
			data.companyBio === '' ||
			data.speakerBio === '' ||
			!data.agreeToTerms
		) {
			setMessage('error');
			setOpenModal(true);
		} else {
			setMessage('success');
			setOpenModal(true);
		}
	};
	return (
		<ApplyToSpeakContainer>
			<FromContainer>
				<FormControl>
					Date:
					<StyleSelect value={data.date} onChange={handleSelectChange}>
						<MenuItem value="20 April 2024">20 April 2024</MenuItem>
						<MenuItem value="21 April 2024">21 April 2024</MenuItem>
					</StyleSelect>
				</FormControl>
				<FormControl>
					First Name:
					<StyledInput
						type="text"
						value={data.firstName}
						name="firstName"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Last Name:
					<StyledInput
						type="text"
						value={data.lastName}
						name="lastName"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Email:
					<StyledInput
						type="email"
						value={data.email}
						name="email"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Country Code:
					<StyledInput
						type="tel"
						placeholder="+61"
						value={data.countryCode}
						name="countryCode"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Mobile Number:
					<StyledInput
						type="tel"
						value={data.mobileNumber}
						name="mobileNumber"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Job Title:
					<StyledInput
						type="text"
						value={data.jobTitle}
						name="jobTitle"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Company Name:
					<StyledInput
						type="text"
						value={data.companyName}
						name="companyName"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Company Bio:
					<StyledInput
						value={data.companyBio}
						name="companyBio"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Speaker Bio:
					<StyledInput
						value={data.speakerBio}
						name="speakerBio"
						onChange={handleInputChange}
						required
					/>
				</FormControl>
				<FormControl>
					Speech Topic:
					<StyledInput
						type="text"
						value={data.speechTopic}
						name="speechTopic"
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl>
					<StyledCheckBox
						control={
							<Checkbox
								checked={data.agreeToTerms}
								name="agreeToTerms"
								onChange={handleInputChange}
								required
							/>
						}
						label="I have read and agree to abide with the Terms and conditions."
					/>
				</FormControl>
				<ThemeButton onClick={submitHandle}>Submit</ThemeButton>
			</FromContainer>
			<ApplicationModal open={openModal} handleClose={handleClose} message={message} />
		</ApplyToSpeakContainer>
	);
};

export default MainContents;
