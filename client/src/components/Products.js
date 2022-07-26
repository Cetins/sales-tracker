import React from "react";
import SubTitle from "./SubTitle"
import ProductsTable from "./ProductsTable"

const Products = ({ products }) => {
    return (
        <div className="parent-container">
            <SubTitle title="Products"/>
            <ProductsTable products={products}/>
        </div>
    )
}

export default Products;