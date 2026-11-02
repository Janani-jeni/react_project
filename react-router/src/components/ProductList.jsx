import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LifeLine } from 'react-loading-indicators';
import useFetch from "./custom-hook/useFetch";

const ProductList = () => {

    // Custom Hook call - URL pass panrom:
    let { products, error, isLoading } = useFetch("https://fakestoreapi.com/products");

    if (isLoading) {
        return (
            <div>
                <center style={{ marginTop: "50px" }}>
                    <LifeLine color="#32cd32" size="medium" text="Loading" textColor="" />
                </center>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Product List</h1>
                {
                    products?.length > 0 && (
                        <section className='products'>
                            {
                                products.map(product => (
                                    <Card key={product.id} style={{ width: '18rem' }} className="product">
                                        <center> <Card.Img variant="top" src={product.image} style={{ width: '9rem', height: '12rem' }} /></center>
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text style={{ overflow: "scroll", height: "100px" }}>{product.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            <Card.Text>${product.price}</Card.Text>
                                            <Button variant="primary">Add to cart</Button>
                                        </Card.Footer>
                                    </Card>
                                ))
                            }
                        </section>
                    )
                }
                {
                    error && <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>{error}</p>
                }
            </div>
        );
    }
};

export default ProductList;
