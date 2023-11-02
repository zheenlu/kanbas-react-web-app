import React from "react";

function Xyz({qwe = 10}) {
  let rew = qwe;
  const ert = (ewq) => {
    rew = ewq; 
  };
  const asd = () => {
    ert(rew + 5);
    console.log(rew);
  };
  return (
    <div>
      <h3>Question15</h3>
      <button onClick={asd}>BUTTON</button>
    </div>
  )

}

export default Xyz;