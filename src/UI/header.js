import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/toolbar";
import Typography from "@material-ui/core/Typography";
import { HideOnScroll } from "../Animations/HideOnScroll";
import {useLocalStorage} from "../Hooks/UseLocalStorage.js"
import useToggle from "../Hooks/Toggle.js";
import { Reducer, initialState} from "../Reducers/Reducer"

const useStyles = makeStyles((theme) => ({
	text: {
		width: "100vw",
		textAlign: "center",
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
	},
	Light: {
		cursor: "pointer",
		fontSize: "1em",
	},
	Dark: { cursor: "pointer", fontSize: "1em" },
	hideEl: {
		display: "none",
	},
}));

export default function Header(props) {
	 const darkMode1 = useSelector(state => state.display);
  const dispatch = useDispatch();
	HideOnScroll(props)
	const classes = useStyles();
	return (
		<React.Fragment>
			<HideOnScroll>
				<Appbar color="secondary">
					<Toolbar disableGutters>
						<Typography variant="h3" color="primary" className={classes.text}>
							Quiet Cast
						</Typography>
						<Typography
							onClick={() => {
								dispatch({ type: "TOGGLE_CLASS_DARK" });
							}}
							variant="h3"
							color="primary"
							className={darkMode1 ? classes.Light : classes.hideEl}
						>
							Light
						</Typography>
						<Typography
							onClick={() => dispatch({ type: "TOGGLE_CLASS_DARK" })}
							variant="h3"
							color="primary"
							className={!darkMode1 ? classes.Dark : classes.hideEl}
						>
							Dark
						</Typography>
					</Toolbar>
				</Appbar>
			</HideOnScroll>
			{/* <div className={classes.toolbarMargin} />			 */}
		</React.Fragment>
	);
}
