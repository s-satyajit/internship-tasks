import React, {useContext} from "react";
import { ProductContext } from "../contexts/ProductContext";

const DisplayProduct = () => {

    const {products, loading, addProduct} = useContext(ProductContext)

    if(loading) return <div>Loading...</div>

    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}

export default DisplayProduct;