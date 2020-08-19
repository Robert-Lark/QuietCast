import React, { useState, useReducer } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {useToggle} from "../Hooks/Toggle.js";
import theme from "../UI/Theme";
import Header from "../UI/header";
import ArtistCards from "./ArtistsCards";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useLocalStorage } from "../Hooks/UseLocalStorage"
import { classReducer, initialState } from "..//Reducers";
//import { darkModeContext } from "../UI/header"


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
const [state, dispatch] = useReducer(classReducer, initialState);
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				className={state.dark ? classes.containerDark : classes.containerLight}
			>
				<Header />
				<ArtistCards />
			</Grid>
		</ThemeProvider>
	);
}

export default App;
