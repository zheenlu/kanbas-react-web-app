import { useState } from 'react';

function Xtr(fds) {
  const [yui, rty] = useState(fds);
  return (
    <div>
      <h1>Question5</h1>
      <h2>yui is: {yui}</h2>
      <input
        value={yui}
        onChange={qwe => rty(qwe.target.value)}
      />
    </div>
  );
}

export default Xtr;