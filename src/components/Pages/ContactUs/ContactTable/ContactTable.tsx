import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

import ThemeButton from '@/components/Shares/ThemeButton';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';
import { isEmail } from '@/utils/validator';

const { whiteColor, formTextColor, blackColor } = color;

const Section = styled.section`
	background-color: ${blackColor};
	color: ${whiteColor};
	display: flex;
	justify-content: center;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
	max-width: 1440px;
	padding: 24px 20px;
	padding: 24px;
	width: calc(100vw - 40px);
	@media ${devices.mobile} {
		padding: 24px 110px;
	}
`;
const FormContainer = styled.div`
	color: ${formTextColor};
	display: flex;
	flex-direction: column;
	@media ${devices.laptop} {
		flex-direction: row;
	}
`;
const DescriptionText = styled.p`
	font-size: 16px;
	line-height: 1.5;
	text-align: justify;
	width: 100%;
	@media ${devices.tablet} {
		width: 420px;
	}
	@media ${devices.largeLaptop} {
		width: 600px;
	}
`;
const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;
	@media ${devices.tablet} {
		width: 420px;
	}
	@media ${devices.largeLaptop} {
		width: 600px;
	}
`;

const Title = styled.h2`
	font-size: 20px;
	font-weight: bold;
`;
const StyledImg = styled.div`
	height: auto;
	margin-left: 156px;
	margin-top: 40px;
`;
interface InputProps {
	hasError?: boolean;
}
const Input = styled.input<InputProps>`
	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${({ hasError }) => (hasError ? '#d14d4d' : '#999999')};
	color: ${whiteColor};
	font-size: 16px;
	margin-top: 30px;
	padding: 10px 0;
	&::placeholder {
		color: ${formTextColor};
	}
	&:focus {
		border-bottom-color: ${({ hasError }) => (hasError ? '#d14d4d' : whiteColor)};
		outline: none;
	}
`;

const TextArea = styled.textarea`
	background: transparent;
	border: solid 0.5px ${formTextColor};
	border-radius: 2px;
	color: ${whiteColor};
	font-size: 16px;
	margin-bottom: 20px;
	padding: 10px;
	&::placeholder {
		color: ${formTextColor};
		font-size: 16px;
		opacity: 1;
	}
	&:focus {
		border-color: ${whiteColor};
		outline: none;
	}
`;

const MessageText = styled.p`
	color: ${formTextColor};
	font-size: 16px;
	margin: 40px 0 0 0;
`;

const Select = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background: transparent;
	border: none;
	border-bottom: 1px solid ${formTextColor};
	color: inherit;
	font-size: 16px;
	margin-top: 20px;
	padding: 10px 0;
	&:focus {
		border-bottom-color: ${whiteColor};
		outline: none;
	}
	&::-ms-expand {
		display: none;
	}
	&::placeholder {
		color: ${formTextColor};
		font-size: 16px;
	}
`;

const ErrorMessage = styled.div`
	color: #d14d4d;
	font-size: 12px;
`;

const ContactTable = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEmail(value);
		if (!isEmail(value)) {
			setEmailError('Please enter a valid email address.');
		} else {
			setEmailError('');
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Section>
			<Container>
				<Title>How can we help you?</Title>
				<DescriptionText>
					This moment marks the inception of an exhilarating journey as AI + Web3
					Convention unfolds.
					<br />
					For any inquiries, please take advantage of the contact form below. Rest
					assured, we&apos;ll promptly address your queries.
				</DescriptionText>
				<FormContainer>
					<ContactForm onSubmit={handleSubmit}>
						<Input type="text" placeholder="First Name *" required />
						<Input type="text" placeholder="Last Name *" required />
						<Input type="text" placeholder="Organisation Name" />
						<Input
							type="email"
							placeholder="Email *"
							required
							value={email}
							onChange={handleEmailChange}
							hasError={!!emailError}
						/>
						{emailError && <ErrorMessage>{emailError}</ErrorMessage>}
						<Select defaultValue="" required>
							<option value="" disabled hidden>
								Subject of Enquiry *
							</option>
							<option value="inquiry">General Inquiry</option>
							<option value="support">Support Request</option>
							<option value="feedback">Feedback</option>
						</Select>
						<MessageText>Message *</MessageText>
						<TextArea placeholder="Type Something..." required rows={15} />
						<ThemeButton width="180px">SUBMIT</ThemeButton>
					</ContactForm>
					<StyledImg>
						<Image
							src="/images/demo/contactUsPage/form-image.png"
							alt="picture next to contact form"
							width={429}
							height={520}
							loader={imageLoader}
						/>
					</StyledImg>
				</FormContainer>
			</Container>
		</Section>
	);
};

export default ContactTable;
