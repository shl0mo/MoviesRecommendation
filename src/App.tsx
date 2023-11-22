import { useEffect, useState } from "react";

import "./App.css";
import {
	Background,
	Navbar
} from "./components";
import Routes from "./routes/routes";

function App() {
	return (
		<Background>
			<Navbar/>
			<Routes/>
		</Background>
	)
}

export default App;
