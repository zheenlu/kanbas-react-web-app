import React from "react";
import { useState } from "react";

function ExtraCredit2() {
	const [id] = useState(1);
	const [description, setDescription] = useState("");
	const [completed, setCompleted] = useState();

	return (
		<div>
			<h2>3.3.7 Extra Credit</h2>
			<h4>Update Description by ID</h4>
			<a
				href={`http://localhost:4000/a5/todos/${id}/description/${description}`}
				className="btn btn-primary me-2">
				Update todo{id}'s description to {description}
			</a>
			<input
				onChange={(e) => setDescription(e.target.value)}
				className="form-control"
				value={description}
			/>

			<h4>Update Completed status by ID</h4>
			<a
				href={`http://localhost:4000/a5/todos/${id}/completed/${completed}`}
				className="btn btn-primary me-2 float-end">
				Update todo completed status
			</a>
			<input
				onChange={(e) => setCompleted(e.target.checked)}
				className="form-check-input mb-2 w-75"
        checked={completed}
				type="checkbox"
			/>
		</div>//uhuihu
	);
}

export default ExtraCredit2;
