import React from "react";
//import { gsap } from "gsap";


import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


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
	const display = useSelector((state) => state);
    return (
			<Grid container className={classes.selectedContainer}>
				<Paper className={classes.selectedPaper}>
			
				</Paper>
			</Grid>
		);
}

export default ArtistCard;