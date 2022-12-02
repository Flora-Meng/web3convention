import PageHead from '@/layouts/PageHead';
import DefaultLayout from '@/layouts/DefaultLayout';

type ComponentType = React.FC & { layout: typeof DefaultLayout };

const Homepage: ComponentType = props => {
	return (
		<>
			<PageHead title="Web 3 Convention" />
		</>
	);
};

Homepage.layout = DefaultLayout;

export default Homepage;
