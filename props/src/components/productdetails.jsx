import React from 'react'
import PropTypes from 'prop-types'

const Productdetails = ({deepName = "Samsung" ,deepPrice = 3000 ,deepDescription = "12GB RAM With 240GB"}) => {

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

// Productdetails.defaultProps = {
//     deepName : "Samsung",
//     deepPrice : 3000,
//     deepDescription : "12GB RAM With 240GB"
// }

Productdetails.propTypes = {
    deepName : PropTypes.string.isRequired,
    deepPrice : PropTypes.number.isRequired,
    deepDescription : PropTypes.string.isRequired
}
