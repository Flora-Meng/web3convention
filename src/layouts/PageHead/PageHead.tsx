import Head from 'next/head';

import IMeta from '@/interfaces/meta';

interface PageHeadProps {
	meta?: IMeta | Partial<IMeta>;
	url?: string;
	thumbnailSrc?: string;
	title?: string;
}

const PageHead: React.FC<PageHeadProps> = props => {
	const {
		meta,
		url = 'https://web3convention.com/',
		thumbnailSrc = 'https://web3convention.com/web3-logo.svg',
		title
	} = props;
	const pageTitle = title ? `${title}｜` : '';
	const defaultTitle = 'Web3 Convention';

	const metaList = [
		{
			name: 'description',
			content: meta?.description ?? defaultTitle
		},
		{
			name: 'keywords',
			content: meta?.keywords ?? 'web3'
		},
		{ name: 'referrer', content: 'always' },
		{
			name: 'robots',
			content: 'index, follow'
		},
		{
			property: 'og:url',
			content: url
		},
		{
			property: 'og:title',
			content: meta?.title ?? defaultTitle
		},
		{
			property: 'og:site_name',
			content: meta?.title ?? defaultTitle
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			property: 'og:description',
			content: meta?.description || defaultTitle
		},
		{
			property: 'twitter:title',
			content: meta?.title ?? defaultTitle
		},
		{
			property: 'twitter:description',
			content: meta?.description ?? defaultTitle
		},
		{ property: 'twitter:image:src', content: thumbnailSrc ?? 'web3' },
		{ property: 'og:image', content: thumbnailSrc ?? '' },
		{ property: 'og:image:secure_url', content: thumbnailSrc ?? '' }
	];

	return (
		<Head>
			<title>
				{meta?.title ? `${meta?.title}｜${defaultTitle}` : `${pageTitle}${defaultTitle}`}
			</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			{metaList.map(m => (
				<meta
					name={m.name}
					property={m.property}
					content={m.content}
					key={m.name ?? m.property}
				/>
			))}
		</Head>
	);
};

export default PageHead;
