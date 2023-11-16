import { EEventType } from '@/constants/event';

interface IEvent {
	_id: string;
	eventType: EEventType;
	start: string;
	end: string;
	duration: string;
	title: string;
	host: string;
}

export interface EventProps {
	event: {
		_id: string;
		key: string;
		title: string;
		ticket: array;
		subscriptions: array;
		coOrganizers: array;
		organizers: array;
		exhibitors: array;
		attendeeGender: array;
		attendees: array;
		state: string;
		banners: array;
		updateAt: string;
		createdAt: string;
		maxRSVPs: number;
		genderPreference: string;
		featured: string;
		meetupEventType: string;
		meetupType: string;
		__v: number;
		address: string;
		contact: string;
		description: string;
		eventAdditionalRequirement: string;
		location: string;
		meta: {
			description: string;
			keywords: string;
			title: string;
		};
		summary: string;
		web3EventType: string;
		period: {
			start: string;
			end: string;
		};
		descriptionImage: {
			url: string;
			originalname: string;
			path: string;
			mimetype: string;
			size: number;
			filename: string;
		};
		cityDetails: {
			_id: string;
			slug: string;
			country: string;
			name: string;
			isOffice: boolean;
			__v: number;
		}[];
	};
}
