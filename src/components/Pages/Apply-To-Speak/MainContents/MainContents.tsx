import { useState } from 'react';
import styled from 'styled-components';

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

const MainContents: React.FC = () => {
	const [data, setData] = useState<IApplyToSpeakProps>({
		date: '20 April 2024',
		firstName: '',
		lastName: '',
		email: '',
		mobileNumber: '',
		jobTitle: '',
		companyName: '',
		companyBio: '',
		speakerBio: '',
		speechTopic: '',
		agreeToTerms: false
	});
	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		event.preventDefault();
		if (event.target.tagName === 'INPUT') {
			const inputElement = event.target as HTMLInputElement;
			if (event.target.type === 'checkbox') {
				setData({
					...data,
					[inputElement.name]: inputElement.checked
				});
			} else {
				setData({
					...data,
					[inputElement.name]: inputElement.value
				});
			}
		} else if (event.target.tagName === 'SELECT') {
			setData({
				...data,
				date: event.target.value as DateOption
			});
		}
	};
	const submitHandle = async () => {
		console.log(data);
	};
	return (
		<ApplyToSpeakContainer>
			<FromContainer>
				<label>
					Date:
					<select value={data.date} onChange={handleChange}>
						<option value="20 April 2024">20 April 2024</option>
						<option value="21 April 2024">21 April 2024</option>
					</select>
				</label>
				<label>
					First Name:
					<input
						type="text"
						value={data.firstName}
						name="firstName"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Last Name:
					<input
						type="text"
						value={data.lastName}
						name="lastName"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						value={data.email}
						name="email"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Mobile Number:
					<input
						type="tel"
						value={data.mobileNumber}
						name="mobileNumber"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Job Title:
					<input
						type="text"
						value={data.jobTitle}
						name="jobTitle"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Company Name:
					<input
						type="text"
						value={data.companyName}
						name="companyName"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Company Bio:
					<input
						value={data.companyBio}
						name="companyBio"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Speaker Bio:
					<input
						value={data.speakerBio}
						name="speakerBio"
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Speech Topic:
					<input
						type="text"
						value={data.speechTopic}
						name="speechTopic"
						onChange={handleChange}
					/>
				</label>

				<label>
					<input
						type="checkbox"
						checked={data.agreeToTerms}
						name="agreeToTerms"
						onChange={handleChange}
						required
					/>
					I have read and agree to abide with the Terms and conditions.
				</label>
				<ThemeButton onClick={submitHandle}>Submit</ThemeButton>
			</FromContainer>
		</ApplyToSpeakContainer>
	);
};

export default MainContents;
