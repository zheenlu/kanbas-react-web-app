import { useState } from "react";

function EventObejct() {
	const [event, setEvent] = useState(null);
	const handleClick = (e) => {
		e.target = e.target.outerHTML;
		delete e.view;
		setEvent(e);
	};
  
	const handleEvent = (event) => {
		console.log(event.target); // gives back a referece to the element/button, direct reference to the DOM element
		console.log(event.type);
		console.log(event.clientX);
		console.log(event.clientY);
		console.log(event.altKey);
		console.log(event.ctrlKey);
		console.log(event.shiftKey);
		console.log(event.metaKey);
	};
	return (
		<div>
			<h3>Event Object</h3>
			<h4>Event Object Lab</h4>
			<button
				id="event-button"
				onClick={(e) => handleClick(e)}
				className="btn btn-primary">
				Display Event Object
			</button>
			<pre>{JSON.stringify(event, null, 2)}</pre>

			<h4>Event Object Lecture</h4>
			<button
				id="CLICK"
				onClick={(event) => handleEvent(event)}>
				Click Me
			</button>
			{/* <button id="CLICK" onClick={handleEvent()}>Click Me</button> */}
		</div>
	);
}

export default EventObejct;
