import request, { baseURL } from '@/utils/request';

export const fetchMeetups = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3'
	});
};

export const fetchFeaturedEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=sideEvent&state=published&featured=popularEvents'
	});
};

export const fetchMoreEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=sideEvent&state=published&featured=default'
	});
};
