import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment2, decrement2 } from './counter2Reducer';
function Counter2() {
  // const [count2, setCount2] = useState(0);
  // const increment2 = () => setCount2(count2 + 1);
  // const decrement2 = () => setCount2(count2 - 1);
  const {count2} = useSelector((state) => state.counter2Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter2</h2>
      <button onClick={() => dispatch(increment2())}>Increment2</button>
      <button onClick={() => dispatch(decrement2())}>Decrement2</button>
      <br/>
      {count2}
    </div>
  )
}

export default Counter2;