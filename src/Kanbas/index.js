import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import History from "./History";
import Studio from "./Studio";
import Help from "./Help";
import React from 'react';
import "./index.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
// import axios from "axios";
// import {findAllCourses} from "../Courses/client";
import * as client from "./Courses/client";

function Kanbas() {
	//const [courses, setCourses] = useState(db.courses);
	const [course, setCourse] = useState({ name: "" });

	// a5 updates
	const [courses, setCourses] = useState([]);
	// const URL = "http://localhost:4000/api/courses";

	//use fetchCourses function to get the data from the server instead of from database on the client side
	const findAllCourses = async () => {
		const courses = await client.findAllCourses();
		setCourses(courses);
	};

	const deleteCourse = async (id) => {
		try {
			await client.deleteCourse(id);
			setCourses(courses.filter((course) => course._id !== id)); // to make the server and the client display the same data. When delete a card, the card info will be deleted from the server but the client side still displays 3 cards not 2, by using filter, the client will also delete the card info from the client side
		} catch (error) {
			console.log(error);
		}
	};

	const updateCourse = async () => {
		try {
			await client.updateCourse(course);
			setCourses(
				courses.map((c) => (c._id === course._id ? course : c))
			);
		} catch (error) {
			console.log(error);
		}
	};
	const addCourse = async () => {
		const newCOurse = await client.addCourse(course);
		//By adding console.log(req.body);, whenever a POST request is made to /api/courses, the server will print the body of the request to the console. This is very useful for debugging, as you can see exactly what data is being received from the client.
		setCourses([newCOurse, ...courses]);
		setCourse({ name: "" });
	};

	useEffect(() => {
		findAllCourses();
	}, []);
	// const addNewCourse = () => {
	// 	setCourses([
	// 		...courses,
	// 		{ ...course, _id: new Date().getTime().toString() },
	// 	]);
	// };
	// const deleteCourse = (courseId) => {
	// 	setCourses(courses.filter((course) => course._id !== courseId));
	// };
	// const updateCourse = () => {
	// 	setCourses(
	// 		courses.map((c) => {
	// 			if (c._id === course._id) {
	// 				return course;
	// 			} else {
	// 				return c;
	// 			}
	// 		})
	// 	);
	// };

	return (
		<Provider store={store}>
			<div className="d-flex fixed-navigation">
				<KanbasNavigation />

				<div className="main-div">
					<Routes>
						<Route
							path="/"
							element={<Navigate to="Dashboard" />}
						/>
						<Route
							path="Account"
							element={<Account />}
						/>
						<Route
							path="Dashboard"
							element={
								<Dashboard
									courses={courses}
									course={course}
									setCourse={setCourse}
									addCourse={addCourse}
									deleteCourse={deleteCourse}
									updateCourse={updateCourse}
								/>
							}
						/>
						<Route
							path="Courses/:courseId/*"
							element={<Courses courses={courses} />}
						/>
						<Route
							path="Calendar"
							element={<Calendar />}
						/>
						<Route
							path="Inbox"
							element={<Inbox />}
						/>
						<Route
							path="History"
							element={<History />}
						/>
						<Route
							path="Studio"
							element={<Studio />}
						/>
						<Route
							path="Help"
							element={<Help />}
						/>
					</Routes>
				</div>
			</div>
		</Provider>
	);
}

export default Kanbas;