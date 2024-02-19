import { useEffect, useState } from 'react';

const Marker: React.FC<google.maps.MarkerOptions> = options => {
	const [marker, setMarker] = useState<google.maps.Marker>();
	const googleMapPrefix = 'https://www.google.com/maps?q=';
	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	useEffect(() => {
		if (marker) {
			marker.setOptions(options);

			google.maps.event.addListener(marker, 'click', () => {
				const googleMapUrl = `${googleMapPrefix}${options.position?.lat},${options.position?.lng}`;
				window.open(googleMapUrl, '_blank');
			});
		}
	}, [marker, options]);

	return null;
};

export default Marker;
