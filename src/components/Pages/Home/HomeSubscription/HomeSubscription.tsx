import { FormControl, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
	animation,
	animationFillMode,
	disableMUIButtonHoverCss,
	tagDecoration
} from '@/styles/mixin';
import { color, devices } from '@/styles/variables';

const { blackColor, darkPrimaryColor, textColor, whiteColor } = color;

const HomeSubscriptionContainer = styled.div`
	background: linear-gradient(180deg, ${blackColor} 70%, ${whiteColor} 30%);
	color: ${whiteColor};
	margin-bottom: 80px;
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
	color: ${darkPrimaryColor};
	font-size: 16px;
	font-style: italic;
	margin: 0;
	${tagDecoration()};
	opacity: 0;
	${animation('fade-in-opacity-transform-to-up', '1s', 'ease', '0.4s', '1')};
	${animationFillMode()};
`;

const Title = styled.h2`
	font-size: 30px;
	font-weight: 700;
	line-height: 1.2;
	margin: 0;
	margin-bottom: 30px;
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

const StyledSubmitButton = styled(Button)`
	background-color: transparent;
	color: ${blackColor};
	font-weight: 700;
	height: inherit;
	padding: 50px 40x 50px 30px;
	text-transform: uppercase;
	${disableMUIButtonHoverCss};
	&:hover {
		color: ${darkPrimaryColor};
	}
	span {
		${tagDecoration};
	}
	@media ${devices.tablet} {
		padding: 50px 70px 50px 60px;
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
							<InputAdornment position="end">
								<StyledSubmitButton
									variant="contained"
									disableRipple
									disableElevation
									disableTouchRipple
									disableFocusRipple
									onClick={handleSubmitEmail}
								>
									<span>Send</span>
								</StyledSubmitButton>
							</InputAdornment>
						}
					/>
				</StyledFormControl>
				{inputMessage && <EmailHelperText>{inputMessage}</EmailHelperText>}
			</Content>
		</HomeSubscriptionContainer>
	);
};

export default HomeSubscription;
