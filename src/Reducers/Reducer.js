import {
	ISOLATE_FEATURE,
	RETURN_HOME,
	DARKMODE,
	// SHOW_FEATURE,
	// DELETE_COMPLETED,
} from "../Actions/Actions";

import QC009 from "../img/QC001.png";
import QC008 from "../img/QC002.png";
import QC007 from "../img/QC003.png";
import QC006 from "../img/QC004.png";
import QC005 from "../img/QC005.png";
import QC004 from "../img/QC006.png";
import QC003 from "../img/QC007.png";
import QC002 from "../img/QC008.png";
import QC001 from "../img/QC009.png";

export const initialState = {
	interviewInfo: [
		{
			img: QC001,
			id: 1,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "DRASTIC STEPS",
			body1:
				"Hey Drastic Steps - thank you so much for creating such an overwhelmingly amazing mix - it truly is one of the best mixes we have ever heard. People who follow Quiet Calm Records will probably be familiar with you and your mixes but for those new to your sound could you introduce yourself and give a little information on your musical journey.",
			body2:
				"Hey Rob, thanks for having my work as a part of the highly enjoyable and innovative Quiet Cast series. I have been listening to these mixes and reading the interviews and having a wonderful time wading through the work of all these amazing artists. Thanks for your kind words. It has been a pleasure mixing with vinyls you referred me to, and this mix, I hope, pays proper tribute to that collaborative musical journey.",
			body3:
				"One of my earliest memories of music is that of my parents and their friends gathering around Hindustani classical and jazz vinyls. Outside, the Darjeeling sunset quietly painted the rolling tea gardens with colors borrowed from mysterious orchids.",
			body4:
				"Soon my parents will move to Calcutta: the dusty 'city of love' that is obsessed with cinema, tea, endless chats, music, literature, cricket, football, and food. For the next two decades, besides school and college, I will try to learn how to play Hindustani Classical on a violin. I was fascinated by the works of Ali Akbar Khan, Nikhil Bannerjee, and Parween Sultana. Along with classical music I also listened to a lot for jazz, blues, and rock.",
			body5:
				"In the US, between finishing my doctoral degree and teaching, I found like minded musical souls and played violin in a funk-jazz band. It was refreshing to play differently- away from the rigors of classical music. It is during this time, as I was being introduced to a wide range of music by my fellow musicians and colleagues, that I got interested in digging for records. Soon I got a cheap mixer and another turntable. The ability to change speeds and pitch created endless musical possibilities.  It will be disingenuous if I don’t mention the amazing artists and visionaries like Jazzy Jeff, Cool Herc, Q-Bert, DJ Shadow, whose work I listen and watch with wonder. I still play the legendary Boiler Room Set of DJ Shadow several times a year.",
			body6:
				"To me the art of soundscaping is playing a fragmented story by juxtaposing and layering pre-recorded sounds such that the composite transcends and transforms the constituents into an altered totality of musical experience. To me it is also a way to listen creatively and actively while paying homage to the artists and their work that I rely on.",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC002,
			id: 2,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "BIRDS OF PASSAGE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC003,
			id: 3,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC004,
			id: 4,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC005,
			id: 5,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC006,
			id: 6,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC007,
			id: 7,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC008,
			id: 8,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
		{
			img: QC009,
			id: 9,
			url: "",
			display: true,
			bodyDisplay: false,
			title: "TITLE",
			body1: "BODY1",
			body2: "BODY2",
			body3: "BODY3",
			body4: "BODY4",
			body5: "BODY5",
			body6: "BODY6",
			body7: "BODY7",
			body8: "BODY8",
			body9: "BODY9",
			body0: "BODY0",
		},
	],
	 dark: true ,
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ISOLATE_FEATURE:
			return {...state, interviewInfo: state.interviewInfo
				.filter((image) => {
					return image === action.payload;
				})
				.map((img) => ({ ...img, bodyDisplay: true }))}

		case RETURN_HOME:

			return {...state, interviewInfo: initialState.interviewInfo};

case DARKMODE:
	if (state.dark === true) {
return {...state, dark: false}
	} else {
		return {...state, dark: true};
	}
	

		default:
			return state; // do nothing, just return previous state unchanged
	}
};
