import React from 'react';
import styled from 'styled-components';

import MoreEvents from '@/components/Pages/General-Events/MoreEvents';
import PageCoverTitle from '@/components/Shares/PageCoverTitle';
import coverText from '@/components/Shares/PageCoverTitle/generalEventsCoverText.json';
import ShowOnMapModal from '@/components/Shares/ShowOnMapModal';
import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header/Header';
import PageHead from '@/layouts/PageHead/PageHead';
import { devices } from '@/styles/variables';

const events = [
	{
		_id: '653b47fc5f8de3d0f63e109c',
		key: 'meetp',
		title: 'meetp',
		ticket: [],
		subscriptions: [],
		coOrganizers: [],
		organizers: [],
		exhibitors: [],
		attendeeGender: [],
		attendees: [],
		state: 'published',
		banners: [],
		updateAt: '2024-04-19T06:17:48.000Z',
		createdAt: '2024-02-07T05:17:48.000Z',
		maxRSVPs: 0,
		genderPreference: 'unlimited',
		featured: 'popularEvents',
		meetupEventType: 'web3',
		meetupType: 'offline',
		__v: 0,
		address: '',
		contact: '',
		description: '',
		eventAdditionalRequirement: '',
		location: 'Mel',
		meta: {
			description: '',
			keywords: '',
			title: ''
		},
		summary: '',
		web3EventType: 'web3AiConvention',
		period: {
			start: '2024-04-10T13:02:44.000Z'
		},
		descriptionImage: {
			url: 'http://localhost:3000/uploads/image/f7de7e86350619b1fd35d3c0c499171d.png',
			originalname: 'Screenshot 2023-10-26 at 4.03.21 pm.png',
			path: '/Users/reganleung/Desktop/project/jr-intern.nosync/jrkeystone/public/uploads/image',
			mimetype: 'image/png',
			size: 1910668,
			filename: 'f7de7e86350619b1fd35d3c0c499171d.png'
		},
		cityDetails: [
			{
				_id: '651f950bb1d6d61e950a41ab',
				slug: 'brisbane',
				country: 'Australia',
				name: 'Brisbane',
				isOffice: false,
				__v: 0
			}
		]
	},
	{
		_id: '65430c97337c631470c465b3',
		key: 'pr-testing-2',
		title: 'pr testing 2',
		ticket: [],
		subscriptions: [],
		coOrganizers: [],
		organizers: [],
		exhibitors: [],
		attendeeGender: [],
		attendees: [],
		state: 'published',
		banners: [],
		updateAt: '2023-11-02T02:42:31.000Z',
		createdAt: '2023-11-02T02:42:31.000Z',
		maxRSVPs: 0,
		genderPreference: 'unlimited',
		featured: 'default',
		meetupEventType: 'web3',
		meetupType: 'offline',
		__v: 0,
		address: '',
		city: '651f950bb1d6d61e950a41ab',
		contact: '',
		description: '',
		location: 'Mel',
		meta: {
			description: '',
			keywords: '',
			title: ''
		},
		web3EventType: 'web3AiConvention',
		period: {
			start: '2024-04-03T04:11:54.000Z'
		},
		descriptionImage: {
			url: 'http://localhost:3000/uploads/image/229db0bcfbedd7f6171f4d260588026a.png',
			originalname: 'Screenshot 2023-10-26 at 4.14.44 pm.png',
			path: '/Users/reganleung/Desktop/project/jr-intern.nosync/jrkeystone/public/uploads/image',
			mimetype: 'image/png',
			size: 998981,
			filename: '229db0bcfbedd7f6171f4d260588026a.png'
		},
		cityDetails: [
			{
				_id: '651f950bb1d6d61e950a41ab',
				slug: 'brisbane',
				country: 'Australia',
				name: 'Brisbane',
				isOffice: false,
				__v: 0
			}
		]
	}
];

const Cover = styled.div`
	background-image: url('/images/background/generalEventsHeaderBG.png');
	background-position: center;
	background-size: cover;
	font-family: Arial;
	height: 478px;
	letter-spacing: 0.78px;
	@media ${devices.mobile} {
		background-image: url('/images/background/generalEventsHeaderBG.png');
		height: 360px;
		background-size: auto;
	}
`;

const GeneralEventsPage = () => {
	const meta = {
		description:
			'Web3 Hackathon is Australia most premier annual hackathon event catered to a global audience to support the next generation of Web3 innovation and products.',
		keywords:
			'University Hackathon, Web3 Hackathon, Web3, Blockchain, NFT, Whale Yacht Party, Pitch Space',
		title: 'Web3 Hackathon, Web3 Convention 2024 | April, 2024 | Stages'
	};
	return (
		<>
			<PageHead meta={meta} />
			<Cover>
				<Header />
				<PageCoverTitle coverText={coverText} />
			</Cover>
			<MoreEvents />
			<Footer />

			<h1>this is GeneralEventsPage</h1>
			{events.map(event => (
				<ShowOnMapModal key={event._id} event={event} />
			))}
		</>
	);
};

export default GeneralEventsPage;
