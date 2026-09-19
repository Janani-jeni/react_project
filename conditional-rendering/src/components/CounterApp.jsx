import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button
`
width : 150px;
height: 50px;
background-color:blue;
color:white;
`

const CounterApp = () => {
    // let count = 0
    
    let [count , setCount] = useState(0)

    function handleIncrease() {
        setCount ((prevCount)=>prevCount+1);
       
    }

  return (
    <div>
        <h1>Click to Unlock Rewards 🎉</h1>
        <Button onClick={handleIncrease}>Click Me</Button>
    </div>
  )
}

export default CounterApp