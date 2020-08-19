import React, { useState } from "react";
//import { gsap } from "gsap";
import imgArray from "../img/imgArray.js";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import theme from "../UI/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useToggle from "../Hooks/Toggle.js";
//import Test from "../Animations/Test"

const useStyles = makeStyles((theme) => ({
	coverImage: {
		width: "600px",
		height: "400px",
	},
	selectedContainer: {
        height: "100vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	selectedPaper: {
        width: "auto",
		border: "2px solid black",
	},
}));

function ArtistCard(props) {
    const classes = useStyles();

    return (
			<Grid container className={classes.selectedContainer}>
				<Paper className={classes.selectedPaper}>
					<img
						src={props.selected}
						alt="selecte"
						className={classes.coverImage}
					/>
				</Paper>
			</Grid>
		);
}

export default ArtistCard;