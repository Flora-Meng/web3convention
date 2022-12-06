import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

import type { Page } from '@/interfaces/page';
import defaultTheme from '@/styles/theme';
import '../styles/globals.css';

type Props = AppProps & {
	Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
	const getLayout = Component.getLayout ?? (page => page);
	const Layout = Component.layout ?? Fragment;

	return (
		<ThemeProvider theme={defaultTheme}>
			<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
		</ThemeProvider>
	);
};

export default App;
