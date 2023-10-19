import { useParams } from "react-router";
import React from "react";
import db from '../Database';

function Courses() {
  const {courseId} = useParams();
  const course = db.courses.find(course => course._id === courseId);
  return (
    <div>
      <h1>Courses {course.name}</h1>
      <JsonPre json={course} />
    </div>
  )
}

export default Courses;