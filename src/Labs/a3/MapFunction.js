import React from 'react';
function MapFunction() {
	let numberArray1 = [1, 2, 3, 4, 5, 6];
	const square = (a) => a * a;

	const squares = numberArray1.map(square); // calls square function for each element in numberArray1, and returns a new array with the results
	const cubes = numberArray1.map((a) => a * a * a); // anonymous function, a function without a name

	return (
		<div>
			<h3>Map Function</h3>
			numberArray1 = {numberArray1}
			<br />
			squares = {squares}
			<br />
			cubes = {cubes}
			<ul>
				{numberArray1.map((a) => (
					<li>
						{a} squared is {a * a}
					</li>
				))}
			</ul>
		</div>
	);
}
export default MapFunction;
