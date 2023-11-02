import React from "react";
import { Link, useParams } from "react-router-dom";

function QWE() {
  const {FDS} = useParams();
  return (
    <div>
      <h1>Q6</h1>
      <Link to="/FDS/ZXC" id="234"
           className={FDS.includes("ZXC") ? "SDF" : ""}>DSA</Link>
      <Link to="/FDS/CXZ" id="123"
           className={FDS.includes("CXZ") ? "ASD" : ""}>FDS</Link>
    </div>
  );
}
export default QWE;