function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];

  const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
  const evenNumbers = numberArray1.filter(a => a % 2 === 0);
  const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

  return (
    <div className="FilterFunction">
      <h3>Filter Function</h3>
      <p>numberArray1 = {JSON.stringify(numberArray1)}</p>
      <p>numbersGreaterThan2 = {JSON.stringify(numbersGreaterThan2)}</p>
      <p>evenNumbersNewArray = {JSON.stringify(evenNumbers)}</p>
      <p>oddNumbersNewArray = {JSON.stringify(oddNumbers)}</p>
    </div>
  )
}

export default FilterFunction;