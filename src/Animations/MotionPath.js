import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TweenMax, Power3 } from "gsap";




function Gsap(props) {
	let clickHand = useRef(null);
	let buttonOpacity = useRef(null);

	const formSubmit = (e) => {
		TweenMax.to(clickHand, { duration: 3, y: "-32%", ease: "bounce" });
		TweenMax.to(buttonOpacity, {
			duration: 3,
			opacity: "0",
			ease: Power3.easeOut,
		});
		props.handleClick();
	};
	const classes = useStyles();
	return (
		<div
			ref={(el) => {
				clickHand = el;
			}}
		>
			<div className={classes.header}>
				<Fab
					ref={(el1) => {
						buttonOpacity = el1;
					}}
					variant="extended"
					color="primary"
					aria-label="add"
					className={classes.button}
					onClick={formSubmit}
				>
				</Fab>
			</div>
		</div>
	);
}

export default Gsap;