import React, { useState } from 'react'

const CounterApp = () => {
    // let count = 0
    
    let [count , setCount] = useState(0)

    function handleIncrease() {
        setCount ((prevCount)=>prevCount+1);
        // setCount (count + 1)
        // count +=1
        // console.log(count);
    }
    function handleDecrease() {
        setCount ((prevCount)=>prevCount-1);
        // setCount (count - 1)
        // count -=1
        // console.log(count);
    }
  return (
    <div>
        <h1>Counter Application - {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default CounterApp