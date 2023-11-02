import { Link, Route, Routes } from "react-router-dom";
import Jkl from "./Jkl";

function Bnm(sdf = 4) { // 接受一个名为 sdf 的属性，默认值为 4
  return (
    <div>
      <Link to={`/Jkl/${sdf}`}>BUTTON</Link>
      <Routes>
        <Route path="/Jkl/:dsa" element={<Jkl />} />
      </Routes>
    </div>
  )
}

export default Bnm;