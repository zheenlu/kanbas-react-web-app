function Jkl2() {
	let qwe = { ert: 6 };
	const wer = (qwe) => console.log(qwe.ert);
	return (
		<div>
			<h3>Question13</h3>
			<button onClick={() => wer({ ...qwe, ert: qwe.ert + 1 })}>Lvp</button>
			<button onClick={() => wer({ ...qwe, ert: qwe.ert - 3 })}>Poi</button>
		</div>
	);
}

export default Jkl2;
