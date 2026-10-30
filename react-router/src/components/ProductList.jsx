import React, { useEffect, useState }  from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductList = () => {

    let [products,setProducts] = useState ([])
    let [error,setError] = useState("")
    let [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        fetch("http://localhost:4000/products", {method:"GET"})
        // Resolve
        .then((response)=>{
            if(response.ok){
                return response.json();
            }
            
        })
        .then((data)=>{setProducts (data);})
        // Reject
        .catch((error)=>{
            setError(error.message);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[])


    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else{

        return(
            <div>
                <h1>Product List</h1>
                <seaction className='products'>
                    {
                        products.map(product=>(
                            <Card key={product.id} style={{ width: '18rem' }} className="product">
                                <center> <Card.Img variant="top" src={product.image} style={{ width: '9rem' , height:'12rem' }}/></center>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text style={{overflow:"scroll" , height:"100px"}}>{product.description}</Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Footer>
                            </Card>
                        ))
                    }
                </seaction>
                {
                    error && <p>{error}</p>
                }
            </div>
        )
    }

  
}
export default ProductList;