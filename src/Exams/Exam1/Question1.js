import React from "react";


const Question1 = () => {
	const q = [1, 2, 3, 4, 5];
	const w = q.map((value, index) => (value === 3 ? 6 : value));

	return (
		<div>
			<h3>Question 1</h3>
			w = {w}
		</div>
	);
};

export default Question1;
