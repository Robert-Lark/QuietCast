import React from "react";
//import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Button } from '@material-ui/core'
import {returnHome} from '../Actions/Actions'

const useStyles = makeStyles((theme) => ({
	coverImage: {
		width: "600px",
		height: "400px",
		border: "2px solid red",
	},
	selectedContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	selectedContainer1: {

height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignContent: "space-between",
	},
	selectedPaper: {

		marginBottom: "25px",

	},
	question: {
textDecoration:"bold",
	},

}));

function ArtistCard(props) {
	const classes = useStyles();
	const display = useSelector((state) => state.interviewInfo[0]);
		const dispatch = useDispatch();

	return (
		<Grid container>
			<Grid container className={classes.selectedContainer}>
				<Paper className={classes.selectedPaper}>
					<h1>{display.title}</h1>
				</Paper>
			</Grid>
			<Grid container className={classes.selectedContainer1}>
				<Typography ClassName={classes.question}>{display.body1}</Typography>
				<Typography>{display.body2}</Typography>
				<Typography>{display.body3}</Typography>
				<Typography>{display.body4}</Typography>
			</Grid>
			<Button onClick={() => dispatch(returnHome())}>HOME</Button>
		</Grid>
	);
}

export default ArtistCard;
