import React from "react";
import SubTitle from "./SubTitle"
import ProductsTable from "./ProductsTable"

const Products = ({ products }) => {
    const stockTotal = products.reduce((total, sale) => total + sale.price, 0);
    const stockTitle = `Net Stock Worth is £ ${stockTotal}`

    return (
        <div className="parent-container">
            <SubTitle title="Products"/>
            <ProductsTable products={products} stockTotal={stockTotal}/>
            <SubTitle title={stockTitle}/>
        </div>
    )
}

export default Products;