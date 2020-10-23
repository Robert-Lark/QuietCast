import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import persistState from "redux-localstorage";
import App from "./Components/App";
import { Reducer } from "./Reducers/Reducer.js"
import logger from 'redux-logger';

const enhancer = compose(
	applyMiddleware(logger),
	persistState()
);


const store = createStore(Reducer, enhancer);
console.log("initialState", store.getState() )

ReactDOM.render(

		<Provider store={store}>
			<Router>
			<App />
			</Router>
		</Provider>,

	document.getElementById("root")
);
