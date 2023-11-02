function Question9() {
  const w = ["ewq", "dsa", "asd", "tre", "zxc"]
  const r = w.find((a, b) => a === "tre")
  const r1 = w.find((a, b) => b === 3)
  // a is the value, b is the index
  return (
    <div>
      <h3>Question9</h3>
      
      find value: r: {r} <br/>
      find index: r1: {r1}
      
    </div>
  )
}

export default Question9;