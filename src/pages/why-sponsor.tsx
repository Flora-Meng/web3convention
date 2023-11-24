import styled from 'styled-components';

import ReasonsToSponsor from '@/components/Pages/Why-Sponsor/ReasonsToSponsor';
import SessionTypesSection from '@/components/Pages/Why-Sponsor/SessionTypesSection';
import Footer from '@/layouts/Footer';
import { devices } from '@/styles/variables';

const WhySponsorPage = () => {
	return (
		<>
			<SessionTypesSection />
			<ReasonsToSponsor />
			<Footer />
		</>
	);
};

export default WhySponsorPage;
