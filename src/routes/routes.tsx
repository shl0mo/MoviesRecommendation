import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Details } from "./Details";


export default function Routes_ () {
	return (
		<Router>
			<Routes>
				<Route element={<Home/>} path="/"/>
				<Route element={<Details/>} path="/details"/>
			</Routes>
		</Router>
	)
}
