import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from './helloReducer';

function HelloRedux() {
  // const [message, setMessage] = useState("Hello World!");
  // retrive the message from the reducer
  const message = useSelector((state) => state.helloReducer.message);
  // 另一种写法，用Deconstruct
  // const {message} = useSelector((state) => state.helloReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello Redux</h1>
      <button onClick={() => dispatch(setMessage("Hello Redux!"))}>Set Message</button>
      <h2>{message}</h2>
    </div>
  )
}

export default HelloRedux;