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
    const [data,setData] = useState("Loading")

    function handleIncrease() {
        setCount ((prevCount)=>prevCount+1);
    }

    // if else code
    let message;
    let remainingClick = 10 - count

    if (count < 10){
        message = (
            <div>
                <h3>You Clicked {count} times</h3>
                <p>Still {remainingClick} more times to reach a 10% discount</p>

            </div>
        )
    }
    else if (count === 10){
        message = (
            <div>
                <h3>You Clicked {count} times</h3>
                <p>You Unlocked a 10% discount </p>
            </div>

        )
    }
    else if (count<20){
        message = (
            <div>
                <h3>You Clicked {count} times</h3>
                <p>You're on the way to get more rewards! keep click for 20% discount </p>
            </div>

        )

    }
    else{
        message = (
            <div>
                <h3>You Clicked {count} times</h3>
                <p>You're reach to top rewards! You are the click Master </p>
            </div>

        )

    }

    // Switch Case Method
    let displayComp = () =>{
       switch(data){
        case "Loading" : return <LoadingComp />;
        break;
        case "Success" : return <SuccessComp />;
        break;
        case "Error" : return <ErrorComp />;
        break;
       }
    }

  return (
    <div>
        <h1>Click to Unlock Rewards 🎉</h1>
        <Button onClick={handleIncrease}>Click Me</Button>

        {/* Step - 1 Ternary Operator */}
        {/* {count>=10?(<p>You unlocked a 10% Discount</p>):(<p>Click 10 Timed to unlock Rewatd</p>)} */}

        {/* Step - 2 Logical And */}
        {/* {
            count >=20 && <p>You're a Click Master</p>
        } */}

        {/* Step - 3 if else Condition */}
        {message}

        {/* Step - 4 Switch Case */}
        {displayComp()}
        



    </div>
  )
}

export default CounterApp;

function LoadingComp(){
    return(
        <h4>Loading...</h4>
    )
}

function SuccessComp(){
    return(
        <h4>Successs❤</h4>
    )
}

function ErrorComp(){
    return(
        <h4>Error😲</h4>
    )
}


