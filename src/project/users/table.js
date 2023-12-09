import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	BsFillCheckCircleFill,
	BsPencil,
	BsTrash3Fill,
	BsPlusCircleFill,
} from "react-icons/bs";
import * as client from "./client";

function UserTable() {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({
		username: "",
		password: "",
		role: "USER",
	});
	const createUser = async () => {
		try {
			const newUser = await client.createUser(user);
			setUsers([newUser, ...users]);
		} catch (err) {
			console.log(err);
		}
	};
	const selectUser = async (user) => {
		try {
			const u = await client.findUserById(user._id);
			setUser(u);
		} catch (err) {
			console.log(err);
		}
	};
	const updateUser = async () => {
		try {
			await client.updateUser(user._id, user);
			setUsers(users.map((u) => (u._id === user._id ? user : u)));
		} catch (err) {
			console.log(err);
		}
	};
	
	const deleteUser = async (user) => {
		try {
			await client.deleteUser(user);
			setUsers(users.filter((u) => u._id !== user._id));
		} catch (err) {
			console.log(err);
		}
	};
	const fetchUsers = async () => {
		const users = await client.findAllUsers();
		setUsers(users);
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			<h1>User List</h1>
			<table className="table">
				<thead>
					<tr>
						<td>
							<input
								placeholder="Password"
								value={user.password}
								onChange={(e) => setUser({ ...user, password: e.target.value })}
							/>
							<input
								placeholder="Username"
								value={user.username}
								onChange={(e) => setUser({ ...user, username: e.target.value })}
							/>
						</td>
						<td>
							<input
								placeholder="First Name"
								value={user.firstName}
								onChange={(e) =>
									setUser({ ...user, firstName: e.target.value })
								}
							/>
						</td>
						<td>
							<input
								placeholder="Last Name"
								value={user.lastName}
								onChange={(e) => setUser({ ...user, lastName: e.target.value })}
							/>
						</td>
						
						<td>
							<select
								value={user.role}
								onChange={(e) => setUser({ ...user, role: e.target.value })}>
								<option value="USER">User</option>
								<option value="ADMIN">Admin</option>
								<option value="FACULTY">Faculty</option>
								<option value="STUDENT">Student</option>
							</select>
						</td>
						<td className="text-nowrap">
							<BsFillCheckCircleFill
								onClick={updateUser}
								className="me-2 text-success fs-1 text"
							/>
							<BsPlusCircleFill
								onClick={createUser}
								className="text-primary fs-1 text"
							/>
						</td>
					</tr>
				</thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`/project/account/${user._id}`}>
                                    {user.username}
                                </Link>
                            </td>
                            {/* Add other user details here if necessary */}
                            <td>
                                {/* Add buttons or icons for actions like edit or delete */}
                                <button className="btn btn-warning me-2" onClick={() => selectUser(user)}>
                                    <BsPencil />
                                </button>
                                <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                                    <BsTrash3Fill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
			</table>
		</div>
	);
}
export default UserTable;
