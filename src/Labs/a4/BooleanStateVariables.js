import React, { useState } from "react";

function BooleanStateVariables() {
	const [done, setDone] = useState(false);
	const handleClick = () => {
		setDone(!done);
	};
	return (
		<div>
			<h2>Boolean State Variables</h2>
			<p>{done ? "Done" : "Not done"}</p>
			<label className="form-control">
				<input
					type="checkbox"
					checked={done}
					onChange={() => setDone(!done)}
				/>
				Done?
			</label>
			{done && <div className="alert alert-success">Yay! you are done</div>}

			<button onClick={handleClick}>Click Me</button>
			<br />
			{done ? (
				<div>
					<h3>Done</h3>
				</div>
			) : (
				"Not Done"
			)}
			<input
				type="checkbox"
				checked={done}
				onChange={handleClick}
			/>
			{done && <div className="alert alert-success">Yay!! you are done</div>}
		</div>
	);
}

export default BooleanStateVariables;
