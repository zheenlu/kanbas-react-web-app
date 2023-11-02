function Question16() {
	const qwe = { asd: 123, sdf: 234 };
	const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 };
	const { sdf, asd } = zxc;
	console.log(asd);
	console.log(sdf);
	return (
		<div>
			<h3>Question16</h3>
			asd = {asd} sdf = {sdf}
		</div>
	);
}

export default Question16;
