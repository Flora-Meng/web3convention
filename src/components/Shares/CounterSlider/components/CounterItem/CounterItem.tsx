import { useRef } from 'react';
import { useCountUp } from 'react-countup';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CounterItemProps {
	end: number;
	duration?: number;
	delay?: number;
	prefix?: string;
	suffix?: string;
	shouldReset: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ suffix, shouldReset, ...props }) => {
	const countUpRef = useRef(null);

	const formatNumberWithCommas = (value: number) => {
		return value.toLocaleString() + (suffix || '');
	};

	const { start } = useCountUp({
		ref: countUpRef,
		start: 0,
		formattingFn: formatNumberWithCommas, // Use the formatting function
		...props
	});

	if (shouldReset) {
		start();
	}

	return <div ref={countUpRef} />;
};

export default CounterItem;
