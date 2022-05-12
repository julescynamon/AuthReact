import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Context/userContext";

ReactDOM.render(
	<BrowserRouter>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</BrowserRouter>,
	document.getElementById("root"),
);
