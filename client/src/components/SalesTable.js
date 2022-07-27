import React from "react";
import "../styles/Table.css"

const SalesTable = ({ sales }) => {
    const tableItems = sales.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>£ {item.price}</td>
                <td>{item.staff}</td>
                <td>{item.date}</td>
            </tr>
        )
    });

    return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Payment</th>
                        <th>Staff</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
    )
}

export default SalesTable;
