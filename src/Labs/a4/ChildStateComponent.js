import React from "react";
function ChildStateComponent({ counter, setCounter }) {
	return (
		<div>
			<h3>Counter {counter}</h3>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
			<button onClick={() => setCounter(counter - 1)}>Decrement</button>
		</div>
	); // the child is manipulating the state of the parent, the parent is maintaining the state, and it's sharing functions and data with the child so that my children can also render the content
}
export default ChildStateComponent;
