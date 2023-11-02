import Add from "./Add";

function FunctionsAsParameters() {
  const add2 = (a, b) => {
    return parseInt(a) + parseInt(b);
  }
  return (
    <div>
      <h2>Functions as Parameters</h2>
      <Add a={3} b={5} add2={add2} />
    </div>
  )
  
}

export default FunctionsAsParameters;