import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import React from "react";

function CourseNavigation() {
	const links = [
		"Home",
		"Modules",
		"Piazza",
		"Assignments",
		"Quizzes",
		"Grades",
	];
	const { courseId } = useParams();
	const { pathname } = useLocation();
	return (
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
