import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "../UI/galleryStyles.css";


function AlbumModal(props) {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const history = useHistory();
	const purchase = () => history.push(props.url);
	return (
		<div className="galleries">
			<div className="modal">
				<div className="modalInner">
					<button
						aria-label="Previous Photo"
						className="prev"
						
					>
						←
					</button>
					<figure>
						<img src={props.image} />
						<figcaption>
							<h2>{props.title}</h2>
							<p>{props.text}</p>
							<button onClick={purchase}>Order</button>
						</figcaption>
					</figure>
					<button className="next" aria-label="Next Photo" >
						→
					</button>
				</div>
			</div>
			;
		</div>
	);
}

export default AlbumModal;
