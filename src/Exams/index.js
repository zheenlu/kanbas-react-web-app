import { Routes, Route, Link, Navigate } from "react-router-dom";
import Exam1 from "./Exam1";

function Exams() {
  return (
    <div>
      <Routes>
				<Route
					path="/Exam1"
					element={<Exam1 />}
				/> 
        
      </Routes>
	  </div>
  );
}

export default Exams;
