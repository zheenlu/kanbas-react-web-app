import React, { useState } from "react";

function WorkingWithArrays() {
	const [id, setId] = useState(1);
	const [title, setTitle] = useState("NodeJS Assignment");
	const [todo, setTodo] = useState({
		id: 1,
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-09-09",
		completed: false,
	});

	return (
		<div>
			<h3>Working With Arrays</h3>
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
				href={`http://localhost:4000/a5/todos/${id}?completed=true`}
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
