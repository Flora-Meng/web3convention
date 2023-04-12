type DateOption = '20 April 2024' | '21 April 2024';

interface IApplyToSpeakProps {
	date: DateOption;
	firstName: string;
	lastName: string;
	email: string;
	mobileNumber: string;
	jobTitle: string;
	companyName: string;
	companyBio: string;
	speakerBio: string;
	speechTopic?: string;
	agreeToTerms: boolean;
}
