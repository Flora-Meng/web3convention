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
	},
	breakpoints: {
		values: {
			xs: 320,
			sm: 576,
			md: 768,
			lg: 1024,
			xl: 1920
		}
	}
});

export default defaultTheme;
