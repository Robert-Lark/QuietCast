import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import "../UI/galleryStyles.css";

const useStyles = makeStyles((theme) => ({
	dialog: {
		width: "100%",
		height: "100%",
	},
	container: {
		margin: "100px",
		height: "100%",
		width: "100%",
		display: "flex",
		justifyItems: "space-around",
		justifyContent: "space-around",
	},
	img: { width: "400px", height: "400px" },
}));



function AlbumModal(props) {
		const history = useHistory();
		const purchase = () => history.push(props.url);
	const classes = useStyles();
	return (
		<div >
			<Dialog onClose={props.close} open={props.open}>
				<div className={classes.dialog}>
				<div onClose={props.close} className="galleries">
					{props.title}
				</div>
				<div>
					<img src={props.image} className={classes.img} />
				</div>
				<div>
					<button onClick={purchase}>Order</button>
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
