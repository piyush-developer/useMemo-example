//useMemo is use for optimise the performance.


import { useState, useMemo } from 'react';

function Example() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }

  // To prevent the delay in the counterTwo

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne])

  return (
    <>
      <h3>useMemo</h3><hr/>
      <button onClick={incrementOne}>Count One {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span><br/>
      <button onClick={incrementTwo}>Count Two {counterTwo}</button>
    </>
  )
}

export default Example;