import React, { useState, useReducer } from "react";
//import { gsap } from "gsap";
import imgArray from "../img/imgArray.js";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import theme from "../UI/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useToggle from "../Hooks/Toggle.js";
import ArtistCard from "./ArtistCard";
import { classReducer, initialState } from "..//Reducers";
//import Test from "../Animations/Test"

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
	img1: { width: "600px", height: "400px", opacity: "1",},
	img2: { width: "600px", height: "400px" },
	img3: { width: "600px", height: "400px" },
	img4: { width: "600px", height: "400px" },
	img5: { width: "600px", height: "400px" },
	img6: { width: "600px", height: "400px" },
	img7: { width: "600px", height: "400px" },
	img8: { width: "600px", height: "400px" },
	img9: { width: "600px", height: "400px" },
	selected: {
		width: "600px",
		height: "400px",
	},
}));

function ArtistCards() {
	const [state, dispatch] = useReducer(classReducer, initialState);

	const [QuietCast, setQuietCast] = useState();

	const imgStyling = () => {
		if (QuietCast === 1) {
			return classes.img1;
		}
		if (QuietCast === 2) {
			return classes.img2;
		}
		if (QuietCast === 3) {
			return classes.img3;
		}
		if (QuietCast === 4) {
			return classes.img4;
		}
		if (QuietCast === 5) {
			return classes.img5;
		}
		if (QuietCast === 6) {
			return classes.img6;
		}
		if (QuietCast === 7) {
			return classes.img7;
		}
		if (QuietCast === 8) {
			return classes.img8;
		}
		if (QuietCast === 9) {
			return classes.img9;
		} else return classes.img;
	};


	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				onClick={() => dispatch({ type: "TOGGLE_CLASS_DISPLAY" })}
				className={classes.container}
			>
				{imgArray.map((img) => (
					<Grid Item className={state.Display ? classes.showEl : classes.hideEl}>
						<Paper
							variant="secondary"
							elevation="3"
							className={classes.artistCard}
						>
							<img
								src={img.img}
								className={imgStyling()}
								alt="mix"
								onClick={() => setQuietCast(img.id)}
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
