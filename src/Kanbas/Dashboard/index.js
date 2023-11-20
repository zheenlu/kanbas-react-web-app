import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


function Dashboard({
	courses,
	course,
	setCourse,
	addCourse,
	deleteCourse,
	updateCourse,
}) {
	console.log(typeof addCourse); // Should log 'function' if addCourse is correctly passed

	const editCard = (courseId) => {
		const selectedCourse = courses.find((c) => c._id === courseId);
		if (selectedCourse) {
			setCourse(selectedCourse);
		}
	};

	return (
		<div className="dashboard-container">
			<div>
				<h2>Dashboard</h2>
				<hr />
				<h3>Published Courses ({courses.length})</h3>
				<hr />
				<h5>Course</h5>
				<input
					value={course.name}
					placeholder="Course Name"
					className="form-control"
					onChange={(e) => setCourse({ ...course, name: e.target.value })}
				/>
				<button
					className="btn btn-primary ms-2"
					style={{ marginTop: "0px" }}
					onClick={updateCourse}>
					Update
				</button>{" "}
				<button
					className="btn btn-success ms-2"
					onClick={() => {
						console.log("Test");
						addCourse();
					}}>
					Add
				</button>
			</div>
			<div className="card-list">
				{courses.map((course) => (
					<div
						key={course._id}
						className="card">
						<img
							src="/images/Howls_1.jpeg"
							className="card-img-top"
							alt="Course"
						/>
						<div className="card-body">
							<h5 className="card-title">{course.name}</h5>
							<p className="card-text">Course Id: {course._id}</p>
							<p className="card-text">Course Number: {course.number}</p>
							<p className="card-text">Start Date: {course.startDate}</p>
							<p className="card-text">End Date: {course.endDate}</p>
							<button
								className="btn btn-danger ms-2"
								onClick={() => deleteCourse(course._id)}>
								Delete
							</button>
							{/* <button
								className="btn ms-2"
								onClick={() => editCard(course._id)}>
								Edit
							</button> */}
							<button
								className="btn btn-warning ms-2"
								onClick={() => setCourse(course)}>
								Edit
							</button>
							<Link
								to={`/Kanbas/Courses/${course._id}`}
								className="btn btn-primary ms-2">
								View Course
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Dashboard;
