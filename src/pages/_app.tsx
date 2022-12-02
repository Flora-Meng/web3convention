import { Fragment } from 'react';
import { ThemeProvider } from '@mui/material';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import type { Page } from '@/interfaces/page';
import defaultTheme from '@/styles/theme';

type Props = AppProps & {
	Component: Page;
};

export default function App({ Component, pageProps }: Props) {
	const getLayout = Component.getLayout ?? (page => page);
	const Layout = Component.layout ?? Fragment;

	return (
		<ThemeProvider theme={defaultTheme}>
			<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
		</ThemeProvider>
	);
}
