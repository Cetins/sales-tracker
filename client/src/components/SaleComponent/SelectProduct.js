import React from "react";

const SelectProduct = ({ products }) => {
    const productOptions = products.map(product => {
        return <option key={product._id} value={product}>{product.title}</option>
    })
    return (
        <select>
            {productOptions}
        </select>
    )
}

export default SelectProduct;