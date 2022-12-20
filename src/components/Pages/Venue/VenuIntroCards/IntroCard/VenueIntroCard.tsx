import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from 'styled-components';

interface IntroCardProps {
	imageSrc: string;
	title: string;
	description: string;
}

const ContentContainer = styled(CardContent)`
	margin: 0 2.5%;
	position: relative;
	top: 12.5%;
	transform: translate(0, -50%);
`;

const VenueIntroCard: React.FC<IntroCardProps> = props => {
	const { imageSrc, title, description } = props;
	return (
		<Card sx={{ width: '28vw', height: '30vw' }} variant="outlined">
			<CardMedia component="img" alt={title} height="75%" image={imageSrc} />
			<ContentContainer>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</ContentContainer>
		</Card>
	);
};

export default VenueIntroCard;
