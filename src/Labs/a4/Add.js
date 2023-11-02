

function Add({a, b, add2}) {
  const add = (a, b) => {
    return parseInt(a) + parseInt(b);
  }
  return (
    <div>
      <h2>Add</h2>
      <p>Add({a}, {b}) = {add(a, b)}</p>
    </div>
    
  )
}

export default Add;