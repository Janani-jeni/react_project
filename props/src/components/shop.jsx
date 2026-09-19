import React from 'react'
import { useState } from 'react';
import ProductItem from './productitem';


const Shop = () =>{

    let [product , setproduct] = useState({name:"janani",price:10000,description:"8GB ram with 128GB"})

    return(
        <div>
            <h1>Welcome to My Shop</h1>
            <ProductItem />
        </div>
    )
}
export default Shop;