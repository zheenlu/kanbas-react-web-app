import React, { useState } from "react";

function Counter() {
	let [count1, setCount1] = useState(7);
	console.log(count1);

	let [count2, setCount2] = useState(0);
	const increment = () => {
		setCount2(count2 + 1);
	};
	const decrement = () => {
		setCount2(count2 - 1);
	};

	return (
		<div>
			<h2>Count</h2>
			<h4>Count: Lab</h4>
			<h4>Count1: {count1}</h4>
			<button
				className="btn btn-primary"
				onClick={() => {
					setCount1(count1 + 1);
					console.log(count1);
				}}>
				Up {count1}
			</button>
			<button
				className="btn btn-primary"
				onClick={() => {
					setCount1(count1 - 1);
					console.log(count1);
				}}>
				Down {count1}
			</button>
			<button className="btn btn-primary" onClick={() => setCount1(0)}>Reset</button>

			<h4>Count: Lecture</h4>
			<h5>Count: {count2}</h5>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default Counter;
