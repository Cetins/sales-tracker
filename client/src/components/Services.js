import React from "react";
import SubTitle from "./SubTitle"
import ServicesTable from "./ServicesTable";

const Services = ({ services }) => {

    return (
        <div className="child-container">
            <SubTitle title="Services"/>
            <ServicesTable services={services}/>
        </div>
    )
}

export default Services;