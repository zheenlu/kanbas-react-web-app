import React from "react";
import HelloRedux from "./HelloRedux";
import Counter1 from "./Counter/Counter1";
import Counter2 from "./Counter/Counter2";
import AddRedux from "./AddRedux";	
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
	return (
		<div>
			<h2>Redux Examples</h2>
			<TodoList />
			<AddRedux />
			<Counter1 />
			<Counter2 />
			<HelloRedux />
		</div>
	);
};

export default ReduxExamples;
