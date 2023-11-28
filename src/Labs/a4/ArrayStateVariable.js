import React, { useState } from "react";

function ArrayStateVariable() {
	const [array, setArray] = useState([1, 2, 3, 4, 5]);
	const addElement = () => {
		setArray([...array, Math.floor(Math.random() * 100)]);
	};
	const deleteElement = (index) => {
		setArray(array.filter((item, i) => i !== index));
	};

	const [modules, setModules] = useState(["Module 1", "Module 2"]);
	const [newModule, setNewModule] = useState(""); // if you want to type the module name
	const [editModuleIndex, setEditModuleIndex] = useState(-1); // if you want to edit the module name

	const addModule = () => {
		// or write it like this, that's why ([])
		// const newModule = [...modules, newModule];
		// setModules(newModule);
		setModules([...modules, newModule]);
	};

	const deleteModule = (index) => {
		// alert(index);
		const newModules = modules.filter((module, i) => i !== index);
		setModules(newModules);
		// setModules(modules.filter((module, i) => i !== index));
	};

	const updateModule = () => {
		const newModules = modules.map((module, index) => {
			if (index === editModuleIndex) {
				return newModule; // update
			} else {
				return module; // otherwise, keep the old one
			}
		});
		setModules(newModules);
	};

	return (
		<div>
			<h2>Array State</h2>
			<h3>Lab:</h3>
			<button onClick={addElement}>Add Element</button>
			<ul>
				{array.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => deleteElement(index)}>Delete</button>
					</li>
				))}
			</ul>

			<h3>Lecture:</h3>
			<button
				className="btn btn-primary float-end"
				onClick={updateModule}>
				Update
			</button>
			<button
				className="btn btn-success float-end"
				onClick={addModule}>
				Add
			</button>
			<input
				className="form-control w-50"
				value={newModule}
				onChange={(e) => setNewModule(e.target.value)}
			/>
			{/* <button onClick={() => setModules([...modules, "New Module"])}> 
				Add Module
			</button> */}
			{/* <button onClick={() => addModule()}>Add Module</button> */}

			<ul className="list-group">
				{modules.map((module, index) => (
					<li
						key={index}
						className="list-group-item">
						<button
							onClick={() => {
								setNewModule(module);
								setEditModuleIndex(index);
							}} // setNewmodule is kanda a bad name here, I want it can do both Adding and Editting module. Maybe another name would be better. Click Edit, the module name would be copied to the input field, then you can update it.
							className="btn btn-warning float-end">
							Edit
						</button>
						<button
							onClick={() => deleteModule(index)}
							className="btn btn-danger float-end">
							Delete
						</button>
						{index}: {module}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ArrayStateVariable;
