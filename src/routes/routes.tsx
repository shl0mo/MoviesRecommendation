import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Details } from "./Details";
import { Favorites } from "./Favorites";
import { Recommendations  } from "./Recommendations";


export default function Routes_ () {
	return (
		<Router>
			<Routes>
				<Route element={<Home/>} path="/"/>
				<Route element={<Details/>} path="/details"/>
				<Route element={<Favorites/>} path="/favorites"/>
				<Route element={<Recommendations/>} path="/recommendations"/>
			</Routes>
		</Router>
	)
}
