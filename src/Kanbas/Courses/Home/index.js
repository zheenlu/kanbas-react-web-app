import ModuleList from "../Modules/ModuleList";
import Module from "../Modules/index";
import React from "react";
import "./index.css";
import { TbFileImport } from "react-icons/tb";
import { MdLabelImportantOutline } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { CiStreamOn } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ImRadioUnchecked } from "react-icons/im";

function Home() {
	const buttonsWithIcons = [
		{ label: "Import Existing Content", icon: TbFileImport },
		{ label: "Import From Commons", icon: MdLabelImportantOutline },
		{ label: "Choose Home Page", icon: RiHome4Line },
		{ label: "View Course Stream", icon: CiStreamOn },
		{ label: "New Analytics", icon: TbBrandGoogleAnalytics },
		{ label: "View Course Notifications", icon: IoIosNotificationsOutline },
	];

	return (
		<div>
			<div className="row home-screen-container">
				<div className="col-10 home-content-container">
					<Module />
					{/* <ModuleList /> */}
					<div className="col-5 status-div">
						<div className="status-buttons">
							<ul className="status-button-list">
								{buttonsWithIcons.map((item, index) => (
									<li
										key={index}
										className="status-button-item">
										<button className="status-button">
											{React.createElement(item.icon)} {item.label}
										</button>
									</li>
								))}
							</ul>
						</div>
						<div className="status-todo">
							<h6>To Do</h6>
							<hr />
							<div className="status-todo-list"> 
              {/* implement them using map in the future */}
								<p><ImRadioUnchecked /> Grade A1 - ENV + HTML</p>
								<p><ImRadioUnchecked /> Grade A2 - CSS + Bootstrap</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
