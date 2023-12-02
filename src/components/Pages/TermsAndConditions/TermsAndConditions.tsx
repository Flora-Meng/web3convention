import styled from 'styled-components';

import { color, devices } from '@/styles/variables';

const { blackColor, whiteColor, primaryColor } = color;
const Container = styled.div`
	background-color: ${blackColor};
	padding: 90px 0 148px 0;
	width: 100%;
`;
const TermsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const TermsTitle = styled.h2`
	color: ${primaryColor};
	font-size: 20px;
	font-weight: bold;
	margin-top: 40px;
`;
const Content = styled.p`
	color: ${whiteColor};
	font-size: 16px;
	line-height: 1.83;
	margin: 0;
	white-space: pre-line;
`;
const ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 1440px;
	width: calc(100vw - 40px);
	@media ${devices.laptop} {
		max-width: 1440px;
		width: calc(100vw - 200px);
	}
`;
const termsList = [
	{
		_id: '1',
		title: '1. Acceptance of Terms',
		text: 'By purchasing a ticket to the "Web3 Convention" on our website, you agree to the following terms and conditions. Please read them carefully.'
	},
	{
		_id: '2',
		title: '2. Ticket Purchase',
		text: `You are purchasing your tickets for this Event from:
        Web3 Convention (WEB3 PTY. LTD.)
        ABN: 86 618 319 770
        Email: info@web3convention.com
        All transactions are in Australian Dollars (AUD) unless otherwise stated.
        You may purchase tickets for the "Web3 Convention" on our website, subject to availability.
        All ticket sales are final. Refunds and exchanges will not be provided except as required by Australian consumer law.
        The purchase of a ticket grants you access to the "Web3 Convention" on the specified date(s) and venue.`
	},
	{
		_id: '3',
		title: '3. Ticket Usage',
		text: 'Tickets are non-transferable unless otherwise stated.\nTickets may not be resold at a price exceeding the price printed on the ticket without explicit written permission.\nYour ticket may be revoked without refund if found to be in violation of these terms.'
	},
	{
		_id: '4',
		title: '4. Event Changes',
		text: 'We reserve the right to add, withdraw or substitute speakers, displays or entertainment without notice.'
	},
	{
		_id: '5',
		title: '5. Event Cancellation',
		text: 'In the event of cancellation due to circumstances beyond our control, liability is limited to refund of ticket price only.'
	},
	{
		_id: '6',
		title: '6. Ticket Distribution and Entry Procedure',
		text: 'Tickets for the "Web3 Convention" will be distributed at the entrance on the day of the convention.\nTo receive your tickets, you must present your valid ticket purchase records and personal identification.\nThe name on the ticket purchase records must match the name on the identification provided.\nYou are required to wear the issued ID card as your ticket, securely hanging it around your neck and visible at all times during the Event.\nEntry to the convention will be granted only to individuals with a valid and properly worn ID card/ticket.\nDefaced, damaged or lost tickets may not be accepted for entry.\nLost or stolen ID cards/tickets will not be reissued. You are responsible for the safekeeping of your ID card/tickets.\nYou are solely responsible for your personal belongings at all times.\nWe reserve the right to conduct security searches to ensure safety.\nWe reserve the right to refuse entry or remove any person from the Event at our discretion.'
	},
	{
		_id: '7',
		title: '7. Processing and Credit Card Fees',
		text: "If there are any processing or credit card fees, these will be calculated and Convention to you during purchase.\nIf there is $0 or no value in the 'Fees' column or fields, that means there are no fees applicable to your purchase."
	},
	{
		_id: '8',
		title: '8. Privacy Policy',
		text: 'Your personal information is being collected to facilitate your purchase and to allow entry to the event.\nYour information is shared with the Event Organiser, to enable them to communicate to you regarding the event.\nIf you wish to be removed from any lists please email us at info@web3convention.com.'
	},
	{
		_id: '9',
		title: '9.Limitation of Liability',
		text: 'Web3 Convention shall not be liable for any loss, injury or damage sustained at or in connection with the Event.'
	},
	{
		_id: '10',
		title: '10. Disclaimer, Terms and Conditions',
		text: "By entering your details you are agreeing to the terms and conditions listed below.\nBy scanning your QR Code at any exhibitor, you are agreeing for your details to be supplied to them and to their Terms and Conditions. (See exhibitor's stands for more details).\nTo view the Organiser's Terms & Conditions, click here."
	},
	{
		_id: '11',
		title: 'Definitions',
		text: '(a) "web" or "website" or "site" means the system or database on which the personal information is stored; (b) "You" or "your" means Web3 Convention (WEB3 PTY. LTD.), "I," \n"my," or "me" means the person who has entered information into any electronic form on a site.\n\n(d) "information" or "personal information" means any information entered into any electronic form that may identify a person (e) "Convention" means the event for which you \nregistered.'
	},
	{
		_id: '12',
		title: 'General',
		text: 'I confirm that the information I have entered is completely accurate, and in particular, I have taken care to ensure that my email address is correctly entere\n\nI agree and consent to my personal information being utilized for current and future competitions, draws, lotteries, and promotions by the promoters and exhibitors of the Convention.\n\nI agree and consent to, for promotional purposes, you providing the information I have entered into any electronic form on your site to entities/businesses attached, related, affiliated, or associated to the Convention, including but not limited to the Event Organiser, presenters, sponsors, exhibitors, and suppliers.\n\nI agree that by my entering into any competitions at the Convention, I agree and consent to my personal information being utilized by such competition for the competition purposes and the promoter of the competition and authorize the publication of my details as they relate to the competition.\n\nI agree that you will not be liable to me, except in the case of fraud, for any act or omission (whether negligent or misleading or deceptive or otherwise) by you in the performance or purported performance of your obligations under these terms and conditions.\n\nI indemnify you against all claims, except in the case of fraud, arising out of or in any way connected with any act or omission by you in the performance or purported performance of your obligations under these terms and conditions.\n\nI agree that liability on your part or on the part of your servants or agents for damages for or in respect of any claim arising out of or in connection with the relationship established by this agreement or any conduct under it or any orders or instructions given to you by me, shall not in any event (and whether or not such liability results from or involves negligence) exceed $50.00.\n\nI agree that by my entering information into any electronic form on your site, that I am agreeing to the terms and conditions herein and to the Disclaimer.\n\nBy purchasing a ticket for the "Web3 Convention," you agree to the above terms and conditions.'
	},
	{
		_id: '13',
		title: 'Governing Law',
		text: 'These Terms are governed by the laws of New South Wales, Australia.'
	}
];

const TermsAndConditions = () => {
	return (
		<Container>
			<ContentContainer>
				{termsList.map(term => (
					<TermsContainer key={term._id}>
						<TermsTitle>{term.title}</TermsTitle>
						<Content>{term.text}</Content>
					</TermsContainer>
				))}
			</ContentContainer>
		</Container>
	);
};

export default TermsAndConditions;
