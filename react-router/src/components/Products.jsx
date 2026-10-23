import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Products = () =>{ 
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