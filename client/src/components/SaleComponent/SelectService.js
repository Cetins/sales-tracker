import React from "react";

const SelectService = ({ services, setService }) => {
    const handleServiceChange = (e) => {setService(services[e.target.value])};

    const serviceOptions = services.map((service, index) => {
        return <option key={service._id} value={index}>{service.title}</option>
    })
    return (
        <select onChange={handleServiceChange}>
            <option value="" selected>Service Title</option>
            {serviceOptions}
        </select>
    )
}

export default SelectService;