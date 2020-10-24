import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import "../UI/galleryStyles.css";

const useStyles = makeStyles((theme) => ({
	dialog: {
		width: "100%",
		height: "50%",
	},
	container: {
		margin: "100px",
		height: "100%",
		width: "100%",
		display: "flex",
		justifyItems: "space-around",
		justifyContent: "space-around",
	},
	galleries: {border: "2px solid black", textAlign: "center",},
	img: { width: "300px", height: "300px", margin: "30px" },
	buttons: { display: "flex", justifyContent: "space-around" },
	button: { margin: "30px" },
}));

function AlbumModal(props) {
	const history = useHistory();
	const purchase = () => history.push(props.urlPurchase);
	const listen = () => history.push(props.urlListen);
	const classes = useStyles();
	return (
		<div>
			<Dialog onClose={props.close} open={props.open}>
				<div className={classes.dialog}>
					<div onClose={props.close} className="galleries">
						<Typography>{props.title}</Typography>
					</div>
					<div>
						<img src={props.image} className={classes.img} />
					</div>
					<div className={classes.buttons}>
						<Button className={classes.button} onClick={purchase}>
							Order
						</Button>
						<Button className={classes.button} onClick={listen}>
							Listen
						</Button>
					</div>
				</div>
			</Dialog>
		</div>
	);
}

// 	return (
// 		<div className="galleries">
// 			<div className="modal">
// 				<div className="modalInner">
// 					<button
// 						aria-label="Previous Photo"
// 						className="prev"

// 					>
// 						←
// 					</button>
// 					<figure>
// 						<img src={props.image} />
// 						<figcaption>
// 							<h2>{props.title}</h2>
// 							<p>{props.text}</p>
// 							<button onClick={purchase}>Order</button>
// 						</figcaption>
// 					</figure>
// 					<button className="next" aria-label="Next Photo" >
// 						→
// 					</button>
// 				</div>
// 			</div>
// 			;
// 		</div>
// 	);
// }

export default AlbumModal;
