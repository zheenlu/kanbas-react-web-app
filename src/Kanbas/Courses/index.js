import { useParams } from "react-router";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./index.css";
import { useState, useEffect } from "react";
import * as client from "./client";

function Courses({ courses }) {
	const { courseId } = useParams();
	//const course = courses.find((course) => course._id === courseId);
	const [course, setCourse] = useState({});
	const fetchCourseById = async () => {
		const course = await client.fetchCourseById(courseId);
		setCourse(course);
	}
	useEffect(() => {
		fetchCourseById();
	}, []);

	return (
		<div className="courses-main-div">
			{/* <div className="course-header-div">
				<span className="red-icon-courseName">
					<IoReorderThreeOutline />
					<Breadcrumbs courseName={course.name} />
				</span>
				<hr />
			</div> */}
			
			<span className="red-icon-courseName">
				<IoReorderThreeOutline />
				<Breadcrumbs courseName={course.name} />
			</span>
			<hr />


			<div className="nav-content-div">
				<div className="course-nav-div">
					<CourseNavigation />
					{/* <JsonPre json={course} /> */}
				</div>
				<div
					className="overflow-y-scroll position-fixed bottom-0 end-0"
					style={{
						left: "320px",
						top: "90px",
					}}>
					<Routes>
						<Route
							path="/"
							element={<Navigate to="Home" />}
						/>
						<Route
							path="Home"
							element={<Home />}
						/>
						<Route
							path="Modules"
							element={<Modules />}
						/>

						<Route
							path="Assignments"
							element={<Assignments />}
						/>
						<Route
							path="Assignments/:assignmentId"
							element={<AssignmentEditor />}
						/>
						<Route
							path="Grades"
							element={<Grades />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

function Breadcrumbs({ courseName }) {
	const location = useLocation();
	const { pathname } = location;
	console.log(`ffhweifh is: ${pathname}`);
	console.log(`pathname is: ${pathname}`);

	const routeToBreadcrumb = {
		"/": "Course Home", // Add the course home route name
		Home: "Home",
		Modules: "Modules",
		Piazza: "Piazza",
		Assignments: "Assignments",
		"Assignments/:assignmentId": "Assignment",
		Quizzes: "Quizzes",
		Grades: "Grades",
	};

	if (pathname.startsWith("/Kanbas/Courses/")) {
		const courseParts = pathname.split("/").slice(3); // Skip the first 3 parts
		const courseNumber = courseParts[0];
		const routeName = courseParts[1];

		const locationName = routeToBreadcrumb[routeName] || "Unknown";

		return (
			<div className="breadcrumbs">
				<span>
					{`${courseNumber}: ${courseName} > `}
					<span style={{ color: "black" }}>{locationName}</span>
				</span>
			</div>
		);
	}

	return (
		<div className="breadcrumbs">
			<span>{routeToBreadcrumb[pathname] || "Unknown"}</span>
		</div>
	);
}

export default Courses;