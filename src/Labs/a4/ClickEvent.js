function ClickEvent() {
	const hello = (message) => {
		alert(`Message: ${message}`);
	};
	// const hello = (message) => {
	// 	alert("Hello World");
	// };

	const good = () => {
		alert("Life is good!");
	};

	const handleClickNoArguements = () => {
		alert("You Clicked the button!");
	};
	const alertAdd = (a, b) => {
		alert(a + b);
	};
	return (
		<div>
			<h2>Click Event</h2>
			<h4>Click Event Lab</h4>
			<button onClick={hello}>Click Hello 1</button>
			<button onClick={() => hello("Hello World")}> Click Hello Message</button>
			<button
				onClick={() => {
					hello();
					good();
				}}>
				Click Hello and Good
			</button>

			<h4>Click Event Lecture</h4>
			<button onClick={handleClickNoArguements}>Click No Arguements</button>
			<br />
			<button onClick={() => handleClickNoArguements()}>
				Click No Arguements, embeded and parentheses
			</button>
			<br />
			<button onClick={() => alertAdd(1, 2)}>
				Click Add, embeded and parentheses
			</button>
		</div>
	);
}

export default ClickEvent;
