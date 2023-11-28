import Snackbar from '@mui/material/Snackbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import contactTableData from './contactTableData.json';
import { color, devices } from '@/styles/variables';
import imageLoader from '@/utils/loader';

const { primaryColor } = color;

const Section = styled.section`
	background-color: #000;
	color: #fff;
`;

const Container = styled.div`
	align-items: center;
	display: flex;
	gap: 36px;
	margin: 0 auto;
	max-width: 1440px;
	padding: 24px 0 110px;
	width: calc(100vw - 40px);
	@media ${devices.laptop} {
		width: calc(100vw - 200px);
	}
	@media ${devices.desktop} {
		width: calc(100vw - 360px);
	}

	.MuiTableContainer-root {
		width: 720px;
	}

	table {
		border: 1px solid #343434;
	}

	th,
	td {
		background-color: #080808;
		border-color: #343434;
	}

	thead th {
		color: #999999;
		font-size: 16px;
		padding: 16px;
	}

	th,
	td {
		color: #fff;
		font-size: 16px;
		padding: 16px;
	}

	.MuiSnackbar-root {
		left: 50%;
		top: 100px;
		transform: translateX(-50%);
		width: 230px;
		.MuiPaper-root {
			background-color: #fff;
			color: #000;
		}
	}
`;

const Email = styled.p`
	color: ${primaryColor};
	cursor: pointer;
	margin: 0;
	position: relative;
	width: fit-content;
	&::after {
		background-image: url('/icons/copy-icon.svg');
		content: '';
		height: 18px;
		left: calc(100% + 12px);
		opacity: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 18px;
		transition: opacity 0.3s ease-in-out;
	}
	&:hover {
		&::after {
			opacity: 1;
		}
	}
`;

const StyledLogo = styled(Image)`
	display: none;
	@media ${devices.largeLaptop} {
		display: block;
	}
`;

const MessageContainer = styled.div`
	align-items: center;
	display: flex;
	gap: 8px;
`;

const MessageText = styled.p`
	color: #000;
	font-size: 16px;
	font-weight: bold;
	margin: 0;
`;

const ContactTable = () => {
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleClickCopy = async (email: string) => {
		await navigator.clipboard.writeText(email);
		setOpenSnackbar(true);
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};
	return (
		<Section>
			<Container>
				<TableContainer>
					<Table sx={{ width: 720 }}>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Region</TableCell>
								<TableCell>Email</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{contactTableData.map(row => (
								<TableRow key={row.id}>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell>{row.region}</TableCell>
									<TableCell>
										<Email onClick={() => handleClickCopy(row.email)}>
											{row.email}
										</Email>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<StyledLogo
					src="/images/web3-logo-bg.webp"
					loader={imageLoader}
					alt="success-icon"
					width={444}
					height={162}
					unoptimized
				/>
				<Snackbar
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					open={openSnackbar}
					onClose={handleCloseSnackbar}
					autoHideDuration={3000}
					message={
						<MessageContainer>
							<Image
								src="/icons/success-icon.svg"
								loader={imageLoader}
								alt="success-icon"
								width={20}
								height={20}
							/>
							<MessageText>Email address copied</MessageText>
						</MessageContainer>
					}
				/>
			</Container>
		</Section>
	);
};

export default ContactTable;
