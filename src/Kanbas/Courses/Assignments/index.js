import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {AiOutlinePlus} from "react-icons/ai";
import {PiDotsThreeVerticalBold} from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import {
	addAssignment,
	deleteAssignment,
	updateAssignment,
	selectAssignment,
} from "./assignmentsReducer";


function Assignments() {
	const { courseId } = useParams();
	// const assignments = db.assignments;
	const { assignments } = useSelector((state) => state.assignmentsReducer);
	const { assignment } = useSelector((state) => state.assignmentsReducer);
	const dispatch = useDispatch();

	return (
		<div>
			<div className="d-flex align-items-center">
				<input
					type="text"
					className="form-control w-50"
					defaultValue="Search for Assignment"
				/>
				<button className="btn btn-light ms-2">
					<PiDotsThreeVerticalBold />
				</button>
				<button className="btn btn-light ms-2">
					<AiOutlinePlus /> Group
				</button>
				<Link
					to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor?isNewAssignment=true`}
					className="btn btn-danger ms-2">
					<AiOutlinePlus /> Assignment
				</Link>
			</div>
			<hr />
			{/* <h5>Assignments for course {courseId}</h5> */}

			{/* <button
				className="btn btn-primary float-end ms-2"
				style={{ marginTop: "0px" }}
				onClick={() =>
					dispatch(addAssignment({ ...assignment, course: courseId }))
				}>
				Add
			</button> */}
			{/* <button
				className="btn btn-success float-end ms-2"
				onClick={() => dispatch(updateAssignment(assignment))}>
				Update
			</button> */}
			{/* <input
				className="form-control"
				value={assignment.title}
				onChange={(e) =>
					dispatch(selectAssignment({ ...assignment, title: e.target.value }))
				}
			/> */}
			<div className="wd-courses-assignments list-group">
				{assignments
					.filter((assignment) => assignment.course === courseId)
					.map((assignment) => (
						<Link
							key={assignment._id}
							to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
							className="list-group-item">
							{assignment.title}
								<button
									navigate={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
									className="btn btn-success float-end ms-2"
									onClick={() => dispatch(selectAssignment(assignment))}>
									Edit
								</button>

							<button
								className="btn btn-danger float-end ms-2"
								onClick={(e) => {
									const confirmation = window.confirm(
										"Are you sure you want to delete this assignment?"
									);
									if (confirmation) {
										dispatch(deleteAssignment(assignment._id));
									} 
									// else {
									// 	e.preventDefault(); // Prevent the default behavior (navigating to AssignmentEditor)
									// }
									e.preventDefault();
								}}>
								Delete
							</button>
						</Link>
					))}
			</div>
		</div>
	);
}
export default Assignments;
