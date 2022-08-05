import React from "react";
import SubTitle from "../SubTitle";

const ProductInfo = ({ product }) => {
    return (
        <div>
            <SubTitle title={product.title} />
            <hr></hr>
            <br></br>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>Price: £ {product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    )
}

export default ProductInfo;