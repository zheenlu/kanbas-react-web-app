function Question18() {
  const qwe = 456;
  const asd = 456;
  const zxc = [321, qwe, 432, asd, 321];
  const [ewq, rew] = zxc;
  console.log(ewq);
  console.log(rew);

  return (
    <div>
      <h3>Question18</h3>
      ewq: {ewq}
      <br />
      rew: {rew}
    </div>
  )
}

export default Question18;