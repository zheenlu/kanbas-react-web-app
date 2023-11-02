function Delete() {
  let qwe = [123, 234, 345, 456,567];
  const wer = (tyu) => {
    qwe = tyu;
  };
  const ert = (rty) => {
    const tyu = qwe.filter((yui) => yui !== rty);
    wer(tyu);
    console.log(qwe);
  };
  return (
    <div>
      <h3>Question21</h3>
      <button onClick={() => ert(345)}>BUTTON</button>
    </div>
  )
}

export default Delete;