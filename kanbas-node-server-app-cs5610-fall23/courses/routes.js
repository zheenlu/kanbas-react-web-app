import Database from "../Database/index.js";

function CourseRoutes(app) {
	//api: application programming interface. Use api here is to distinguish from the front end routes. api is a common prefix name for backend routes. Another common prefix name is "rest" meaning you're accessing data for data exchange for two programes, not rendering a page for human to see.
	app.delete("/api/courses/:id", (req, res) => {
		const { id } = req.params;
		const index = Database.courses.findIndex((course) => course._id === id);
		if (index === -1) {
			res.status(404).send("Course not found");
		} else {
			Database.courses.splice(index, 1);
			res.json(204);
		}
	});

	// create new course
	app.post("/api/courses", (req, res) => {
		const newCourse = { ...req.body, _id: new Date().getTime().toString() }; // convert to string to match the type of _id in Database/courses.json
		//Database.courses.push(newCourse);  use "push" will be added to the end of the array
		Database.courses.unshift(newCourse); // use "unshift" will be added to the beginning of the array
		res.json(newCourse);
	});

	// update course
	app.put("/api/courses/:id", (req, res) => {
		const { id } = req.params;
		const index = Database.courses.findIndex((course) => course._id === id);
		if (index === -1) {
			res.status(404).send("Course not found");
			return;
		}
		Database.courses[index] = {
      ...Database.courses[index],
      ...req.body };
		res.json(200);
	});

	// fetch all courses
	app.get("/api/courses", (req, res) => {
		const courses = Database.courses;
		res.json(courses);
	});

  app.get("/api/courses/:id", (req, res) => {
    const {id} = req.params;
    const course = Database.courses.find(course => course._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.json(course);
  });
}
export default CourseRoutes;
