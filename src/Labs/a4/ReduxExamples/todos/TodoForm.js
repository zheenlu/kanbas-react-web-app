import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

// function TodoForm({todo, setTodo, addTodo, updateTodo})
function TodoForm() {
	// this "todo" here is from reducer not the one that we're iterating through in TodoList.js
	const { todo } = useSelector((state) => state.todosReducer);
	const dispatch = useDispatch();

	return (
		<li className="list-group-item">
			<button onClick={() => dispatch(addTodo(todo))}> Add </button>
			<button onClick={() => dispatch(updateTodo(todo))}> Update </button>
			<input
				value={todo.title}
				onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
			/>
		</li>
	);
}

export default TodoForm;
