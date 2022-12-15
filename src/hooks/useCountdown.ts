import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useState } from 'react';

import { TCountdownInfo } from '@/interfaces/countdown';

dayjs.extend(duration);

const useCountdown = (commenceDate: string) => {
	const [countdownInfo, setCountdownInfo] = useState<TCountdownInfo>();
	const timer = setInterval(() => {
		const currentDate = dayjs();
		if (currentDate.isAfter(dayjs(commenceDate))) {
			clearInterval(timer);
		}
		const commenceDateDuration = dayjs.duration(dayjs(commenceDate).diff(currentDate));
		setCountdownInfo({
			month: commenceDateDuration.years()
				? dayjs(commenceDate).diff(currentDate, 'm')
				: commenceDateDuration.months(),
			day: commenceDateDuration.days(),
			minute: commenceDateDuration.minutes(),
			hour: commenceDateDuration.hours(),
			second: commenceDateDuration.seconds()
		});
	}, 1000);
	return { timer, countdownInfo };
};

export default useCountdown;
