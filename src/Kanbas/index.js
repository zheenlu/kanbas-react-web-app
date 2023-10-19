import { func } from "prop-types";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>  
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Kanbas/Account" element={<Account />} />
          <Route path="/Kanbas/Dashboard" element={<Dashboard />} />
          <Route path="/Kanbas/Courses/:courseId" element={<Courses />} />
          <Route path="/Kanbas/Calendar" element={< Calendar />} />
        </Routes>
        

      </div>
    </div>
    // <div>
    //   {/* <Nav />  */}
    //   <h1>Kanbas</h1>
    // </div>
  );
}

export default Kanbas;