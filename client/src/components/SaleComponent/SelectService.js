import React from "react";

const SelectService = ({ services }) => {
    const serviceOptions = services.map(service => {
        return <option key={service._id} value={service}>{service.title}</option>
    })
    return (
        <select>
            {serviceOptions}
        </select>
    )
}

export default SelectService;