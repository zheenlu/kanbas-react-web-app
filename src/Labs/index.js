import { func } from "prop-types";
import { Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignemnt5 from "./a5";
import React from 'react';


function Labs() {
	// const locationArr = useLocation(); // returns the location object that represents the current URL.
	// const { pathname } = locationArr; // or we can destructure it like this cuz we only need pathname, which is the most important part of the location object. Then use "pathname" in the following code to replace "locationArr.pathname" to make the code more compact.
	const { pathname } = useLocation(); // or just combine the two lines above into one line
	
  return (
		<div className="container">
			<h1>Labs</h1>
			{/*{JSON.stringify(locationArr)}{" "}*/}
			{/**It gives a pathname: {"pathname":"/Labs/a3","search":"","hash":"","state":null,"key":"ijo0cm76"} */}
			<div>
				<Nav/>
				{/* <Assignment3/> */}
			</div>

			<div className="nav nav-pills">
				<Link
					to="/Labs/a3"
					className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
				>
					{" "}
					{/**backtick allows concatenation. locationArr.pathname.includes("a3") ? "active" : "" ---> If locationArr's pathname includes keyword a3, then */}
					Assignment 3
				</Link>{" "}
				{/** In your code, when you use the <Link> component with to="/Labs/a3", it's generating a link to a specific subpath of the /Labs/ route, in this case, /Labs/a3. Because you defined the /Labs/* route, the /Labs/a3 path will be matched by that route configuration, and the appropriate component will be rendered. */}
				<Link
					to="/Labs/a4"
					className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
				>
					Assignment 4
				</Link>
				<Link
					to="/Labs/a5"
					className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
				>
					Assignment 5
				</Link>
			</div>
			
			<Routes>
				<Route
					path="/"
					element={<Navigate to="a3" />}
				/> {/** default */}
				<Route
					path="/a3/*"
					element={<Assignment3 />}
				/>
				<Route
					path="/a4"
					element={<Assignment4 />}
				/>
				<Route
					path="/a5"
					element={<Assignemnt5 />}
				/>
			</Routes>
			{/* <Assignment3 />
      <Assignment4 />
      <Assignemnt5 /> */}
		</div>
	);
}

export default Labs;
