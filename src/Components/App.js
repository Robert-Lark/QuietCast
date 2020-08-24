import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {useToggle} from "../Hooks/Toggle.js";
import theme from "../UI/Theme";
import Header from "../UI/header";
import ArtistCards from "./ArtistsCards";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useLocalStorage } from "../Hooks/UseLocalStorage"



const useStyles = makeStyles((theme) => ({
	containerLight: {
		height: "100%",
		width: "100%",
	},
	containerDark: {
		height: "100%",
		width: "100%",
    backgroundColor: "#353C51",

	},
}));

function App() {
	 const darkMode0 = useSelector(state => state.dark);
	  
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				className={darkMode0 ? classes.containerDark : classes.containerLight}
			>
				<Header />
				<ArtistCards />
			</Grid>
		</ThemeProvider>
	);
}

export default App;
