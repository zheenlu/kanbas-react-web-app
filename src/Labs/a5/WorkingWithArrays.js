import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
	const [errorMessage, setErrorMessage] = useState(null);
	const [id, setId] = useState(1);
	const [title, setTitle] = useState("NodeJS Assignment");
	const [todos, setTodos] = useState([]);

	const TODOS_API = "http://localhost:4000/a5/todos";

	// const getTodosPromise = () => {
	// 	//older syntax
	// 	const promise = axios.get("http://localhost:4000/a5/todos");
	// 	promise.then((response) => {
	// 		console.log(response.data);
	// 		setTodos(response.data);
	// 	});
	// };

	const getTodoesAsync = async () => {
		//newer syntax
		const response = await axios.get("http://localhost:4000/a5/todos");
		setTodos(response.data);
	};

	useEffect(() => {
		// getTodosPromise();
		getTodoesAsync();
	}, []); //[] empty array: i only want it load once''

	const createTodo = async () => {
		const response = await axios.get("http://localhost:4000/a5/todos/create");
		setTodos(response.data);
	};

	//using post
	const postTodo = async () => {
		const response = await axios.post("http://localhost:4000/a5/todos", {
			title: title,
		});
		setTodos(response.data);
	};

	// const removeTodo = async (id) => {
	// 	const response = await axios.get(`${TODOS_API}/${id}/delete`);
	// 	setTodos(response.data);
	// };
	//using delete
	const deleteTodo = async (id) => {
		try {
			const response = await axios.delete(`${TODOS_API}/${id}`);
			setTodos(response.data);
		} catch (error) {
			console.error("Error deleting todo:", error);
			// Handle the error appropriately
			setErrorMessage(error.response.data.message);
		}
	};

	const updateTitle = async (id, newTitle) => {
		try {
			const response = await axios.put(`${TODOS_API}/${id}`, { newTitle });
			setTodos(response.data);
			// testfsfsferafg
		} catch (error) {
			console.log(error);
			setErrorMessage(error.response.data.message);
		}
	};

	const fetchTodoById = async (id) => {
		console.log("the id is ", id);
		const response = await axios.get(`${TODOS_API}/${id}`);
		const todo = response.data;
		// Assuming the API returns a single todo object
		if (todo) {
			setId(todo.id);
			setTitle(todo.title);
		}
	};

	return (
		<div>
			<h2>Working With Arrays</h2>
			<h4>Todos from server</h4>


			<button
				onClick={createTodo}
				className="btn btn-primary ">
				Create Todo
			</button>
			<button
				onClick={postTodo}
				className="btn btn-warning ">
				Post Todo
			</button>

			<button
				onClick={() => updateTitle(id, title)}
				className="btn btn-success ">
				Update Todo
			</button>
			{errorMessage && (
				<div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
			)}
			<input
				onChange={(e) => setId(e.target.value)}
				className="form-control"
				value={id}
			/>
			<input
				onChange={(e) => setTitle(e.target.value)}
				className="form-control"
				value={title}
			/>
			<ul className="list-group">
				{todos.map((todo) => (
					<li
						className="list-group-item"
						key={todo.id}>
						<button
							onClick={() => fetchTodoById(todo.id)}
							className="btn btn-warning me-2 float-end">
							Edit
						</button>
						<button
							onClick={() => deleteTodo(todo.id)}
							className="btn btn-danger float-end">
							Delete
						</button>
						id: {todo.id} {""}
						{todo.title}
					</li>
				))}
			</ul>
			<h4>Update item title</h4>
			<input
				onChange={(e) => setTitle(e.target.value)}
				className="form-control"
				value={title}
			/>
			<a
				href={`http://localhost:4000/a5/todos/${id}/title/${title}`}
				className="btn btn-primary">
				Update todo title to {title}
			</a>

			<h3>Deleting from an Array</h3>
			<a
				href={`http://localhost:4000/a5/todos/${id}/delete`}
				className="btn btn-primary me-2">
				Delete Todo with ID = {id}
			</a>

			<h4>Creating new Items in an Array</h4>
			<a
				href={`http://localhost:4000/a5/todos/create`}
				className="btn btn-primary me-2">
				Create Todo
			</a>

			<h3>Filtering Array Items</h3>
			<a
				href={`http://localhost:4000/a5/todos?completed=true`}
				className="btn btn-primary me-2">
				Get Completed Todos
			</a>

			<h4>Retrieving an Item from an Array by ID</h4>
			<input
				onChange={(e) => setId(e.target.value)}
				className="form-control"
				type="number"
				value={id}
			/>
			<a
				href={`http://localhost:4000/a5/todos/${id}`}
				className="btn btn-primary">
				Get Todo by ID
			</a>

			<h4>Retrieving Arrays</h4>
			<a
				href="http://localhost:4000/a5/todos"
				className="btn btn-primary me-2">
				Get todos
			</a>

			{/* The difference in the way you define the href attribute in the two anchor (<a>) elements is due to the different types of URLs you are constructing:

    In the first <a> element, you are constructing a URL with a dynamic part, which is the id variable. To include a dynamic value in the URL, you use backticks and template literals to create a string that includes the variable inside ${}. This allows you to dynamically generate the URL based on the id value.

      In the second <a> element, you are constructing a static URL. There are no dynamic parts or variables involved in this URL, so you can directly provide the URL as a string enclosed in double or single quotes.

      In summary, you use template literals when you need to include dynamic values (e.g., variables) in your URL, and you use plain strings (enclosed in quotes) when the URL is static and does not require any dynamic content. */}
		</div>
	);
}

export default WorkingWithArrays;
