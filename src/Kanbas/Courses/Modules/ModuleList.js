import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
// 	addModule,
// 	deleteModule,
// 	updateModule,
// 	setModule,
// 	setModules,
// } from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
	const { courseId } = useParams();
	// const modules = useSelector((state) => state.modulesReducer.modules);
	//const module = useSelector((state) => state.modulesReducer.module);
	// const dispatch = useDispatch();

	const [modules, setModules] = useState([]);
	const [module, setModule] = useState({});

	const fetchModules = async () => {
		const modules = await client.findModulesForCourse(courseId);
		setModules(modules);
	}
	useEffect(() => {
		fetchModules();
	}, [fetchModules]);
	const addModule = async () => {
		const newModule = await client.addModule(courseId, module);
		setModules([newModule, ...modules]);
	}
	const deleteModule = async (moduleId) => {
		await client.deleteModule(moduleId);
		setModules(modules.filter((module) => module._id !== moduleId));
	}

	const updateModule = async () => {
		try {
			await client.updateModule(module._id, module);
			setModules(modules.map((m) => (m._id === module._id ? module : m)));
		} catch (error) {
			console.log(error);
		}
	};


	// const [modules, setModules] = useState(db.modules);
	// const [module, setModule] = useState({
	// 	name: "New Module",
	// 	description: "New Description",
	// 	course: courseId,
	// });
	// const addModule = (module) => {
	// 	setModules([
	// 		{ ...module, _id: new Date().getTime().toString() },
	// 		...modules,
	// 	]);
	// };
	// const deleteModule = (moduleId) => {
	// 	setModules(modules.filter((module) => module._id !== moduleId));
	// };
	// const updateModule = () => {
	// 	setModules(
	// 		modules.map((m) => {
	// 			if (m._id === module._id) {
	// 				return module;
	// 			} else {
	// 				return m;
	// 			}
	// 		})
	// 	);
	// };

	return (
		<ul className="list-group">
			<li className="list-group-item">
				{/* <button
					className="btn btn-success float-end"
					style={{ marginLeft: "5px" }}
					onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
					Add
				</button> */}
				<button
					className="btn btn-success float-end"
					style={{ marginLeft: "5px" }}
					onClick={addModule}>
					Add
				</button>
				{/* <button
					className="btn btn-primary float-end"
					style={{ marginTop: "0px" }}
					onClick={() => dispatch(updateModule(module))}>
					Update
				</button> */}
				<button
					className="btn btn-primary float-end"
					style={{ marginTop: "0px" }}
					onClick={updateModule}>
					Update
				</button>
				<input
					className="form-control"
					value={module.name}
					placeholder="Module Name"
					onChange={(e) => setModule({ ...module, name: e.target.value })}
				/>
				<textarea
					className="form-control"
					placeholder="Module Description"
					value={module.description}
					onChange={(e) =>
						setModule({ ...module, description: e.target.value })
					}
				/>
			</li>

			{modules
				.filter((module) => module.course === courseId)
				.map((module, index) => (
					<li
						key={index}
						className="list-group-item">
						<button
							className="btn btn-success float-end"
							style={{ marginLeft: "5px" }}
							onClick={() => setModule(module)}>
							Edit
						</button>

						<button
							className="btn btn-danger float-end"
							onClick={() => deleteModule(module._id)}>
							Delete
						</button>

						<h6 className="module-list-header">{module.name}</h6>
						<p>{module.description}</p>
						{module.lessons && (
							<ul className="list-group">
								{module.lessons.map((lesson, index) => (
									<li
										key={index}
										className="list-group-item">
										<h4>{lesson.name}</h4>
										<p>{lesson.description}</p>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
		</ul>
	);
}
export default ModuleList;
