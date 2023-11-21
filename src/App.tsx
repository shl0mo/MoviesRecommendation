import { useEffect, useState } from "react";

import "./App.css";
import { Background } from "./components";
import Routes from "./routes/routes";

function App() {
	return (
		<Background>
			<Routes/>
		</Background>
	)
}

export default App;
