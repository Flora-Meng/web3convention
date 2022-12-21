import React, { useEffect, useRef, useState } from 'react';

interface MapProps extends google.maps.MapOptions {
	children?: React.ReactNode;
}

const Map: React.FC<MapProps> = props => {
	const { children, center, zoom } = props;
	const ref = useRef<HTMLDivElement>(null);
	const [map, setMap] = useState<google.maps.Map>();

	useEffect(() => {
		if (ref.current && !map) {
			setMap(
				new window.google.maps.Map(ref.current, {
					center,
					zoom
				})
			);
		}
	}, [ref, map]);
	return (
		<>
			<div ref={ref} style={{ height: '50vh', width: '100%' }} />
			{React.Children.map(children, child => {
				if (React.isValidElement(child)) {
					return React.cloneElement<google.maps.Map | any>(child, { map });
				}
				return null;
			})}
		</>
	);
};

export default Map;
