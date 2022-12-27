import CheckIcon from '@mui/icons-material/Check';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import { isString } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import {
	activeNavBarTitleDecoration,
	navBarTitleDecoration,
	sectionSubtitle,
	sectionTitle
} from '@/styles/mixin';
import { devices, sizes } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const HomeTicketContainer = styled.div`
	max-width: ${`${sizes.largeLaptop}px`};
	padding: 100px 30px 140px;
	@media ${devices.mobile} {
		padding: 100px 80px 140px;
	}
	@media ${devices.laptop} {
		margin: 0 auto;
	}
`;

const Title = styled.h2`
	${sectionTitle};
	max-width: 360px;
`;

const Subtitle = styled.p`
	${sectionSubtitle};
`;

const StyledLi = styled.li`
	line-height: 2;
	margin-left: 30px;
	padding-left: 10px;
	position: relative;
`;

const PriceContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media ${devices.laptop} {
		margin: 10px 6px;
	}
`;

const Price = styled.h3`
	font-size: 40px;
	margin: 0 50px 0 0;
	position: relative;
	@media ${devices.tablet} {
		font-size: 40px;
	}
	@media ${devices.laptop} {
		font-size: 44px;
	}
`;

const PriceSup = styled.p`
	font-size: 18px;
	left: calc(100% + 8px);
	margin: 0;
	position: absolute;
	top: 10px;
`;

const PriceSub = styled.p`
	font-size: 12px;
	left: calc(100% + 8px);
	margin: 0;
	position: absolute;
	top: 36px;
`;

const TicketTitle = styled.h2`
	font-size: 19px;
	margin: 12px 0 6px 0;
	@media ${devices.laptop} {
		font-size: 24px;
	}
`;

const OriginalPrice = styled.p`
	margin: 0;
	text-decoration: line-through;
`;

const PriceFeatureContainer = styled.ul`
	font-size: 16px;
	list-style-type: none;
	padding-left: 0;
`;

const FeatureIconContainer = styled.div`
	left: -16px;
	position: absolute;
	top: 4px;
`;

const ImageContainer = styled.div`
	height: 240px;
	position: relative;
	img {
		object-fit: contain;
	}
`;

const StyledLink = styled(Link)`
	display: inline-block;
	font-size: 16px;
	font-weight: 700;
	margin: 8px 0;
	text-transform: uppercase;
	span {
		${navBarTitleDecoration('calc(100% + 4px)', '50%', '-2px')};
	}
	&:hover span:before {
		${activeNavBarTitleDecoration()}
	}
`;

const ticketConfig = [
	{
		_id: '1',
		title: 'General Admission',
		price: 190,
		priceIncGST: false,
		earlyBirdPrice: 148,
		earlyBirdPriceIncGST: true,
		earlyBirdEndDate: '2023-06-21T14:00:00.000Z',
		thumbnailSrc: '/images/tickets/general-admission.png',
		features: [
			'Expo Hall (22 July 10am-6pm & 23 July 10am-4:30pm)',
			'Unique NFT Ticket',
			'Access to all 4 Theatres',
			'Access to the Workshop Zone',
			'Access to the Metaverse',
			'Access to the NFT House',
			'Access to the DAO House',
			'Access to all Industry Meetups',
			'Access to the Networking Lounge',
			'Access to Web3 After Party, Cyber Nightclub Party(Including bonus $50 admission)'
		]
	},
	{
		_id: '2',
		title: 'Premium Admission',
		price: 1999,
		priceIncGST: true,
		earlyBirdPrice: 1498,
		earlyBirdPriceIncGST: false,
		earlyBirdEndDate: '2023-06-21T14:00:00.000Z',
		thumbnailSrc: '/images/tickets/premium-admission.png',
		features: [
			'Expo Hall (22 July 10am-6pm & 23 July 10am-4:30pm)',
			'Whale Pass',
			'VIP Yacht Party',
			<span>
				all inclusions as per General Admission <strong>PLUS</strong>
			</span>,
			'Access to the VIP Lounge - Sponsored',
			'Access to Startup Pitch House',
			"Exclusive Networking with whales, business leaders, influencers, VC's and innovators",
			'Massage Therapist',
			'Coffee & Tea provided',
			'Catered Lunch and drinks',
			'Whale Private Room / Area'
		]
	},
	{
		_id: '3',
		title: 'Student Pass',
		price: 78,
		priceIncGST: false,
		thumbnailSrc: '/images/tickets/student-pass.png',
		features: [
			'Expo Hall (22 July 10am-6pm & 23 July 10am-4:30pm)',
			'Access to all 4 Theatres',
			'Access to the Workshop Zone',
			'Access to the Metaverse',
			'Access to the NFT House',
			'Access to the DAO House',
			'Access to all Industry Meetups',
			'Access to the Networking Lounge',
			'Access to Web3 After Party, Cyber Nightclub Party(Including bonus $50 admission)'
		]
	}
];

const PageTicket: React.FC = () => {
	return (
		<HomeTicketContainer>
			<Subtitle>unmissable_events</Subtitle>
			<Title>Are you with us? Get tickets</Title>
			<Grid container spacing={6}>
				{ticketConfig.map(ticket => {
					const earlyBirdPriceValid =
						ticket.earlyBirdPrice && dayjs().isBefore(dayjs(ticket.earlyBirdEndDate));
					const price = earlyBirdPriceValid ? ticket.earlyBirdPrice : ticket.price;
					const incGST = earlyBirdPriceValid
						? ticket.earlyBirdPriceIncGST
						: ticket.priceIncGST;
					return (
						<Grid item miniMobile={12} laptop={6} largeLaptop={4} key={ticket._id}>
							<ImageContainer>
								<Image
									loader={imageLoader}
									unoptimized
									src={ticket.thumbnailSrc}
									alt={ticket.title}
									fill
								/>
							</ImageContainer>
							<PriceContainer>
								<Price>
									{price}
									<PriceSup>$</PriceSup>
									{!incGST && <PriceSub>+GST</PriceSub>}
								</Price>
								<div className="flex flex-col">
									<TicketTitle>{ticket.title}</TicketTitle>
									{earlyBirdPriceValid && (
										<OriginalPrice>
											${ticket.price}
											{!ticket.priceIncGST ? '+GST' : ''}
										</OriginalPrice>
									)}
								</div>
							</PriceContainer>
							<PriceFeatureContainer>
								{ticket.features.map(feature => (
									<StyledLi key={feature.toString()}>
										<FeatureIconContainer>
											<CheckIcon fontSize="small" />
										</FeatureIconContainer>
										{isString(feature) ? <span>{feature}</span> : feature}
									</StyledLi>
								))}
							</PriceFeatureContainer>
							<div className="text-center">
								<StyledLink href="https://www.eventbrite.com.au/e/web3-convention-tickets-491154535437">
									<span>buy now</span>
								</StyledLink>
							</div>
						</Grid>
					);
				})}
			</Grid>
		</HomeTicketContainer>
	);
};

export default PageTicket;
