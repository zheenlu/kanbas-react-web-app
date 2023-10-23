import React from 'react';
function VariablesAndConstants() {
  var functionScoped = 2; // we don't use var anymore
  let blockScoped = 5; // we use "let" and "const" instead of var. "let" declares a variable we can change over time
  const constant1 = functionScoped - blockScoped; // Wheras "const" declares a constant that can only be set at declaration, and can't change over time
   return(
      <div>
         <h3>Variables and Constants</h3>
         functionScoped = { functionScoped } {/*looks like html, but it actually has embeded javascript expressions. These curly braces {} are escape characters saying I want to replace this content with the value of that variable or constant, wheras 'functionScoped' this is a little string that gets rendered as is to the dom, and {functionScopes} is a reference -- you're referencing a variable, and this whole thing gets replaced with a value of that variable, so it's like a dereferencing */}  
         <br/> 
         blockScoped = { blockScoped }
         <br/>
         constant1 = { constant1 }
         <br/>
      </div>
   );
}

export default VariablesAndConstants
