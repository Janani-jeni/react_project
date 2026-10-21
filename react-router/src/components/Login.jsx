import React from 'react'
import { useParams } from "react-router-dom";

const Login = () =>{ 

    // Hooks Concept
    
    let {newUser} = useParams()
    
    return( 
        <>
            <h1>Login Page - {newUser}</h1>
        </>

    )
}
export default Login;