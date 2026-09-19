import React from 'react'
import PropTypes from 'prop-types'

const Productdetails = ({deepName,deepPrice,deepDescription}) => {

    // let {product} = props
    // console.log(product);
    // console.log(props);
    
    return(
      
        <section>
            <h3>{deepName}</h3>
            <p>{deepPrice}</p>
            <p>{deepDescription}</p>
        </section>
        
    )
}

export default Productdetails;

Productdetails.propTypes = {
    deepName : PropTypes.string.isRequired,
    deepPrice : PropTypes.number.isRequired,
    deepDescription : PropTypes.string.isRequired
}
