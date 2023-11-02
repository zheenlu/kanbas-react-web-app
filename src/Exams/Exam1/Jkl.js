import { useParams } from "react-router-dom";

function Jkl({ asd = [9, 2, 8, 3] }) {
  const { dsa } = useParams(); // 获取 URL 中的参数 dsa
  const ewq = [dsa, ...asd];
  return (
    <div>
      <h3>Question6</h3>
      ewq: {ewq}
    </div>
  )
}

export default Jkl;