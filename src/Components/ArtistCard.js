import React, { useEffect, useContext } from "react";
import hidden_rivers from "./hidden_rivers.jpg";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { returnHome } from "../Actions/Actions";
import { InterviewContext } from "../Context/InterviewContext";
import { InterviewInfoProvider } from "../Context/InterviewContext";
import { initialState } from "../Reducers/Reducer";
import { findAllByDisplayValue } from "@testing-library/react";
import ArtistReleasesSlider from "./artistReleasesSlider";

const useStyles = makeStyles((theme) => ({
	mainImageContainer: {
		width: "80vw",
		display: "flex",
		justifyContent: "center",
	},
	coverImage: {
		width: "60vw",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	selectedContainer1: {
		width: "80vw",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignContent: "space-between",
	},
	artistName: {
		textAlign: "center",
		width: "80vw",
		marginBottom: "25px",
	},
	question: {
		width: "80vw",
		border: "4px solid black",
		textDecoration: "bold",
	},
	answer: {
		width: "80vw",
		border: "4px solid black",
		textDecoration: "bold",
	},
	soundcloudPlayer: {
		fontSize: "10px",
		color: "#cccccc",
		lineBreak: "anywhere",
		wordBreak: "normal",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		fontFamily:
			"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
		fontWeight: "100",
	},
}));

function ArtistCard(props) {
	const interview = useContext(InterviewContext);
	const classes = useStyles();
	const display = useSelector((state) => state.interviewInfo[0]);
	const dispatch = useDispatch();
	console.log()
	const mainImg = React.createRef();
	useEffect(() => {
		//these effect move the image to a certain place
		gsap.fromTo(
			mainImg.current,
			{
				y: 0,
				x: 0,
				scale: 0,
				opacity: 0,
			},
			{
				scale: 0.8,
				opacity: 1,
				duration: 0.5,
			}
		);
	});

	return (
		<InterviewInfoProvider>
			<Grid container>
				<Grid item className={classes.mainImageContainer}>
					<img
						ref={mainImg}
						src={display.img}
						alt="Interview"
						className={classes.coverImage}
					/>
				</Grid>
				<iframe
					width="100%"
					height="166"
					scrolling="no"
					frameborder="no"
					allow="autoplay"
					src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${display.trackId}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
				></iframe>
				<div className={classes.soundcloudPlayer}>
					<a
						href="https://soundcloud.com/quietcast"
						title="Quiet Cast"
						target="_blank"
						style={{ color: "#cccccc" }}
					>
						Quiet Cast
					</a>{" "}
					·{" "}
					<a
						href={display.soundcloudUrl}
						title={display.title}
						target="_blank"
						style={{ color: "#cccccc" }}
					>
						{display.title}
					</a>
				</div>
				<Grid container>
					<Paper className={classes.artistName}>
						<h1>{display.title}</h1>
					</Paper>
				</Grid>
				<Grid container className={classes.selectedContainer1}>
					<Paper>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question1}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer1}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question2}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer2}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question3}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer3}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question4}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer4}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question5}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer5}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question6}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer6}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question7}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer7}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question8}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer8}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question9}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer9}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question10}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer10}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question11}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer11}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question12}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer12}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question13}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer13}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.question}>
								<Box fontWeight="fontWeightBold" m={1}>
									{display.question14}
								</Box>
							</Typography>
						</Grid>
						<Grid item>
							<Typography ClassName={classes.answer}>
								<Box fontWeight="fontWeightLight" m={1}>
									{display.answer14}
								</Box>
							</Typography>
						</Grid>
					</Paper>
				</Grid>
				<ArtistReleasesSlider/>
				<Button onClick={() => dispatch(returnHome())}>HOME</Button>
			</Grid>
		</InterviewInfoProvider>
	);
}

export default ArtistCard;
