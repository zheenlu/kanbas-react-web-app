import { useState } from "react";

function Qntr({wer}) {
  const [qwe, asd] = useState(wer);
  return ( 
    <div>
      <h1>Question1</h1>
      <h2>{qwe}</h2>
      <button onClick={() => asd(qwe + 20)}>ZXC</button>
      <button onClick={() => asd(qwe - 30)}>CXZ</button>
    </div>
  );
}

export default Qntr;