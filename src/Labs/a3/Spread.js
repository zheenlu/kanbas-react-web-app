function Spread() {
	const arr1 = [1, 2, 3];
	const arr2 = [...arr1, 4, 5, 6]; // copying/spread arr1 onto another arr (arr2 here), or you can put it anywhere [4, 5, 6, ...arr1, 7, 8, 9]
	const obj1 = { a: 1, b: 2, c: 3 };
	const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
	const obj3 = { ...obj1, b: 4 }; // as for object, be careful in case of duplicate keys, the last one wins
	const obj4 = { b: 4, ...obj1 }; // in this case, b will be 2, because it is the last one, overriding the previous one
	return (
		<div>
			<h2>Spread Operator</h2>
			<h3>Array Spread</h3>
			arr1 = {JSON.stringify(arr1)} <br />
			arr2 = {JSON.stringify(arr2)} <br />
			<h3>Object Spread</h3>
			{JSON.stringify(obj1)} <br />
			{JSON.stringify(obj2)} <br />
			{JSON.stringify(obj3)} <br /> {/** {a: 1, b: 4, c: 3} */}
			{JSON.stringify(obj4)} <br /> {/** {b: 2, a: 1, c: 3} */}
		</div>
	);
}

export default Spread;
