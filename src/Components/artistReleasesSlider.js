import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "../UI/galleryStyles.css";
import hiddenRivers from "./hidden_rivers.jpg";
import BOC from "./boardsOfCanada.jpg";

const useStyles = makeStyles(() => ({
	slider: {
		width: "800px",
		height: "500px",
		border: "2px solid black",
		position: "relative",
		margin: "0 auto",
		overflow: "hidden",
	},
	slide: {
		position: "absolute",
		background: "var(--pink)",
		height: "100%",
		width: "100 %",
		display: "grid",
		alignContent: "center",
		justifyContent: "center",
		color: "white",
		fontSize: "100px",
		fontFamily: "sans - serif",
		border: "5px solid white",
		transition: "all .25s",
		transform: "translateX(-200 %)",
	},
	controls: {
		display: "grid",
		gridTemplateColumns: "repeat(auto- fit, minmax(200px, 200px))",
		gap: "2rem",
		justifyContent: "center",
		padding: "2rem",
	},
	goToPrev: {
		zIndex: "10",
		transform: "translateX(-100 %)",
	},
	gotToNext: {
		zIndex: "10",
		transform: "translateX(-100 %)",
	},
}));

function ArtistReleasesSlider(props) {
	const currentInterviewInfo = useSelector((state) => state.interviewInfo);
	const currentModal = useSelector((modal) => modal.interviewInfo)
	const history = useHistory();
	const purchase = () => history.push(currentInterviewInfo.artistAlbumUrl1);
	const [modalImage, setModalImage] = useState("");
	const [modalTitle, setModalTitle] = useState(
		currentInterviewInfo.artistAlbumTitle1
	);
	const [modalText, setModalText] = useState(
		currentInterviewInfo.artistAlbumInfo1
	);
	const [modalUrl, setModalUrl] = useState(
		currentInterviewInfo.artistAlbumUrl1
	);
	
	// if (!gallery) {
	// 	throw new Error("No Gallery passed in");
	// }
	//REF'S
	const galleryRef = useRef();
	const modalImg = useRef();
	const previousButton = useRef();
	const nextButton = useRef();
	//IMAGES
	const galleryImages = [hiddenRivers, BOC];

	function showImage(el) {
		if (!el) {
			console.info("no image to show");
			return;
		}
		console.log(currentModal)
		setModalImage(el.src);
	}

	const classes = useStyles();
	return (
		<div className="galleries">
			<div className="gallery gallery1" ref={galleryRef}>
				{galleryImages.map((image) => (
					<img src={image} alt="Photo 1" tabindex="0" onClick={showImage} />
				))}
			</div>

			<div className="gallery gallery2">
				{galleryImages.map((image) => (
					<img
						src={image}
						alt="Photo 1"
						tabindex="0"
						title="This is the title of the image"
						data-description="This is the description of the image"
						onClick={showImage}
					/>
				))}
			</div>

			<div className="modal">
				<div className="modalInner">
					<button
						aria-label="Previous Photo"
						className="prev"
						ref={previousButton}
					>
						←
					</button>
					<figure>
						<img ref={modalImg} src={modalImage} />
						<figcaption>
							<h2>{modalTitle}</h2>
							<p>{modalText}</p>
							<button onClick={purchase}>
								Order
							</button>
						</figcaption>
					</figure>
					<button className="next" aria-label="Next Photo" ref={nextButton}>
						→
					</button>
				</div>
			</div>
		</div>

		// <div>
		// 	<div className={classes.slider}>
		// 		<div className={classes.slide}>1</div>
		// 		<div className={classes.slide}>2</div>
		// 		<div className={classes.slide}>3</div>
		// 		<div className={classes.slide}>4</div>
		// 		<div className={classes.slide}>5</div>
		// 		<div className={classes.controls}>
		// 			<button className={classes.goToPrev}>Prev</button>
		// 			<button className={classes.goToNext}>Next</button>
		// 		</div>
		// 	</div>
		// </div>
	);
}

export default ArtistReleasesSlider;
