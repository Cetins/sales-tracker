import React from "react";

const SelectService = ({ services, handleServiceChange }) => {
    
    const serviceOptions = services.map((service, index) => {
        return <option key={service._id} value={index}>{service.title}</option>
    })
    
    return (
        <select onChange={handleServiceChange}>
            <option defaultValue={""}>Service Title</option>
            {serviceOptions}
        </select>
    )
}

export default SelectService;