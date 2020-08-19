import { createMuiTheme } from "@material-ui/core/styles";

// * colors
const lightGreen = "#869965";
const green = "#66724C";
const offWhite = "#FEFCFB";
const pink = "#E86895";
const lightPink = "#FAD6F6";
const blue = "lightblue";


export default createMuiTheme({
	palette: {
		common: {
			green: green,
			lightGreen: lightGreen,
			pink: pink,
			lightPink: lightPink,
			blue: blue,
		},
		action: {},
		primary: {
			main: lightGreen,
		},
		secondary: {
			main: offWhite,
		},
	},
	typography: {
		h1: {},
		h2: {},
		h3: {fontWeight: 300},
		h4: {},
		h5: {},
		h6: {},
		p: {},
		subtitle1: {},
		subtitle2: {},

		button: {},
		caption: {},
		iconButtonText: {},
		header: {},
	},
});
