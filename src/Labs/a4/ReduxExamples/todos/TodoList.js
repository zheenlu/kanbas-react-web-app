import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
	const { todos } = useSelector((state) => state.todosReducer);
  
	return (
		<div>
			<h2>Todo List</h2>
			<ul className="list-group">
        {/**Break out stuff in TOdoItem.js and TodoForm.js so that it's easier to manage */}
				{/* recreate the dependencies here */}
				<TodoForm
					// todo={todo}
					// setTodo={setTodo}
					// addTodo={addTodo}
					// updateTodo={updateTodo}
          //Comment this since we're using reducer now, all this lives in the reducer now
				/>
				{todos.map((todo) => (
					<TodoItem
						todo={todo} // need this todo here not from reducer, because we need to iterating through the todos
						// In the TodoForm component, you are working with the todo object from the Redux store directly, while in the TodoItem component, you are receiving the todo as a prop passed from the parent component (TodoList). The todo prop is being passed to each TodoItem when you map over your todos array in the TodoList component. It's important to note that the todo in the TodoForm component and the todo in each TodoItem component are separate, although they share the same name. The TodoForm component uses the todo object from the Redux store, whereas each TodoItem receives its own individual todo object as a prop from the parent component. This allows you to work with different todo items when you add, update, or delete them in your application.
					/>
				))} 
			</ul>
		</div>
	);
}
export default TodoList;
 
