import { useParams } from "react-router-dom";
function Asd2() {
	const { zxc, xcv } = useParams();
	const qwe = parseInt(zxc);
	const wer = parseInt(xcv);
	return (
		<div>
			<h3>Question8</h3>
			<h4>{wer - qwe}</h4>
		</div>
	);
}
export default Asd2;
