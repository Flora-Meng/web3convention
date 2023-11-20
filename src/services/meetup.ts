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
		url: '/api/meetups?meetupEventType=web3&featured=generalEvent&state=published'
	});
};

export default fetchMeetups;
