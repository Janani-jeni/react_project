import React, { useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";

const Products = () =>{ 

    useEffect (()=>{
        console.log("This effect");
    })
    console.log("Intial Render");
    



    return( 
        <>
            <div>
                <h1>Products Page</h1>
                
                <Link to="list">List</Link>
                <Link to="details">Details</Link>
                <Outlet />

            </div>
            
        </>

    )
}
export default Products;