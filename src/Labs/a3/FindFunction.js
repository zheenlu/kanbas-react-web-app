function FindFunction() {
	let numberArray1 = [1, 2, 3, 4, 5];
	let stringArray1 = ["string1", "string2", "string3"];

	const four = numberArray1.find((a) => a === 4); // it finds the first element that matches the condition, and returns it
	const string3 = stringArray1.find((a) => a === "string3"); // always use triplle equals ===

	const fourIndex = numberArray1.findIndex((a) => a === 4);
	const string3Index = stringArray1.findIndex((a) => a === "string3");

	return (
		<div className="FindFunction">
			<h3>Find Function</h3>
      <p>numberArray1 = {JSON.stringify(numberArray1)}</p>
      <p>stringArray1 = {JSON.stringify(stringArray1)}</p>
			<p>four = {four}</p>
			<p>string3 = {string3}</p>
      <p>fourIndex = {fourIndex}</p>
      <p>string3Index = {string3Index}</p>
		</div>
	);
}

export default FindFunction;
