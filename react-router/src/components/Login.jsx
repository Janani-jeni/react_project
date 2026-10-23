import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

const Login = () =>{ 

    // Hooks Concept
    
    let {newUser} = useParams()
    let navigate = useNavigate();

    let handleNavigate = () => {
        navigate("/");
    }
    
    return( 
        <>
            <div>
                
                <h1>Login Page - {newUser}</h1>
                <button onClick={handleNavigate}>Move to Home</button>

            </div>
            
        </>

    )
}
export default Login;