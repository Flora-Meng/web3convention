import React, { useEffect, useRef } from 'react';

// Define the properties each event will have
interface IEvent {
	_id: string;
	title: string;
	latitude: number;
	longitude: number;
}

// Define the props for the GoogleMapMarker component
interface GoogleMapProps {
	events: IEvent[];
}

const GoogleMapMarker: React.FC<GoogleMapProps> = ({ events }) => {
	const mapRef = useRef<HTMLDivElement>(null);
	const markersRef = useRef<google.maps.Marker[]>([]);

	// Function to load the Google Maps script
	const loadGoogleMapsScript = (callback: () => void) => {
		if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
			callback();
			return;
		}

		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
		script.async = true;
		script.defer = true;
		script.onload = callback;
		document.head.appendChild(script);
	};

	useEffect(() => {
		loadGoogleMapsScript(() => {
			if (mapRef.current) {
				// Initialize the map
				const map = new window.google.maps.Map(mapRef.current, {
					center: { lat: events[0]?.latitude || 0, lng: events[0]?.longitude || 0 },
					zoom: 8
				});

				// Clear existing markers
				markersRef.current.forEach(marker => marker.setMap(null));
				markersRef.current = [];

				// Create new markers
				events.forEach(event => {
					const marker = new google.maps.Marker({
						position: { lat: event.latitude, lng: event.longitude },
						map,
						title: event.title
					});

					markersRef.current.push(marker);
				});
			}
		});

		// Cleanup function
		return () => {
			markersRef.current.forEach(marker => marker.setMap(null));
		};
	}, [events]);

	return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMapMarker;
