import React from "react";

const ProductsTable = ({ products }) => {
    const listItems = products.map(item => {
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

    return
}

export default ProductsTable;