import React from 'react'
import Productdetails from './productdetails';

const ProductItem = ({product}) => {

    // let {product} = props
    console.log(product);
    
    return(
        <div>
            <h1>Displaying Product Items</h1>
            {/* <section>
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <p>{product.description}</p>
            </section> */}
            <Productdetails 
             deepName = {product.name}
             deepPrice = {product.price}
             deepDescription = {product.description}
            />
        </div>

    )
}

export default ProductItem;