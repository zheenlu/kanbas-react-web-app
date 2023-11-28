import React from 'react';
function ES5Functions() {
    function add (a, b) { // in js, you can declare a function inside a function
        return a + b;
      }
      const twoPlusFour = add(2, 4);
      console.log(twoPlusFour);
    
      return (
        <div>
          <h2>Functions</h2>
          <h3>Legacy ES5 functions</h3>
          twoPlusFour = { twoPlusFour }
          <br />
          add(2, 4) = { add(2, 4) // can also call a function inside a function
          }<br />
        </div>
      )
    
}

export default ES5Functions;