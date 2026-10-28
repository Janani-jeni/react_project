import React, { useEffect, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Products = () =>{ 

    let [count,setcount] = useState(0)
    let [count1,setcount1] = useState(0)

    // useEffect (()=>{
    //     console.log("This effect");
    // })
    //  useEffect (()=>{
    //     console.log("This effect will run");
    // },[])
    // console.log("Intial Render");

    useEffect (()=>{
        console.log("This effect will run only dependency");
    },[count])

    useEffect (()=>{
        console.log("This effect will run only dependency" + count1);
    },[count1])

    console.log("Intial Render");
    


    return( 
        <>
            <div>
                <h1>Products - {count} - {count1}</h1>
                <Button variant="primary" onClick={()=>setcount(count+1)} >Increase</Button>
                <Button variant="primary" onClick={()=>setcount1(count1+1)} >Increase 1</Button>
                <Link to="list">List</Link>
                <Link to="details">Details</Link>
                <Outlet />

            </div>
            
        </>

    )
}
export default Products;