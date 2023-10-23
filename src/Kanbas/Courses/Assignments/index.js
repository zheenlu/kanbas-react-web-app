import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {AiOutlinePlus} from "react-icons/ai";
import {PiDotsThreeVerticalBold} from "react-icons/pi";

function Assignments() {
	const { courseId } = useParams();
	const assignments = db.assignments;
	const courseAssignments = assignments.filter(
		(assignment) => assignment.course === courseId
	);

	return (
		<div>
      <div>
        <input
          type="text"
          defaultValue="Search for Assignment"
        />
        <div className="float-end">
          <button className="btn btn-light"><AiOutlinePlus />Group</button>
          <button className="btn btn-danger"><AiOutlinePlus />Assignment</button>
          <button className="btn btn-light"><PiDotsThreeVerticalBold/></button>
        </div>
      </div>
			<hr />
			<h5>Assignments for course {courseId}</h5>
			<div className="wd-courses-assignments list-group">
				{courseAssignments.map((assignment) => (
					<Link
						key={assignment._id}
						to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
						className="list-group-item">
						{assignment.title}
					</Link>
				))}
			</div>
		</div>
	);
}
export default Assignments;
