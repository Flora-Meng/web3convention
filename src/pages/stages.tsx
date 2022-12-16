import MainContents from '@/components/Pages/Stages/MainContents';
import DefaultLayout from '@/layouts/DefaultLayout';

type ComponentType = React.FC & { layout: typeof DefaultLayout };
const StagePage: ComponentType = () => {
	return <MainContents />;
};

StagePage.layout = DefaultLayout;

export default StagePage;
