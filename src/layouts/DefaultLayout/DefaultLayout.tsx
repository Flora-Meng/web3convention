import Header from '@/layouts/Header';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
	</>
);

export default DefaultLayout;
