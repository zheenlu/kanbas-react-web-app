import ModuleList from "./ModuleList";
import React from "react";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import {BsCheck2Circle} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";

function Modules() {
	return (
		<div className="module-div">
			<div className="module-buttons-div d-flex justify-content-end">
				<button className="btn btn-secondary me-2">Collapse All</button>
				<button className="btn btn-secondary me-2">View Progress</button>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<BsCheck2Circle />{" "}
						Publish All
					</button>
					<ul
						className="dropdown-menu"
						data-bs-auto-close="outside">
						<li>
							<a
								className="dropdown-item"
								href="#">
								Publish All
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								href="#">
								UnPublish
							</a>
						</li>
						<li>
							<a
								className="dropdown-item"
								href="#">
								Public some
							</a>
						</li>
					</ul>
				</div>
        {" "}
				<button className="btn btn-danger me-2">
					<AiOutlinePlus/>{" "}
					Module
				</button>
				<button className="btn btn-secondary me-2">
					<BsThreeDotsVertical /> {/* Renders the three dots icon */}
				</button>
			</div>
			<hr />

			<ModuleList />
		</div>
	);
}

export default Modules;
