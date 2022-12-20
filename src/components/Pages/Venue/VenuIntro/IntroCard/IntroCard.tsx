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
	margin: 20px;
`;

const IntroCard: React.FC<IntroCardProps> = props => {
	const { imageSrc, title, description } = props;
	return (
		<Card sx={{ maxWidth: 550, maxHeight: 500 }} variant="outlined">
			<CardMedia component="img" alt={title} height="65%" image={imageSrc} />
			<ContentContainer>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{description}
				</Typography>
			</ContentContainer>
		</Card>
	);
};

export default IntroCard;
