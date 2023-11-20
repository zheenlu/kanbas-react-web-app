import Database from "../Database/index.js";

function ModuleRoutes(app) {
	app.get("/api/modules", (req, res) => {
		const modules = Database.modules;
		res.json(modules);
	});
	app.get("/api/courses/:id/modules", (req, res) => {
		const { id } = req.params;
		const modules = Database.modules.filter((module) => module.course === id);
		res.json(modules);
	});
	app.get("/api/modules/:id", (req, res) => {
		const { id } = req.params;
		const module = Database.modules.find((module) => module._id === id);
		if (!module) {
			res.status(404).send("Module not found");
			return;
		}
		res.json(module);
	});
	app.delete("/api/modules/:id", (req, res) => {
		const { id } = req.params;
		const index = Database.modules.findIndex((module) => module._id === id);
		if (index === -1) {
			res.status(404).send("Module not found");
			return;
		}
		Database.modules.splice(index, 1);
		res.json(204);
	});

	app.post("/api/courses/:cid/modules", (req, res) => {
		// The :cid in the route app.post("/api/courses/:cid/modules", (req, res) => {...}) is a placeholder for a variable part of the URL, known as a route parameter in Express.js, a web application framework for Node.js. In this context, cid stands for "course ID" (hence the 'c' before 'id').
		const newModule = {
			...req.body,
			course: req.params.cid,
			_id: new Date().getTime().toString(),
		};
		Database.modules.unshift(newModule);
		res.json(newModule);
	});

  // update module
	app.put("/api/modules/:id", (req, res) => {
		const { id } = req.params;
		const index = Database.modules.findIndex((module) => module._id === id);
		if (index === -1) {
			res.status(404).send("Module not found");
			return;
		}
		Database.modules[index] = {
			...Database.modules[index],
			...req.body,
		};
		res.json(200);
	});
}
export default ModuleRoutes;
