// import { useState } from "react";

// export function useLocalStorage(localItem) {
// 	const [loc, setState] = useState(localStorage.getItem(localItem));
// 	if (window.localStorage.getItem(localItem)) {
// 		return JSON.parse(window.localStorage.getItem(localItem));
// 	}
// 	window.localStorage.setItem(localItem, JSON.stringify(loc));

// 	function setLoc(newItem) {
// 		localStorage.setItem(localItem, newItem);
// 		setState(newItem);
// 	}

// 	return [loc, setLoc];
// }
