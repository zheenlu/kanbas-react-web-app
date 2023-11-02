import React, { useState } from "react";

function ObjectStateVariable() {
	const [person, setPerson] = useState({ name: "Peter", age: 24 });

	const [course, setCourse] = useState({
		title: "React",
		modules: 5,
		isPublished: true,
		startDate: new Date(),
	});

	// const handleTitleChange = (event) => {
	// 	setCourse({
	// 		...course,
	// 		title: event.target.value,
	// 	});
	// };
	// const handleModulesChange = (event) => {
	// 	setCourse({
	// 		...course,
	// 		modules: event.target.checked,
	// 	});
	// };
	// const handlePublishedChange = (event) => {
	// 	setCourse({
	// 		...course,
	// 		isPublished: event.target.checked,
	// 	});
	// };
	// const handleDateChange = (event) => {
	// 	setCourse({
	// 		...course,
	// 		startDate: event.target.value,
	// 	});
	// };

	return (
		<div>
			<h2> Object State Variables</h2>
			<pre>{JSON.stringify(person, null, 2)}</pre>
			<input
				value={person.name}
				onChange={(e) => setPerson({ ...person, name: e.target.value })}
			/>
			<input
				type="number"
				value={person.age}
				onChange={(e) =>
					setPerson({ ...person, age: parseInt(e.target.value) })
				}
			/>

			{/* <input value={course.title} onChange={handleTitleChange} className="form-control" /> */}
			<input
				value={course.title}
				onChange={(e) => setCourse({ ...course, title: e.target.value })}
			/>
			<input
				value={course.modules}
				onChange={(e) => setCourse({ ...course, modules: e.target.value })}
			/>
			<input
				value={course.isPublished}
				onChange={(e) => setCourse({ ...course, isPublished: e.target.value })}
			/>
			<input
				value={course.startDate}
				onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
			/>
			<pre>{JSON.stringify(course, null, 2)}</pre>
		</div>
	);
}

export default ObjectStateVariable;
