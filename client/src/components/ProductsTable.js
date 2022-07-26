import React from "react";
import SubTitle from "./SubTitle";
import "../styles/Table.css"

const ProductsTable = ({ products }) => {
    const tableItems = products.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.manufacturer} mins</td>
                <td>£ {item.price}</td>
                <td>£ {item.sale_price}</td>
                <td>{item.stock}</td>
            </tr>
        )
    });

    return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Manufacturer</th>
                        <th>Price</th>
                        <th>Sale Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
    )
}

export default ProductsTable;