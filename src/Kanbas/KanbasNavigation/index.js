import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiInboxIn } from "react-icons/ci";
import { LuHistory } from "react-icons/lu";
import { LuMonitorPlay } from "react-icons/lu";
import { TfiHelpAlt } from "react-icons/tfi";
import "./index.css";
import React from "react";

function KanbasNavigation() {
	const links = [
		"Account",
		"Dashboard",
		"Courses",
		"Calendar",
		"Inbox",
		"History",
		"Studio",
		"Help",
	];
	const linkToIconMap = {
		Account: <BiUserCircle className="wd-icon wd-account-icon" />,
		Dashboard: <AiOutlineDashboard className="wd-icon" />,
		Courses: <LiaBookSolid className="wd-icon" />,
		Calendar: <AiOutlineCalendar className="wd-icon" />,
		Inbox: <CiInboxIn className="wd-icon" />,
		History: <LuHistory className="wd-icon" />,
		Studio: <LuMonitorPlay className="wd-icon" />,
		Help: <TfiHelpAlt className="wd-icon" />,
	};
	const { pathname } = useLocation();
	return (
		<div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
	);
}
export default KanbasNavigation;
