import db from '../Database';
import { Link } from 'react-router-dom';
// import JsonPre from '../../Labs/a3/JsonPre';

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Course ({courses.length})</h2>
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            {course.name}
          </Link>
        ))}
      </div>
    </div>

  )
}

export default Dashboard;