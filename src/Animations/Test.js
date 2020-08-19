import React, {useRef} from 'react';
import { gsap } from "gsap";



function Test(props) {
    let tester = useRef(null);
    const testtest = (e) => {
	gsap.to(tester, { duration: 3, y: "+32%", x: "+32%", ease: "bounce" });
};



    gsap.to("h3", { x: 400 });
    return (
			<div
				ref={(el) => {
					tester = el;
				}}
			>
				<h3 onClick={testtest}>TEST</h3>
			</div>
		);
}

export default Test;