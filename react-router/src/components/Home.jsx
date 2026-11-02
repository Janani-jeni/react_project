import useFetch from "./custom-hook/useFetch";

const Home = () =>{ 

    let {products} = useFetch("https://fakestoreapi.com/products")



    return( 
        <>
            <h1>Home - Total Products = {products.length}</h1>
        </>

    )
}
export default Home;