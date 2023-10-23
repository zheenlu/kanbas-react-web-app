// import logo from './logo.svg';
// import './App.css';
import Labs from './Labs';
import Kanbas from './Kanbas'; // it looks for index.js in that folder, that's why we don't need to specify the file name, and sometimes name it as index.jse
import HellowWord from './Labs/a3/HelloWorld';
import {HashRouter} from "react-router-dom";
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';


function App() {
  return (
		<HashRouter>
			<div>
				{/* <h1>React Labs</h1>
				<Link to="/Hello">Hello World</Link>
				<br />
				<Link to="/Labs">Labs</Link>
				<br />
				<Link to="/Kanbas">Kanbas</Link> */}
				<Routes>
					<Route
						path="/"
						element={<Navigate to="/Kanbas" />}
					/>
					{/** default: navigate to labs*/}
					<Route
						path="/Hello"
						element={<HellowWord />}
					/>
					<Route
						path="/Labs/*"
						element={<Labs />}
					/>
					{/**This route configuration specifies that when the URL matches /Labs/ or any subpath under it, the Labs component should be rendered. This allows you to create a nested route structure where the Labs component can have its own set of routes. If you didn't use the /* in the route configuration, you would need to write your links and routes differently. For example, if you had <Route path="/a3" element={<Labs />} />, then your link would be <Link to="/a3">, and the /a3 path would be directly under the root route, not nested under /Labs/. */}
					<Route
						path="/Kanbas/*"
						element={<Kanbas />}
					/>
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
