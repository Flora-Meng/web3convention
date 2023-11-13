import request, { baseURL } from '@/utils/request';

export const fetchMeetups = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/api/meetups?meetupEventType=web3'
	});
};

export default fetchMeetups;
