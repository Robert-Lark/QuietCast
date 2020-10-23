import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "../UI/galleryStyles.css";
import hiddenRivers from "./hidden_rivers.jpg";
import BOC from "./boardsOfCanada.jpg";

function AlbumModal(props) {
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const current = useSelector((state) => state.interviewInfo[0]);
	console.log(`current model info ${current}`)
	const history = useHistory();
	const purchase = () => history.push(current.artistAlbumUrl1);
	const [modalImage, setModalImage] = useState("");
	const [modalTitle, setModalTitle] = useState(current.artistAlbumTitle1);
	const [modalText, setModalText] = useState(current.artistAlbumInfo1);
	const [modalUrl, setModalUrl] = useState(current.artistAlbumUrl1);
	function showImage(el) {
		if (!el) {
			console.info("no image to show");
			return;
		}
		setModalImage(el.src);
	}
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
						<img src={modalImage} />
						<figcaption>
							<h2>{modalTitle}</h2>
							<p>{modalText}</p>
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
