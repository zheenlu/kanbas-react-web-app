import React from "react";
function PassingFunctions({ theFunction }) {
	return (
		<div>
			<h2>Passing Functions</h2>
			<button
				className="btn btn-primary"
				onClick={() => theFunction()}>
				Click to call theFunction()
			</button>
		</div>
	);
}

export default PassingFunctions;
