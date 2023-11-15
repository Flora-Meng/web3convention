type LogoInfo = {
	url: string;
};

type Exhibitor = {
	name: string;
	description: string;
	logo: LogoInfo;
	_id: string;
};

type CityInfo = {
	name: string;
	description: string;
};

type Period = {
	end: string;
	start: string;
};

type Banner = {
	url: string;
};

interface IMeetup {
	_id: string;
	title: string;
	period: Period;
	description: string;
	address: string;
	exhibitors: Exhibitor[];
	city: CityInfo[];
	bannersUploader: Banner;
}
