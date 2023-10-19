import JsonPre from "./JsonPre";

function JsonStringify() {
	const squares = [1, 4, 16, 25, 36];
  console.log("squares = ", squares);

	return (
		<div>
			<h3>Json Stringify</h3>
			squares as JSON = {JSON.stringify(squares)}{" "}
			{/** very useful for debugging, see JsonPre.js file */}
      <br />
      <JsonPre json={squares} /> {/** You can always use console.log to debug, but it's easier to see it printed out on the screen */}
		</div>
	);
}

export default JsonStringify;
