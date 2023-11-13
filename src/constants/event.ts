enum EWeekday {
	'sun',
	'mon',
	'tus',
	'wed',
	'thus',
	'fri',
	'sat'
}

export enum EEventType {
	KEYNOTE = 'keynote',
	SEMINAR = 'seminar',
	WORKSHOP = 'workshop',
	PITCH = 'pitch',
	HACKATHON = 'hackathon',
	PARTY = 'party'
}

export const WEEKDAY = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

export const timeFormatOptions: Intl.DateTimeFormatOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	timeZoneName: 'short',
	hour12: true,
	timeZone: 'Australia/Sydney'
};

export const ALL_EVENTS = 'all-events';

export default EWeekday;
