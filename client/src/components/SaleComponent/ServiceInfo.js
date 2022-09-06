import React from "react";
import SubTitle from '../SubTitle'

const ServiceInfo = ({ service }) => {
    return (
        <div>
            <SubTitle title={service.title}/>
            <hr></hr>
            <br></br>
            <p>Duration: {service.duration} mins</p>
            <p>Price: £ {service.price}</p>
        </div>
    )
}

export default ServiceInfo;