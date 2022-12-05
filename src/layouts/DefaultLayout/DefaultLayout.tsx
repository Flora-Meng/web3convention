import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
		<Footer />
	</>
);

export default DefaultLayout;
