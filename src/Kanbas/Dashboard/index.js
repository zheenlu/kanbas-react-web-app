import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"; // Assuming you have a separate CSS file for styling

function Dashboard() {
	const courses = db.courses;

	return (
		<div className="dashboard-container">
			<div>
				<h2>Dashboard</h2>
				<hr />
				<h3>Published Courses ({courses.length})</h3>
				<hr />
			</div>
			<div class="row row-cols-1 row-cols-md-3 g-4">
				{courses.map((course) => (
					<div
						key={course._id}
						className="col">
						<div className="card">
							<img
								src="/images/Howls_1.jpeg"
								className="card-img-top"
								alt="Course"
							/>{" "}
							{/* under src/Kanbas/Dashboard, how the path knows to images under public/. I mean without writing fully the path name, is it because ""? 
              In a React application, when you use relative paths for static assets like images, the application assumes that the root of your public directory is the base URL. So, when you provide a path like /images/Howls_1.jpeg, React will automatically look for the image file in the public directory, which is the root of your application.

              This behavior is a result of how Create React App (CRA) and React handle static assets. It simplifies the path handling, making it easier to reference files in the public directory without needing to specify the full URL.
              
              Just ensure that the image file is located in the public/images directory, and you can reference it with a relative path like /images/Howls_1.jpeg, as shown in your code snippet. React will handle the rest. */}
							<div className="card-body">
								<h5 className="card-title">{course.name}</h5>
								<p className="card-text">Course Number: {course.number}</p>
								<p className="card-text">Start Date: {course.startDate}</p>
								<p className="card-text">End Date: {course.endDate}</p>
								<Link
									to={`/Kanbas/Courses/${course._id}`}
									className="btn btn-primary">
									View Course
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Dashboard;
