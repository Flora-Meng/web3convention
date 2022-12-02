import { createTheme } from '@mui/material/styles';

import { color } from './variables';

// Warning: MUI
const defaultTheme = createTheme({
	typography: {
		button: {
			textTransform: 'none'
		}
	},
	palette: {
		primary: {
			main: `${color.primaryColor}`
		}
	}
});

export default defaultTheme;
