import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./Components/App";
import { Reducer } from "./Reducers/Reducer.js";

const store = createStore(Reducer);
console.log("initialState", store.getState() )

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
