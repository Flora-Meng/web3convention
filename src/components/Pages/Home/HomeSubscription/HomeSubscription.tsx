import { FormControl, InputAdornment } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { sectionSubtitle, sectionTitle, tagDecoration } from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, darkPrimaryColor, textColor, whiteColor } = color;

const HomeSubscriptionContainer = styled.div`
	background: linear-gradient(180deg, ${blackColor} 70%, ${whiteColor} 30%);
	color: ${whiteColor};
	padding: 100px 30px 50px;
	@media ${devices.mobile} {
		padding: 100px 100px 50px;
	}
`;

const Content = styled.div`
	margin: 0 auto;
	max-width: 1300px;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
	margin-bottom: 0;
`;

const Title = styled.h2`
	${sectionTitle};
	color: ${whiteColor};
	@media ${devices.tablet} {
		font-size: 40px;
	}
`;

const StyledFormControl = styled(FormControl)`
	background-color: ${whiteColor};
	box-shadow: 0 5px 21px 0 rgb(83 246 198 / 37%);
	padding: 20px 0;
`;

const StyledInput = styled(Input)`
	color: ${textColor};
	&::before {
		display: none;
	}
	&:after {
		display: none;
	}
	input {
		border-bottom: none;
		border-right: 2px solid ${darkPrimaryColor};
		padding: 30px 0 30px 30px;
	}
`;

const StyledInputAdornment = styled(InputAdornment)`
	height: fit-content;
	margin-left: 0;
`;

const StyledSubmitButton = styled.button`
	-moz-transition: color 0.5s;
	-webkit-transition: color 0.5s;
	background-color: transparent;
	border: none;
	color: ${blackColor};
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	height: inherit;
	padding: 0 16px;
	transition: color 0.5s;
	&:hover {
		color: ${darkPrimaryColor};
	}
	span {
		text-transform: uppercase;
		${tagDecoration};
	}
	@media ${devices.tablet} {
		padding: 60px;
	}
`;

const EmailHelperText = styled(FormHelperText)`
	color: red;
	margin-left: 0;
`;

const HomeSubscription: React.FC = () => {
	const [emailInput, setEmailInput] = useState<string>('');
	const [inputMessage, setInputMessage] = useState<string>('');

	useEffect(() => {
		if (inputMessage) setInputMessage('');
	}, [emailInput]);

	const handleSubmitEmail = () => {
		if (!emailInput) {
			setInputMessage('Email is invalid.');
		}
	};

	return (
		<HomeSubscriptionContainer>
			<Content>
				<Subtitle>{`Don't miss`}</Subtitle>
				<Title>Keep you posted!</Title>
				<StyledFormControl fullWidth>
					<StyledInput
						placeholder="_Your Email"
						value={emailInput}
						onChange={event => setEmailInput(event.target.value)}
						endAdornment={
							<StyledInputAdornment position="end">
								<StyledSubmitButton onClick={handleSubmitEmail}>
									<span>Send</span>
								</StyledSubmitButton>
							</StyledInputAdornment>
						}
					/>
				</StyledFormControl>
				{inputMessage && <EmailHelperText>{inputMessage}</EmailHelperText>}
			</Content>
		</HomeSubscriptionContainer>
	);
};

export default HomeSubscription;
