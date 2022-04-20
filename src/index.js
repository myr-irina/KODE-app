import React from "react";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
