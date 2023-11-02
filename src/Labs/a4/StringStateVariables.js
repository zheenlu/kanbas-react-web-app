import React, { useState } from "react";

function StringStateVariables() {
	const [firstName, setFirstName] = useState("John");

	const [name, setName] = useState("John Doe");
	const [age, setAge] = useState(22);
	const [address, setAddress] = useState("123 Main St.");
	const [city, setCity] = useState("Anytown");
	const [state, setState] = useState("CA");
	const [zip, setZip] = useState("12345");
	const [phone, setPhone] = useState("555-555-5555");

	const handleChange = (event) => {
		// console.log(event.target);
		console.log(event.target.value);
		setName(event.target.value);
	};
	return (
		<div>
			<h2>String State Variables</h2>
			<p>firstName: {firstName}</p>

			<input
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>

			<h4>Name: {name}</h4>
			{/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
			<input
				value={name}
				onChange={handleChange}
			/>

			<h4>Age: {age}</h4>
			<input
				value={age}
				onChange={(e) => setAge(e.target.value)}
			/>

			<h4>Address: {address}</h4>
			<input
				value={address}
				onChange={(e) => setAddress(e.target.value)}
			/>

			<h4>City: {city}</h4>
			<input
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>

			<h4>State: {state}</h4>
			<input
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>

			<h4>Zip: {zip}</h4>
			<input
				value={zip}
				onChange={(e) => setZip(e.target.value)}
			/>

			<h4>Phone: {phone}</h4>
			<input
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
		</div>
	);
}

export default StringStateVariables;
