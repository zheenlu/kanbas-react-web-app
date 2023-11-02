function Question7() {
  const q = {a: 123, b: 234};
  const w = {...q, c: 456, b: 345 }; // b is overwritten

  return (
    <div>
      <h3>Question7</h3>
      w = {JSON.stringify(w)}
    </div>
    
  );
}

export default Question7;