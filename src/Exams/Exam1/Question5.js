function Question5() {
  const y = [123, 234, 345, 456];
  const z = [234, ...y];
  return (
    <div>
      <h3>Question5</h3>
      z = {JSON.stringify(z)}
    </div>
  )
}

export default Question5;