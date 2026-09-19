import React from 'react'
import styled from 'styled-components'
import CounterApp from './CounterApp'

    let Button = styled.button
    `
        background-color: blue;
        color:white;
        width: 100px;
        height: 50px;
    `

    let NewButton = styled(Button)
    `
        background-color: green;
    `

    let user = "Janani"


const Content = () =>{

    
    function printSome(e){
        // console.log(e.target.innerText);
        // console.log("Hello");
        user = "Jeni"
        console.log(user);
        
    }
    function printSome1(event){
        // console.log(event.target.innerText);
        // console.log("Hello World");
        user = "Janu"
        console.log(user);
        
    }

    return(
        <main>  
            <CounterApp />
        </main>
    )
}
export default Content;