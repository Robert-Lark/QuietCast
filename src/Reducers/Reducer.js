import {
	ISOLATE_FEATURE,
	SHOW_FEATURE,
	DELETE_COMPLETED,
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

export const initialState = [
	{ img: QC001, id: 1, url: "", display: true },
	{ img: QC002, id: 2, url: "", display: true },
	{ img: QC003, id: 3, url: "", display: true },
	{ img: QC004, id: 4, url: "", display: true },
	{ img: QC005, id: 5, url: "", display: true },
	{ img: QC006, id: 6, url: "", display: true },
	{ img: QC007, id: 7, url: "", display: true },
	{ img: QC008, id: 8, url: "", display: true },
	{ img: QC009, id: 9, url: "", display: true },
];

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ISOLATE_FEATURE:
			//return state.filter((image) => image.display=false !== action.payload)
			return state.filter((image) => {
				if (image === action.payload) {
					return action.payload;
				}
			});
		//console.log(state)
		default:
			return state; // do nothing, just return previous state unchanged
	}
};
