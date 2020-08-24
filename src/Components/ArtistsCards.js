import React from "react";
//import { gsap } from "gsap";
import { isolateFeature } from "../Actions/Actions";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import theme from "../UI/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	container: {
		margin: "100px",
		height: "100%",
		width: "100%",
		display: "flex",
		justifyItems: "space-around",
		justifyContent: "space-around",
	},
	showEl: {
		margin: "25px",
		opacity: "1",
	},
	hideEl: {
		transition: "opacity 5s",
		opacity: "0",
		margin: "25px",
	},
	artistCard: {
		width: "600px",
		height: "400px",
	},
	displayNone: {
		display: "none",
	},

	img: { width: "600px", height: "400px" },

	selected: {
		width: "600px",
		height: "400px",
	},
}));

function ArtistCards(props) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);


	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid container className={classes.container}>
				{state.map((img) => (
					<Grid Item className={img.display ? classes.showEl : classes.hideEl}>
						<Paper
							variant="secondary"
							elevation="3"
							className={classes.artistCard}
						>
							<img
								src={img.img}
								className={classes.img}
								alt="mix"
								onClick={() => dispatch(isolateFeature(img))}
							/>
						</Paper>
					</Grid>
				))}
			</Grid>
			{/* <ArtistCard selected={QuietCast}/> */}
		</ThemeProvider>
	);
}

export default ArtistCards;
