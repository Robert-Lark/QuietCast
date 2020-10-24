import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "../UI/galleryStyles.css";
import AlbumModal from "./AlbumModal";
import { Typography } from "@material-ui/core";

function ArtistReleasesSlider(props) {
	//SELECTOR
	const currentModal = useSelector((modal) => modal.interviewInfo);
	//STATE
	const [modalImage, setModalImage] = useState("");
	const [modalTitle, setModalTitle] = useState();
	const [modalText, setModalText] = useState();
	const [modalUrlPurchase, setModalUrlPurchase] = useState();
	const [modalUrlListen, setModalUrlListen] = useState();
	const [modalOpen, setModalOpen] = useState(false);
	function showImage(el) {
		if (!el) {
			console.info("no image to show");
			return;
		}
		setModalImage(el.img);
		setModalTitle(el.artistAlbumTitle);
		setModalText(el.artistAlbumInfo);
		setModalUrlPurchase(el.purchse);
		setModalUrlListen(el.listen);
		setModalOpen(true);
	}
	//MAP DATA
	const galleryImagesArtist = currentModal[0].modalArtist;
	const galleryImagesMix = currentModal[0].modalMix;
	//CLOSEMODAL
	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<div className="galleries">
			<div className="gallery gallery1">
				{galleryImagesArtist.map((image) => (
					<img
						src={image.img}
						alt="Cover art of album from the artist"
						onClick={() => showImage(image)}
					/>
				))}
			</div>

			<div className="gallery gallery2">
				{galleryImagesMix.map((image) => (
					<img
						src={image.img}
						alt="Cover art of album from the mix"
						onClick={() => showImage(image)}
					/>
				))}
			</div>
			<AlbumModal
				image={modalImage}
				title={modalTitle}
				text={modalText}
				urlPurchase={modalUrlPurchase}
				open={modalOpen}
				close={() => handleClose()}
				urlListen={modalUrlListen}
			/>
		</div>
	);
}

export default ArtistReleasesSlider;
