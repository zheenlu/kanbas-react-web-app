const todos = [
	{ id: 1, title: "Task 1", completed: false, description: "This is task 1" },
	{ id: 2, title: "Task 2", completed: false, description: "This is task 2" },
	{ id: 3, title: "Task 3", completed: true, description: "This is task 3" },
	{ id: 4, title: "Task 4", completed: true, description: "This is task 4" },
];

const assignment = {
	id: 1,
	title: "NodeJS Assignment",
	description: "Create a NodeJS server with ExpressJS",
	due: "2021-10-10",
	completed: false,
	score: 0,
};

function Lab5(app) {
	// the convention is to use /noun, here is app.post instead of app.get example
	app.post("/a5/todos", (req, res) => {
		const newTodo = {
			...req.body, // spread operator
			id: new Date().getTime(),
			
		};
		todos.push(newTodo);
		res.json(todos);
	});

  // using Verb to create/add a new resource
	app.get("/a5/todos/create", (req, res) => {
		const newTodo = {
			id: new Date().getTime(),
			title: "New Todo",
			completed: false,
		};
		todos.push(newTodo);
		res.json(todos);
	});
  // Pattern Match: the order of the routes matters. If you put this route "/a5/todos/create" after the "/a5/todos/:id" route, it will never get executed because the previous route will match first. It will try to find word "create" in the path parameter ":id" and it will never find it. So, the order of the routes matters.
  app.get("/a5/todos/:id/title/:newTitle", (req, res) => {
    const { id, newTitle } = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (!todo) {
      res.status(404).send("Todo not found");
      return;
    }
    todo.title = newTitle;
    res.json(todos);
  });
  app.get("/a5/todos/:id/delete", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    if (index === -1) { // if not found
      res.status(404).send("Todo not found");
      return;
    }
    todos.splice(index, 1); // remove 1 element at index
    res.json(todos);
  });
	app.delete("/a5/todos/:id", (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === parseInt(id));
    if (index === -1) { // if not found
      res.status(404).send("Todo not found");
      return;
    }
    todos.splice(index, 1); // remove 1 element at index
    res.json(todos);
  });
	app.get("/a5/todos/:id/completed/:newCompleted", (req, res) => {
		const { id, newCompleted } = req.params;
		const todo = todos.find((todo) => todo.id === parseInt(id));
		if (!todo) {
			res.status(404).send("Todo not found");
			return;
		}
		todo.completed = newCompleted === "true";
		res.json(todos);
	});
	app.get("/a5/todos/:id/description/:newDescription", (req, res) => {
		const { id, newDescription } = req.params;
		const todo = todos.find((todo) => todo.id === parseInt(id));
		if (!todo) {
			res.status(404).send("Todo not found");
			return;
		}
		todo.description = newDescription;
		res.json(todos);
	});
	app.get("/a5/todos/:id", (req, res) => {
		// :id is like a placeholder
		const { id } = req.params;
		const todo = todos.find((todo) => todo.id === parseInt(id)); // we are filtering (like by id) using a primary key that is absolutely a case where we would use path parameters and not query parameters. But if you are filtering by any other field that is not a primary key, then you would use query parameters not a path parameter.
		if (!todo) {
			res.status(404).send("Todo not found");
			return; // don't continue the rest of the code
		}
		res.json(todo);
	});
	app.get("/a5/todos", (req, res) => {
    const { completed } = req.query;
    console.log("completed:", completed);

    if (completed !== undefined) {
        console.log("Filtering completed todos");
        const comp = completed === "true"; // Correctly parsing to boolean
        const filteredTodos = todos.filter(todo => todo.completed === comp);
        res.json(filteredTodos);
				return; // intermediately stop, if don't have it, the server will continue to send res.json(todos). Only One response be sent every time
    }
    res.json(todos);
});
app.get("/a5/todos", (req, res) => {
	res.json(todos); // if the content type inside () is json file, you should use json() instead of send()
});

	app.get("/a5/assignment/score/:newScore", (req, res) => {
		const { newScore } = req.params;
		assignment.score = parseInt(newScore);
		res.send(assignment);
	});
	app.get("/a5/assignment/completed/:newCompleted", (req, res) => {
		const { newCompleted } = req.params;
		assignment.completed = newCompleted === "true";
		res.send(assignment);
	});

	app.get("/a5/assignment", (req, res) => {
		res.json(assignment); // if the content type inside () is json file, you should use json() instead of send()
	});
	app.get("/a5/assignment/title", (req, res) => {
		res.send(assignment.title);
	});
	app.get("/a5/assignment/title/:newTitle", (req, res) => {
		// there're 3 ways to encode the data/pass data to the server: 1. path parameters (:). Here we use path. 2. query parameters (?) 3. or embeded as a json object inside of the body of the HTTP request.
		// There are times when you can only use Path parameters or only use Query Parameters or a combination of them.
		const { newTitle } = req.params;
		assignment.title = newTitle;
		res.send(assignment);
	});

	app.get("/a5", (req, res) => {
		res.send("Welcome to Lab 5"); // send() can accept strings, numbers, objects, arrays, html, files, pdf, word documents, etc.
	});
	app.get("/a5/hello/:name", (req, res) => {
		const name = req.params.name; // extract the name, which is stored in the params object
		res.send(`Hello ${name}`);
	});

	// http://localhost:4000/a5/calculator?a=1&b=2&operation=add In the Query String, the order does not matter whereas in the Path, the order matters.
	app.get("/a5/calculator", (req, res) => {
		const { a, b, operation } = req.query; // query parses everything after the question mark
		let result = 0;
		if (operation === "add") {
			result = parseInt(a) + parseInt(b);
		} else if (operation === "subtract") {
			result = parseInt(a) - parseInt(b);
		} else {
			result = "Invalid operation";
		}
		res.send(result.toString()); // send() only accepts strings
	});

	app.get("/a5/add/:a/:b", (req, res) => {
		const a = parseInt(req.params.a); // params parses it from the path
		const b = parseInt(req.params.b);
		res.send(`${a} + ${b} = ${a + b}`);
	});
	app.get("/a5/subtract/:a/:b", (req, res) => {
		const { a, b } = req.params; // another syntax using destructuring
		res.send(`${a} - ${b} = ${parseInt(a) - parseInt(b)}`);
	});

	app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });

}

export default Lab5;
