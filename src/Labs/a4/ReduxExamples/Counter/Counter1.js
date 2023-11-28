import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "./counter1Reducer";

function Counter1() {
	const { count1 } = useSelector((state) => state.counter1Reducer);
  //grab count2 from other reducer instead of passing it inside the function name: Counter1({Counter2})
  const {count2} = useSelector((state) => state.counter2Reducer);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Counter1</h2>
			<button onClick={() => dispatch(increment1())}>Increment1</button>
			<button onClick={() => dispatch(decrement1())}>Decrement1</button>
			<br />
			count1: {count1}
			count2 from other reducer: {count2}
		</div>
	);
}

export default Counter1;
