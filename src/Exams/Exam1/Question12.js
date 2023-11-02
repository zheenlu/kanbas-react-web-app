function Question12() {
  const w = [51, 42, 33, 24, 15];
  const q = w.findIndex((b) => b === 33);
  return (
    <div>
      <h3>Question12</h3>
      {q}
    </div>
  )
}

export default Question12;