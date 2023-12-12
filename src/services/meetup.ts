import request, { baseURL } from '@/utils/request';

export const fetchMeetups = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3'
	});
};
export const fetchMeetupsPagination = (page = 1, pageSize = 12) => {
	return request({
		baseURL,
		method: 'GET',
		url: `/api/meetups?meetupEventType=web3&page=${page}&pageSize=${pageSize}`
	});
};
export const fetchMoreEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&featured=default'
	});
};

export const fetchFeaturedEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=sideEvent&state=published&featured=popularEvents'
	});
};

export const fetchConventionEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=web3AiConvention&featured=default'
	});
};
export const fetchFeaturedConventionEvents = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3&web3EventType=web3AiConvention&featured=popularEvents'
	});
};
export default fetchMeetups;
