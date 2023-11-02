import Asd2 from "./Asd2";
import Rew from "./Rew";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Link to="/qwe/21/14/wer">LINK A</Link>
			<Routes>
				<Route
					path="/qwe/:qwe/:wer/wer"
					element={<Rew />}
				/>
				<Route
					path="/asd/:zxc/:xcv"
					element={<Asd2 />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
