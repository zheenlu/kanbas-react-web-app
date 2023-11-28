import React, {useState} from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, selectAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
	// const { assignmentId } = useParams();
	// const assignment = db.assignments.find(
	// 	(assignment) => assignment._id === assignmentId
	// );
	//const { assignments } = useSelector((state) => state.assignmentsReducer);
	const { assignment } = useSelector((state) => state.assignmentsReducer);
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
  const isNewAssignment = new URLSearchParams(location.search).get("isNewAssignment") === "true";
	const [name, setName] = useState({
		title: isNewAssignment ? "" : assignment.title,
	});
	const [description, setDescription] = useState({
		description: isNewAssignment ? "" : assignment.description,
	});

	const handleSave = () => {
		if (isNewAssignment) {
			// Add a new assignment
			// const newAssignment = { ...assignment, course: courseId };
			dispatch(addAssignment({ ...assignment, course: courseId }));
		} else {
			// Update an existing assignment
			dispatch(updateAssignment(assignment));
		}
		// Navigate back to Assignments
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};

	
	return (
		<div>
			<div>
				<button
					className="float-end btn btn-light"
					style={{ color: "green" }}>
					<AiOutlineCheckCircle />
					Published
				</button>
				<button className="float-end btn btn-light">
					<PiDotsThreeVerticalBold />
				</button>
			</div>

			<div className="mb-3">
				<h5>Assignment Name</h5>
				{/* <input
					value={assignment?.title}
					className="form-control mb-2"
				/> */}
				<input
					className="form-control"
					value={name.title}
					placeholder="New Assignment"
					onChange={(e) => {
						dispatch(
							selectAssignment({ ...assignment, title: e.target.value })
						);
						setName({ ...name, title: e.target.value });
					}}
				/>
				<textarea
					className="form-control"
					value={description.description}
					placeholder="New Assignment Description"
					onChange={(e) => {
						dispatch(selectAssignment({ ...assignment, description: e.target.value }));
						setDescription({ ...description, description: e.target.value });
					}}
				></textarea>
			</div>

			<div className="mb-3 d-flex align-items-center">
				<label
					for="assignment-points"
					className="me-2">
					Points:
				</label>
				<input
					id="assignment-points"
					value="100"
					className="form-control w-50"
				/>
			</div>

			<div className="mb-1">
				<label
					for="Assign"
					className="form-label">
					Assign
				</label>
			</div>
			<div className="mb-3 form-control">
				<label
					for="dueDate"
					className="form-label">
					Due
					<input
						type="date"
						className="form-control"
						id="dueDate"
						value="2021-01-01"
					/>
				</label>
				<label
					for="availableDate"
					className="form-label ms-2">
					Available from
					<input
						type="date"
						className="form-control"
						id="availableDate"
						value="2021-01-01"
					/>
				</label>
				<label
					for="endDate"
					className="form-label ms-2">
					Until
					<input
						type="date"
						className="form-control"
						id="endDate"
						value="2021-01-01"
					/>
				</label>
			</div>

			<Link
				to={`/Kanbas/Courses/${courseId}/Assignments`}
				className="btn btn-danger float-end">
				Cancel
			</Link>
			<button
				onClick={handleSave}
				className="btn btn-success me-2 float-end">
				Save
			</button>
		</div>
	);
}

export default AssignmentEditor;
