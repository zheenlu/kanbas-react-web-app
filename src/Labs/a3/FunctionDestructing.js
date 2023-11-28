import React from 'react';
import { useSelector } from 'react-redux';

function FunctionDestructing() {
  const message = useSelector((state) => state.helloReducer.message);
  const { todos } = useSelector((state) => state.todosReducer);


  const add = (a, b) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }) => a - b; // here receiving a single paremeter, meaning it's expecting an object as an arguement. And it's gonna take that object, and destruct it. It's going to decompose it into its individual parts a and b, and then it's going to assign those individual parts a and b as new variables a and b inside of the function. Or ({b, a}) the order doesn't matter, it's going to assign the values of those properties to the variables a and b.
  const difference = subtract({ a: 4, b: 2 }); // instead of passing in two separate arguements, we're passing in a single object with two properties, a and b. When the function receives that object, it's going to destructure it, and it's going to assign the values of those properties to the variables a and b.
  return (
    <div>
      <h2>Function Destructing: from a4 - {message}</h2>
      <pre>
        <code>
          {JSON.stringify(todos, null, 2)}
        </code>
      </pre>
      
      const add = (a, b) =&gt; a + b;<br />
      const sum = add(1, 2);<br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
      sum = {sum}<br />
      difference = {difference}
    </div>
  );
 
}

export default FunctionDestructing;