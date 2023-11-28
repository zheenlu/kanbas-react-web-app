import React from "react";
import { useState } from "react";

function ExtraCredit() {
	const [assignment, setAssignment] = useState({
		id: 1,
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-10-10",
		completed: false,
		score: 0,
	});

	const handleScoreChange = (e) => {
		setAssignment({ ...assignment, score: e.target.value });
	};

	const handleCompletedChange = (e) => {
		setAssignment({ ...assignment, completed: e.target.checked });
	};

	return (
		<div>
			<h2>3.2.4 Extra Credit</h2>
			<a
				href={`http://localhost:4000/a5/assignment/score/${assignment.score}`}
				className="btn btn-primary me-2 float-end">
				Update Score
			</a>
			<input
				onChange={handleScoreChange}
				value={assignment.score}
				className="form-control mb-2 w-75"
				type="number" // Use type "number" for the score
			/>
			<a
				href={`http://localhost:4000/a5/assignment/completed/${assignment.completed}`}
				className="btn btn-primary me-2 float-end">
				Update Completed
			</a>
			<input
				onChange={handleCompletedChange}
				checked={assignment.completed}
				className="form-check-input mb-2 w-75" 
				type="checkbox"
			/>
		</div>
	);
}

export default ExtraCredit;
