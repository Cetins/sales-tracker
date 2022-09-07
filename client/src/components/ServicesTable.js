import React from "react";
import "../styles/Table.css"

const ServicesTable = ({ services }) => {
    const tableItems = services.map(item => {
        return (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.duration} mins</td>
                <td>£ {item.price}</td>
            </tr>
        )
    });

    return (
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </table>
    )
}

export default ServicesTable;