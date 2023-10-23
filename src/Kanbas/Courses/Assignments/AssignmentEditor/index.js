import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = db.assignments.find(
		(assignment) => assignment._id === assignmentId
	);

	const { courseId } = useParams();
	const navigate = useNavigate();
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
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



			<h5>Assignment Name</h5>
			<input
				value={assignment.title}
				className="form-control mb-2"
			/>
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
