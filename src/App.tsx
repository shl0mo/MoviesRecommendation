import { useEffect, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import {
	Background,
	Navbar
} from "./components";
import Routes from "./routes/routes";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<Background>
				<Navbar/>
				<Routes/>
			</Background>
		</Provider>
	)
}

export default App;
